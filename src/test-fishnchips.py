#%%

import sys
import math
import tensorflow as tf
import numpy as np

from models.FishNChips import FishNChips
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.attention_utils import create_combined_mask

num_layers = 4
d_model = 256
dff = 512
num_heads = 8

pe_encoder_max_length = 300
pe_decoder_max_length = 100
dropout_rate = 0.1

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


'''
expected: inp_sentence.shape = (300, 1)
'''
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
    inp = tf.random.uniform((300, 1))
    evald = evaluate(inp)


# %%
