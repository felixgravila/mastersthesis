#%%

import sys
sys.path.insert(0,'./src')

import math
import tensorflow as tf
import numpy as np
import editdistance
import time
from datetime import datetime 

from models.FishNChips import FishNChips
from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.attention_utils import create_combined_mask

from utils.Other import set_gpu_growth

set_gpu_growth()

num_layers = 4
d_model = 256
dff = 512
num_heads = 8

ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATR = 0.1
STRIDE = 30

EPOCHS = 1
BATCH_SIZE = 3

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_test_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)

x_batch,y_batch = next(generator.get_batch(label_as_string=True))


fish = FishNChips(
  num_cnn_blocks=5, 
  max_pool_layer_idx=3, 
  num_layers=num_layers, 
  d_model=d_model, 
  output_dim=1 + 4 + 1 + 1, # PAD + ATCG + START + STOP
  num_heads=num_heads, 
  dff=dff, 
  pe_encoder_max_length=ENCODER_MAX_LENGTH, 
  pe_decoder_max_length=DECODER_MAX_LENGTH, 
  rate=DROPOUT_RATR)

def my_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        res = func(*args, **kwargs)
        print(f"Took {time.time()-start_time}")
        return res
    return wrapper

'''
expected: inp_sentence.shape = (300, 1)
'''
@my_decorator
def evaluate(inp):
    start_token = 5
    end_token = 6

    inp = tf.expand_dims(inp, 0) #reshape to (1, 300, 1)

    # the first word to the transformer should be the start token.
    decoder_input = [start_token]
    output = tf.expand_dims(decoder_input, 0)
    
    attention_weights = None
    for i in range(DECODER_MAX_LENGTH):
        before = datetime.now()            
        combined_mask = create_combined_mask(output)

        # predictions.shape == (batch_size, seq_len, vocab_size)
        predictions, attention_weights = fish(inp, output, False, combined_mask)
    
        # select the last word from the seq_len dimension
        predictions = predictions[: ,-1:, :]  # (batch_size, 1, vocab_size)

        predicted_id = tf.cast(tf.argmax(predictions, axis=-1), tf.int32)
        
        # return the result if the predicted_id is equal to the end token
        if predicted_id == end_token:
            return tf.squeeze(output, axis=0), attention_weights
        
        # concatentate the predicted_id to the output which is given to the decoder
        # as its input.
        output = tf.concat([output, predicted_id], axis=-1)
        print(f"Iteration {i} took {datetime.now()-before} sec")

    return tf.squeeze(output, axis=0), attention_weights


if __name__ == "__main__":
    evaluate(tf.random.uniform((300, 1)))
    fish.load_weights("./src/fish_weights_256.h5")
    
    for x in x_batch:
        evaluate(x)

    # results = [evaluate(X)[0].numpy() for X in X_batch]
    # results = ["".join([attentionLabelBaseMap[y] for y in r]) for r in results]

    # for t,p in zip(y_true_batch, results): 
    #     print(editdistance.eval(t,p)) 


# %%
