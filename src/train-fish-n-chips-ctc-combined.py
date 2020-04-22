# %%
import time
import tensorflow as tf 
import numpy as np
import matplotlib.pyplot as plt
import editdistance

from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, print_tensor_to_file

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask
from models.FishNChipsCTSea import FishNChipsCTSea
from utils.attention_evaluation_utils import evaluate_batch_ctc_combined

set_gpu_growth()

#%%
EPOCHS = 9999
PATIENCE = 300
NO_BATCHES = 100
BATCH_SIZE = 32

ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 0
MAXPOOL_IDX = 3 # ignored if > CNN_BLOCKS
D_MODEL = 256
DFF = 2*D_MODEL
NUM_HEADS = 8
DROPOUT_RATE = 0.1
STRIDE = 30
ALPHA = 0.1

#%%
read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)

train_loss = tf.keras.metrics.Mean(name='train_loss')
loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

learning_rate = CustomSchedule(D_MODEL) #DMODEL * 2 -> lr / 2
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNChipsCTSea(
  num_cnn_blocks=CNN_BLOCKS, 
  max_pool_layer_idx=MAXPOOL_IDX, 
  num_layers=ATTENTION_BLOCKS, 
  d_model=D_MODEL, 
  output_dim=1 + 4 + 1 + 1, # PAD + ATCG + START + STOP
  num_heads=NUM_HEADS, 
  dff=DFF, 
  pe_encoder_max_length=ENCODER_MAX_LENGTH, 
  pe_decoder_max_length=DECODER_MAX_LENGTH, 
  rate=DROPOUT_RATE)
  
""" 
ctc_batch_cost(labels, y_pred, input_length, label_length) 
labels = tf.constant([[1,2,3,0,0],[2,3,1,1,0]])
y_pred = tf.random.uniform((2, 100, 5))
input_length = tf.constant([[100], [100]])
label_length = tf.constant([[3], [4]])
"""
# train_step_signature = [
#     tf.TensorSpec(shape=(BATCH_SIZE, ENCODER_MAX_LENGTH, 1), dtype=tf.float32),
#     tf.TensorSpec(shape=(BATCH_SIZE, DECODER_MAX_LENGTH), dtype=tf.int32),
#     tf.TensorSpec(shape=(BATCH_SIZE, 1), dtype=tf.int32),
#     tf.TensorSpec(shape=(BATCH_SIZE, 1), dtype=tf.int32)
# ]
# @tf.function(input_signature=train_step_signature)
def train_step(inp, tar, labels, input_length, label_length):
  
  tar_inp = tar[:, :-1]
  tar_real = tar[:, 1:]
  combined_mask = create_combined_mask(tar_inp)

  with tf.GradientTape() as tape: 
    enc_out, dec_out = fish(inp, tar_inp, True, combined_mask)
    
    loss_ctc = tf.keras.backend.ctc_batch_cost(labels, enc_out, input_length, label_length) / ENCODER_MAX_LENGTH
    loss_dec = get_decoder_loss(tar_real, dec_out, loss_object)
    loss_ = ALPHA * loss_ctc + (1-ALPHA) * loss_dec
    loss = tf.reduce_mean(loss_)

    # loss_ = get_decoder_loss(tar_real, dec_out, loss_object)
    # loss = tf.reduce_mean(loss_)

  gradients = tape.gradient(loss, fish.trainable_variables)
  optimizer.apply_gradients(zip(gradients, fish.trainable_variables))

  train_loss(loss)

#%%

def get_decoder_loss(real, pred, loss_object):
    mask = tf.math.logical_not(tf.math.equal(real, 0))
    loss_ = loss_object(real, pred)

    mask = tf.cast(mask, dtype=loss_.dtype)
    loss_ *= mask
    #return tf.reduce_mean(loss_)
    return loss_

def normalise_squiggle(squiggle):
  squig_min = min(squiggle)
  squig_max = max(squiggle)
  squiggle = (squiggle-squig_min)/(squig_max-squig_min)
  return squiggle

def make_anim_image(inp, tar, epoch):
  print(f"Making animation image for epoch {epoch}...")
  mask = create_combined_mask(tar)
  predictions_enc, _ = fish(inp, tar, False, mask)
  
  pred = predictions_enc[0]
  pred_transp = list(map(list, zip(*pred)))
  
  plt.figure(figsize=(10,5))
  for i,l in enumerate(pred_transp):
    #ll = list(np.repeat(l, 3))
    plt.plot(l, label=i)
  plt.plot(normalise_squiggle(inp[0]), c="k")
  plt.legend()
  plt.savefig(f"trained_models/image_e{epoch:05d}.png")
  plt.close()

def test_edit_distance(output=False):
    print("evaluating...")
    x_batch, y_batch_true = next(generator.get_batch(label_as_bases=True))
    y_batch_pred = evaluate_batch_ctc_combined(x_batch, fish, BATCH_SIZE, as_bases=True)

    eds = []
    for _, (t, p) in enumerate(zip(y_batch_true, y_batch_pred)):
      ed = editdistance.eval(t, p)
      eds.append(ed)
      if(output):
        print(f"ED:{editdistance.eval(t,p)}, True:{t}, Pred:{p}")
    return np.array(eds).mean()
#%%
old_loss = 1000000000
losses = []
waited = 0
aed = 1000000000

img_data = next(generator.get_batch_combined())
img_inp = np.array([img_data[0][0]])
img_tar = np.array([img_data[2][0]])

for epoch in range(EPOCHS):
    start = time.time()
    train_loss.reset_states()
    batches = next(generator.get_batches_combined(NO_BATCHES))

    for (batch, (inp, y_orig, y_tar)) in enumerate(batches):
      try:
        input_length = tf.constant([[ENCODER_MAX_LENGTH]]*BATCH_SIZE)  
        label_length = tf.constant([[len(y)] for y in y_orig])
        labels = []
        for label in y_orig:
          label.extend([0]*(ENCODER_MAX_LENGTH-len(label)))
          labels.append(label)

        inp = tf.constant(inp, dtype=tf.float32)
        tar = tf.constant(y_tar, dtype=tf.int32)
        labels = tf.constant(labels, dtype=tf.int32)
        
        train_step(inp, tar, labels, input_length, label_length)

        # if batch % 10 == 0:
        if True:
            print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f}', end="\r")
      except Exception as e:
        print(e)

    losses.append([train_loss.result()])
    np.save(f"./trained_models/fish-n-chips-ctsea-combined_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H_{ATTENTION_BLOCKS}B", np.array(losses))

    make_anim_image(img_inp, img_tar, epoch)

    if epoch % 5 == 0:
      aed = test_edit_distance(output=True)
    
    loss = train_loss.result()
    print (f'Epoch {epoch + 1} Loss {loss:.4f} AED {aed:.4f} TOOK {time.time() - start} secs')

    if aed < old_loss:
      waited = 0
      old_loss = aed
      fish.save_weights(f"./trained_models/fish-n-chips-ctsea-combined_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H_{ATTENTION_BLOCKS}B.h5")
    else:
        waited += 1
        if waited > PATIENCE:
            print("Out of patience, exiting...")
            break
         

         
