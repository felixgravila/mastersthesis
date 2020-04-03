# %%
import time
import tensorflow as tf 
import numpy as np

from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, print_tensor_to_file

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask
from models.FishNChips import FishNChips

set_gpu_growth()

#%%
EPOCHS = 5000
PATIENCE = 300
NO_BATCHES = 200
BATCH_SIZE = 32

ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 5
MAXPOOL_IDX = 3
D_MODEL = 256
DFF = 2*D_MODEL
NUM_HEADS = 8
DROPOUT_RATE = 0.1
STRIDE = 30

#%%
read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)

train_loss = tf.keras.metrics.Mean(name='train_loss')
train_accuracy = tf.keras.metrics.SparseCategoricalAccuracy(name='train_accuracy')
loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

learning_rate = CustomSchedule(D_MODEL)
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNChips(
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

train_step_signature = [
    tf.TensorSpec(shape=(None, None, 1), dtype=tf.float32),
    tf.TensorSpec(shape=(None, None), dtype=tf.int32),
]

@tf.function(input_signature=train_step_signature)
def train_step(inp, tar):
  tar_inp = tar[:, :-1]
  tar_real = tar[:, 1:]

  combined_mask = create_combined_mask(tar_inp)
  
  with tf.GradientTape() as tape:
    predictions, _ = fish(inp, tar_inp, True, combined_mask)   
    loss = fish.get_loss(tar_real, predictions, loss_object)

  gradients = tape.gradient(loss, fish.trainable_variables)
  #print_tensor_to_file(gradients)
  optimizer.apply_gradients(zip(gradients, fish.trainable_variables))

  train_loss(loss)
  train_accuracy(tar_real, predictions)

#%%
old_loss = 1
accs = []
waited = 0

for epoch in range(EPOCHS):
    start = time.time()
    train_loss.reset_states()
    train_accuracy.reset_states()
    batches = next(generator.get_batches(NO_BATCHES))

    for (batch, (inp, tar)) in enumerate(batches):  
        inp = tf.constant(inp, dtype=tf.float32)
        tar = tf.constant(tar, dtype=tf.int32)
        train_step(inp, tar)

        if batch % 10 == 0:
            print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f} Accuracy {train_accuracy.result():.4f}')
        accs.append([train_loss.result(), train_accuracy.result()])
        np.save(f"train_res_{D_MODEL}", np.array(accs))    

    loss = train_loss.result()
    acc = train_accuracy.result()
    print (f'Epoch {epoch + 1} Loss {loss:.4f} Accuracy {acc:.4f}')
    print (f'Time taken for 1 epoch: {time.time() - start} secs\n')

    if loss < old_loss:
        old_loss = loss
        fish.save_weights(f"fish_weights_{D_MODEL}.h5")
    else:
        waited += 1
        if waited > PATIENCE:
            print("Out of patience, exiting...")
            break
         
