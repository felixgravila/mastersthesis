from functools import total_ordering
import sys
#sys.path.insert(0,'./../src')
sys.path.insert(0,'./src')

import tensorflow as tf
import numpy as np
from datetime import datetime 

from utils.AttentionDataGenerator import AttentionDataGenerator
from models.Attention.evaluation_utils import build, evaluate_window, evaluate_batch

from models.FishNChips import FishNChips
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, with_timer
set_gpu_growth()

ATTENTION_BLOCKS = 4
CNN_BLOCKS = 5
MAXPOOL_BLOCK_IDX = 3
D_MODEL = 256
DFF = 512
NUM_HEADS = 8
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATR = 0.1
STRIDE = 30

EPOCHS = 1
BATCH_SIZE = 20
AS_BASE_STRING = True

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)

x_batch,y_batch = next(generator.get_batch(label_as_bases=AS_BASE_STRING))

fish = FishNChips(
  num_cnn_blocks=CNN_BLOCKS, 
  max_pool_layer_idx=MAXPOOL_BLOCK_IDX, 
  num_layers=ATTENTION_BLOCKS, 
  d_model=D_MODEL, 
  output_dim=1 + 4 + 1 + 1, # PAD + ATCG + START + STOP
  num_heads=NUM_HEADS, 
  dff=DFF, 
  pe_encoder_max_length=ENCODER_MAX_LENGTH, 
  pe_decoder_max_length=DECODER_MAX_LENGTH, 
  rate=DROPOUT_RATR)

#MAIN
if __name__ == "__main__":

    build(fish)
    fish.load_weights("./src/fish_weights_256.h5")
    
    res, _ = evaluate_batch(x_batch, fish, BATCH_SIZE, as_bases=AS_BASE_STRING)

    for example in res:
        print(example)

    print("-")

    for x in x_batch[:2]:
        res, _ = evaluate_window(x, fish, as_bases=AS_BASE_STRING)
        print(res)



