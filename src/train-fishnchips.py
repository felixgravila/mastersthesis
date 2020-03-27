#%% 
import sys
import math
import tensorflow as tf
import numpy as np
import time
#sys.path.insert(0,'./src')

#from models.FishNChips import FishNChips
from models.Callback import SaveCB
from models.Attention.Transformer import Transformer

from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

input_length = 300
use_maxpool = True

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=1000, input_length=input_length, stride=30, reads_count=5, use_maxpool=use_maxpool)

val_read_ids = data_preper.get_validation_read_ids()
val_generator = DataGenerator(val_read_ids, batch_size=500, input_length=input_length, stride=150, reads_count=5, use_maxpool=use_maxpool)

#%%

def printt(value):
    print(20*">")
    print(value)
    print(20*">")

train_loss = tf.keras.metrics.Mean(name='train_loss')
train_accuracy = tf.keras.metrics.SparseCategoricalAccuracy(name='train_accuracy')

loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

def loss_function(real, pred):
    mask = tf.math.logical_not(tf.math.equal(real, 0))
    loss_ = loss_object(real, pred)

    mask = tf.cast(mask, dtype=loss_.dtype)
    loss_ *= mask
    
    return tf.reduce_mean(loss_)

learning_rate = CustomSchedule(256)
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

# fish = FishNChips(d_model=256, num_cnn_blocks=5, max_pool_layer_idx=3, training=False)

num_layers = 4
d_model = 256
dff = 512
num_heads = 8

input_vocab_size = 4 + 2
target_vocab_size = 4 + 2
dropout_rate = 0.1

transformer = Transformer(num_layers=num_layers, d_model=d_model, output_dim=4, num_heads=num_heads, dff=dff, pe_input=1000, pe_target=target_vocab_size, rate=dropout_rate)

EPOCHS = 2

# The @tf.function trace-compiles train_step into a TF graph for faster
# execution. The function specializes to the precise shape of the argument
# tensors. To avoid re-tracing due to the variable sequence lengths or variable
# batch sizes (the last batch is smaller), use input_signature to specify
# more generic shapes.

@tf.function()
def train_step(inp, tar):
  tar_inp = tar[:, :-1]
  tar_real = tar[:, 1:]
  
  
  # TODO: consider not adding mask on input
  combined_mask = create_combined_mask(tar_inp)
  
  with tf.GradientTape() as tape:
    predictions, _ = transformer(inp, tar_inp, True, combined_mask)
    loss = loss_function(tar_real, predictions)

  gradients = tape.gradient(loss, transformer.trainable_variables)    
  optimizer.apply_gradients(zip(gradients, transformer.trainable_variables))
  
  train_loss(loss)
  train_accuracy(tar_real, predictions)

# make train_dataset
ex_X = tf.random.uniform((2, 150, 256))
ex_y = tf.constant([[5, 1, 2, 1, 4, 3, 3, 2, 6, 0, 0, 0, 0],
                    [5, 2, 1, 3, 4, 1, 1, 2, 2, 2, 6, 0, 0]])
train_dataset = [[ex_X, ex_y]]

for epoch in range(EPOCHS):
  start = time.time()
  
  train_loss.reset_states()
  train_accuracy.reset_states()
  
  # inp -> portuguese, tar -> english
  for (batch, (inp, tar)) in enumerate(train_dataset):
    inp = tf.constant(inp)
    tar = tf.constant(tar)
    train_step(inp, tar)
    
    if batch % 50 == 0:
      print ('Epoch {} Batch {} Loss {:.4f} Accuracy {:.4f}'.format(
          epoch + 1, batch, train_loss.result(), train_accuracy.result()))
    
  print ('Epoch {} Loss {:.4f} Accuracy {:.4f}'.format(epoch + 1, 
                                                train_loss.result(), 
                                                train_accuracy.result()))

  print ('Time taken for 1 epoch: {} secs\n'.format(time.time() - start))