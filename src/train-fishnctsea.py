# %%
import time
import tensorflow as tf 
import numpy as np
import matplotlib.pyplot as plt

from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, print_tensor_to_file, labelBaseMap

from models.Attention.CustomSchedule import CustomSchedule
from models.FishNCTSea import FishNCTSea
from utils.attention_evaluation_utils import evaluate_batch, evaluate_batch_ctc

import editdistance

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
D_MODEL = 512
DFF = 2*D_MODEL
NUM_HEADS = 8
DROPOUT_RATE = 0.1
STRIDE = 30

#%%
read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = DataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, 5, False)

train_loss = tf.keras.metrics.Mean(name='train_loss')
learning_rate = CustomSchedule(D_MODEL*8)
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNCTSea(
  num_cnn_blocks=CNN_BLOCKS, 
  max_pool_layer_idx=MAXPOOL_IDX, 
  num_layers=ATTENTION_BLOCKS, 
  d_model=D_MODEL, 
  output_dim= 4 + 1, # ATCG + -
  num_heads=NUM_HEADS, 
  dff=DFF,
  pe_encoder_max_length=ENCODER_MAX_LENGTH,
  rate=DROPOUT_RATE)
fish.build(input_shape=(None, ENCODER_MAX_LENGTH, 1))
  
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
    predictions = fish(inp, training=True)
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
  predictions = fish(X, training=False)
  pred = predictions[0]
  pred_transp = list(map(list, zip(*pred)))
  
  plt.figure(figsize=(10,5))
  for i,l in enumerate(pred_transp):
    # l = list(np.repeat(l, 3))
    plt.plot(l, label=i)
  plt.plot(normalise_squiggle(X[0]), c="k")
  plt.legend()
  plt.savefig(f"trained_models/fishnctsea_image_e{epoch:05d}.png")
  plt.close()


def test_edit_distance():
  print(f"Testing ed for epoch {epoch}...")
  batch, _ = next(generator.get_batch())
  test_data = batch['the_input']
  test_labels = batch['unpadded_labels']
  test_labels = ["".join([labelBaseMap[x] for x in y]) for y in test_labels]
  predictions = fish.predict(test_data)

  eds = [editdistance.eval(p,t) for (p,t) in zip(predictions, test_labels)]
  return np.mean(eds)


#%%
old_loss = 1000000000
losses = []
waited = 0

Xforimg = next(generator.get_batch())[0]['the_input']

for epoch in range(EPOCHS):
    start = time.time()
    train_loss.reset_states()

    for batch in range(NO_BATCHES):
      gen_data,_ = next(generator.get_batch())

      try:
        input_length = tf.constant(gen_data['input_length'], dtype=tf.int32)  
        label_length = tf.constant(gen_data['label_length'], dtype=tf.int32)
        inp = tf.constant(gen_data['the_input'], dtype=tf.float32)
        labels = tf.constant(gen_data['the_labels'], dtype=tf.int32)
        train_step(inp, labels, input_length, label_length)

        # if batch % 10 == 0:
        if True:
            print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f}', end="\r")
      except Exception as e:
        print(e)

    losses.append([train_loss.result()])
    np.save(f"./trained_models/train_res_fisnctsea_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H", np.array(losses))

    make_anim_image(Xforimg, epoch)

    aed = test_edit_distance()

    loss = train_loss.result()
    print (f'Epoch {epoch + 1} Loss {loss:.4f} AED {aed:.4f} TOOK {time.time() - start} secs')

    if aed < old_loss:
      waited = 0
      old_loss = aed
      fish.save_weights(f"./trained_models/fishnctsea_weights_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H.h5")
    else:
        waited += 1
        if waited > PATIENCE:
            print("Out of patience, exiting...")
            break
         
