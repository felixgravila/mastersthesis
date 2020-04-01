#%%

import sys
import math
import tensorflow as tf
import numpy as np
import editdistance
import time

from models.FishNChips import FishNChips
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.attention_utils import create_combined_mask

from utils.Other import attentionLabelBaseMap, set_gpu_growth

set_gpu_growth()

num_layers = 4
d_model = 256
dff = 2*d_model
num_heads = 8

pe_encoder_max_length = 300
pe_decoder_max_length = 100
dropout_rate = 0.1

EPOCHS = 1
BATCH_SIZE = 20

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_test_read_ids()
generator = DataGenerator(read_ids, batch_size=BATCH_SIZE, input_length=pe_encoder_max_length, stride=30, reads_count=5, use_maxpool=True)

val = next(generator.get_batch())

X_batch = val[0]['the_input']
y_true_batch = []
for y in val[0]['unpadded_labels']:
    y = [t+1 for t in y] # since 0 is a base
    y.insert(0, 5) # add 5 as start token
    stringed = "".join([attentionLabelBaseMap[i] for i in y])
    y_true_batch.append(stringed)


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
    
    for i in range(pe_decoder_max_length):
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

    return tf.squeeze(output, axis=0), attention_weights




if __name__ == "__main__":
    evaluate(tf.random.uniform((300, 1)))
    fish.load_weights(f"fish_weights_{d_model}.h5")
    results = [evaluate(X)[0].numpy() for X in X_batch]
    results = ["".join([attentionLabelBaseMap[y] for y in r]) for r in results]

    for t,p in zip(y_true_batch, results): 
        print(editdistance.eval(t,p)) 


# %%
