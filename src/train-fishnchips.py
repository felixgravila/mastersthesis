#%% 
import sys
import math
import tensorflow as tf
import numpy as np
import time
#sys.path.insert(0,'./src')

from models.FishNChips import FishNChips
from models.Callback import SaveCB

from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

INPUT_LENGTH = 300
use_maxpool = True

EPOCHS = 5000
NO_BATCHES = 200
BATCH_SIZE = 32

# EPOCHS = 1
# NO_BATCHES = 1
# BATCH_SIZE = 2

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=NO_BATCHES*BATCH_SIZE, input_length=INPUT_LENGTH, stride=30, reads_count=5, use_maxpool=use_maxpool)

val_read_ids = data_preper.get_validation_read_ids()
val_generator = DataGenerator(val_read_ids, batch_size=10*BATCH_SIZE, input_length=INPUT_LENGTH, stride=150, reads_count=5, use_maxpool=use_maxpool)

#%%

def printf(value, file="info"):
    tf.print(value, output_stream=f"file://./{file}.out", summarize=1000000)

def printt(value, *args, **kwargs):
    print(20*">")
    print(value, *args, **kwargs)
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
d_model = 1024  
dff = 2*d_model
num_heads = 8

pe_encoder_max_length = 300
pe_decoder_max_length = 100
dropout_rate = 0.1

#transformer = Transformer(num_layers=num_layers, d_model=d_model, output_dim=4, num_heads=num_heads, dff=dff, pe_encoder_max_length=pe_encoder_max_length, pe_decoder_max_length=pe_decoder_max_length, rate=dropout_rate)

fish = FishNChips(
  num_cnn_blocks=5, 
  max_pool_layer_idx=3, 
  num_layers=num_layers, 
  d_model=d_model, 
  output_dim=1 + 4 + 1 + 1, # PAD + ATCG + START + STOP
  num_heads=num_heads, 
  dff=dff, 
  pe_encoder_max_length=pe_encoder_max_length, 
  pe_decoder_max_length=pe_decoder_max_length, 
  rate=dropout_rate)

#%%


# The @tf.function trace-compiles train_step into a TF graph for faster
# execution. The function specializes to the precise shape of the argument
# tensors. To avoid re-tracing due to the variable sequence lengths or variable
# batch sizes (the last batch is smaller), use input_signature to specify
# more generic shapes.

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
    loss = loss_function(tar_real, predictions)

  gradients = tape.gradient(loss, fish.trainable_variables)
  # printf(gradients)
  optimizer.apply_gradients(zip(gradients, fish.trainable_variables))
  
  train_loss(loss)
  train_accuracy(tar_real, predictions)

# # make train_dataset
# ex_X = tf.random.uniform((2, 300, 1))
# ex_y = tf.constant([[5, 1, 2, 1, 4, 3, 3, 2, 6, 0, 0, 0, 0],
#                     [5, 2, 1, 3, 4, 1, 1, 2, 2, 2, 6, 0, 0]])
# train_dataset = [[ex_X, ex_y]]

old_loss = 1
accs = []
PATIENCE = 300
waited = 0

for epoch in range(EPOCHS):

  """
  Making old generator value work for new model
  This should probably get reworked at some point 
  """
  val = next(generator.get_batch())

  train_X_batch = val[0]['the_input'].reshape(-1, BATCH_SIZE, INPUT_LENGTH, 1)
  train_y_orig = val[0]['unpadded_labels']
  train_y_batch = []
  for y in train_y_orig:
    y = [t+1 for t in y] # since 0 is a base
    y.insert(0, 5) # add 5 as start token
    y.append(6) # add 6 as end token
    y.extend([0]*(pe_decoder_max_length-len(y))) # pad with zeros to pe_decoder_max_length
    train_y_batch.append(y)
  train_y_batch = np.array(train_y_batch)
  train_y_batch = train_y_batch.reshape((-1, BATCH_SIZE, 100))
  # Done reshaping datad

  start = time.time()
  train_loss.reset_states()
  train_accuracy.reset_states()
  
  # inp -> portuguese, tar -> english
  for (batch, (inp, tar)) in enumerate(list(zip(train_X_batch, train_y_batch))):
    inp = tf.constant(inp, dtype=tf.float32)
    tar = tf.constant(tar, dtype=tf.int32)
    train_step(inp, tar)
    
    if batch % 10 == 0:
      print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f} Accuracy {train_accuracy.result():.4f}')
    accs.append([train_loss.result(), train_accuracy.result()])
    np.save(f"train_res_{d_model}", np.array(accs))
    
  loss = train_loss.result()
  acc = train_accuracy.result()
  print (f'Epoch {epoch + 1} Loss {loss:.4f} Accuracy {acc:.4f}')
  print (f'Time taken for 1 epoch: {time.time() - start} secs\n')

  if loss < old_loss:
    old_loss = loss
    fish.save_weights(f"fish_weights_{d_model}.h5")
  else:
    waited += 1
    if waited > PATIENCE:
      print("Out of patience, exiting...")
      break



# %%
