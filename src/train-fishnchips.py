# %%
import time
import tensorflow as tf 
import numpy as np
import sys
import json
import os
import mappy as mp

from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, print_tensor_to_file
from utils.attention_evaluation_utils import build, evaluate_batch

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_combined_mask
from models.FishNChips import FishNChips

set_gpu_growth()

#%%

config_filename = "configs/train-fishnchips-config-skel.json"

if len(sys.argv)>1:
  config_filename = sys.argv[1]
with open(config_filename, "r") as f:
  config = json.load(f)

print(json.dumps(config, indent=4))

MODEL_SAVE_FILENAME = f"./trained_models/fishnchips62v_{config['D_MODEL']}_{config['CNN_BLOCKS']}CNN_{config['NUM_HEADS']}H_{config['ATTENTION_BLOCKS']}B"
if config['MAX_POOL_KERNEL'] != 2:
    MODEL_SAVE_FILENAME = f"{MODEL_SAVE_FILENAME}_{config['MAX_POOL_KERNEL']}MPK"

if os.path.isfile(f"{MODEL_SAVE_FILENAME}.h5"):
  answer = input("This model exists, are you sure you want to overwrite it? [y/N]:")
  if answer not in "Yy":
    sys.exit()

#%%
filename = "mapped_therest.hdf5"
bacteria = ["Bacillus", "Staphylococcus", "Lactobacillus", "Pseudomonas", "Listeria", "Enterococcus"]
generator = AttentionDataGenerator(filename, bacteria, config['BATCH_SIZE'], config['STRIDE'], config['ENCODER_MAX_LENGTH'], config['DECODER_MAX_LENGTH'])

train_loss = tf.keras.metrics.Mean(name='train_loss')
train_accuracy = tf.keras.metrics.SparseCategoricalAccuracy(name='train_accuracy')
loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

learning_rate = CustomSchedule(config['D_MODEL']*config['L_RATE_MULT'])
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNChips(
  num_cnn_blocks=config['CNN_BLOCKS'], 
  max_pool_layer_idx=config['MAXPOOL_IDX'], 
  max_pool_kernel_size=config['MAX_POOL_KERNEL'],
  num_layers=config['ATTENTION_BLOCKS'], 
  d_model=config['D_MODEL'], 
  output_dim=1 + 4 + 1 + 1, # PAD + ATCG + START + STOP
  num_heads=config['NUM_HEADS'],
  dff=config['DFF'], 
  pe_encoder_max_length=config['ENCODER_MAX_LENGTH'], 
  pe_decoder_max_length=config['DECODER_MAX_LENGTH'], 
  rate=config['DROPOUT_RATE'])

train_step_signature = [
    tf.TensorSpec(shape=(config['BATCH_SIZE'], config['ENCODER_MAX_LENGTH'], 1), dtype=tf.float32),
    tf.TensorSpec(shape=(config['BATCH_SIZE'], config['DECODER_MAX_LENGTH']), dtype=tf.int32),
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

READS_TO_VALIDATE = 5
VAL_BACT = ['Escherichia', 'Salmonella']

config['VALIDATION_STRIDE'] = config['ENCODER_MAX_LENGTH']
val_generator = AttentionDataGenerator(filename, VAL_BACT, config['BATCH_SIZE'], config['VALIDATION_STRIDE'], config['ENCODER_MAX_LENGTH'], config['DECODER_MAX_LENGTH'])

aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

def get_cig_acc(assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen) 
    except:
        return 0


def get_val_acc():
  val_loss = 0
  performed = 0
  for r in range(READS_TO_VALIDATE):
    print(f"{r}/{READS_TO_VALIDATE}")
    try:
        x_windows, y_windows, _, _, _ = next(val_generator.get_window_batch(label_as_bases=True))
        nr_windows = len(x_windows)

        assert nr_windows == len(y_windows)

        y_pred = []
        for b in range(0,nr_windows,config['BATCH_SIZE']*10):
            x_batch = x_windows[b:b+config['BATCH_SIZE']*10]          
            y_batch_pred, _ = evaluate_batch(x_batch, fish, len(x_batch), as_bases=True)
            y_pred.extend(y_batch_pred)

        assembly = "".join(y_pred)
        acc = get_cig_acc(assembly)
        val_loss += acc
        performed += 1
    except Exception as e:
        print(e)
  return val_loss/performed # not using READS_TO_VALIDATE in case of error caught by catch

#%%
old_acc = 0
accs = []
waited = 0

for epoch in range(config['EPOCHS']):
    # ignore patience until epoch 200
    if epoch < 200:
      waited = 0

    start = time.time()
    train_loss.reset_states()
    train_accuracy.reset_states()
    batches = next(generator.get_batches(config['NO_BATCHES']))

    for (batch, (inp, tar)) in enumerate(batches):  
        inp = tf.constant(inp, dtype=tf.float32)
        tar = tf.constant(tar, dtype=tf.int32)
        train_step(inp, tar)

        print (f'Epoch {epoch + 1} Batch {batch} Loss {train_loss.result():.4f} Accuracy {train_accuracy.result():.4f}', end="\r")

    val_acc = get_val_acc()

    accs.append([train_loss.result(), train_accuracy.result(), val_acc, time.time()])
    np.save(f"{MODEL_SAVE_FILENAME}.npy", np.array(accs))    
    
    loss = train_loss.result()
    acc = train_accuracy.result()
    print (f'Epoch {epoch + 1} Loss {loss:.4f} Accuracy {acc:.4f}, valloss {val_acc}, took {time.time() - start} secs')

    if val_acc > old_acc:
        waited = 0
        old_acc = val_acc
        fish.save_weights(f"{MODEL_SAVE_FILENAME}.h5")
    else:
        waited += 1
        if waited > config['PATIENCE']:
            print("Out of patience, exiting...")
            break
         
