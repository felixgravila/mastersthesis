# %%
import time
import tensorflow as tf 
import numpy as np
import matplotlib.pyplot as plt

from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, print_tensor_to_file

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import evaluate_batch, evaluate_batch_ctc

set_gpu_growth()

#%%
EPOCHS = 9999
PATIENCE = 300
NO_BATCHES = 10
BATCH_SIZE = 3

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

#%%
read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)

train_loss = tf.keras.metrics.Mean(name='train_loss')
loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

learning_rate = CustomSchedule(D_MODEL)
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNChips(
  num_cnn_blocks=CNN_BLOCKS, 
  max_pool_layer_idx=MAXPOOL_IDX, 
  num_layers=ATTENTION_BLOCKS, 
  d_model=D_MODEL, 
  output_dim=1 + 4 + 1 + 1 + 1, # PAD + ATCG + - + START + STOP
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
def train_step(inp, labels, input_length, label_length):
  with tf.GradientTape() as tape: 
    predictions, _ = evaluate_batch_ctc(inp, fish)
    # print_tensor_to_file(predictions)
    loss = tf.keras.backend.ctc_batch_cost(labels, predictions, input_length, label_length)

  gradients = tape.gradient(loss, fish.trainable_variables)
  # print_tensor_to_file(gradients)
  optimizer.apply_gradients(zip(gradients, fish.trainable_variables))

  train_loss(loss)

#%%

def normalise_squiggle(squiggle):
  squig_min = min(squiggle)
  squig_max = max(squiggle)
  squiggle = (squiggle-squig_min)/(squig_max-squig_min)
  return squiggle

def make_anim_image(X, epoch):
  print(f"Making animation image for epoch {epoch}...")
  predictions, _ = evaluate_batch_ctc(X, fish)
  pred = predictions[0]
  pred_transp = list(map(list, zip(*pred)))
  
  plt.figure(figsize=(10,5))
  for i,l in enumerate(pred_transp):
    ll = list(np.repeat(l, 3))
    plt.plot(ll, label=i)
  plt.plot(normalise_squiggle(X[0]), c="k")
  plt.legend()
  plt.savefig(f"trained_models/image_e{epoch:05d}.png")
  plt.close()


#%%
old_loss = 1
losses = []
waited = 0

Xforimg = np.array([next(generator.get_batch())[0][0]])

for epoch in range(EPOCHS):
    start = time.time()
    train_loss.reset_states()
    batches = next(generator.get_batches_ctc(NO_BATCHES))

    for (batch, (inp, tar)) in enumerate(batches):
      try:
        input_length = tf.constant([[DECODER_MAX_LENGTH]]*BATCH_SIZE)  
        label_length = tf.constant([[len(y)] for y in tar])
        labels = []
        for label in tar:
          label.extend([0]*(DECODER_MAX_LENGTH-len(label)))
          labels.append(label)

        inp = tf.constant(inp, dtype=tf.float32)
        labels = tf.constant(labels, dtype=tf.int32)
        train_step(inp, labels, input_length, label_length)

        # if batch % 10 == 0:
        if True:
            print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f}')
      except Exception as e:
        print(e)

    losses.append([train_loss.result()])
    np.save(f"./trained_models/train_res_ctc_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H", np.array(losses))

    make_anim_image(Xforimg, epoch)

    loss = train_loss.result()
    print (f'Epoch {epoch + 1} Loss {loss:.4f}')
    print (f'Time taken for 1 epoch: {time.time() - start} secs\n')

    if loss < old_loss:
        old_loss = loss
        fish.save_weights(f"./trained_models/fish_weights_ctc_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H.h5")
    else:
        waited += 1
        if waited > PATIENCE:
            print("Out of patience, exiting...")
            break
         
