import tensorflow as tf
import numpy as np
from functools import reduce

from models.Layers.ConvBlock import ConvolutionBlock
from models.Attention.Encoder import Encoder
from models.Attention.Decoder import Decoder

from utils.Other import with_timer, labelBaseMap

class FishNChipsCTSea(tf.keras.Model):
    def __init__(self, num_cnn_blocks, max_pool_layer_idx, num_layers, d_model, output_dim, num_heads, dff, pe_encoder_max_length, pe_decoder_max_length, rate=0.1):
        super(FishNChipsCTSea, self).__init__()
        
        self.pe_encoder_max_length = pe_encoder_max_length
        self.pe_decoder_max_length = pe_decoder_max_length

        self.first_cnn = tf.keras.layers.Conv1D(d_model, 1, padding="same", activation="relu", name=f"dimensionality-cnn")

        if max_pool_layer_idx < num_cnn_blocks:
            self.max_pool_layer_idx = max_pool_layer_idx
            self.max_pool = tf.keras.layers.MaxPooling1D(pool_size=2, name="max_pool_1D")
        
        self.cnn_blocks = [ConvolutionBlock([1,3,1], d_model, i) for i in range(num_cnn_blocks)]
        
        self.encoder = Encoder(num_layers, d_model, num_heads, dff, pe_encoder_max_length, rate)
        self.decoder = Decoder(num_layers, d_model, num_heads, dff, pe_decoder_max_length, rate)        
        
        self.decoder_softmax = tf.keras.layers.Dense(output_dim, activation="softmax")
        self.ctc_softmax = tf.keras.layers.Dense(5, activation="softmax")


    #@with_timer
    def call(self, inp, tar, training, look_ahead_mask, use_cached_enc_output=False):
        x = self.first_cnn(inp)   
        x = self.call_cnn_blocks(x)
        
        enc_out = self.encoder(x, training)
        enc_out_ctc = self.ctc_softmax(enc_out)
        
        dec_output, _ = self.decoder(tar, enc_out, training, look_ahead_mask)
        dec_output = self.decoder_softmax(dec_output)
        
        return enc_out_ctc, dec_output 

    #@with_timer  
    def call_cnn_blocks(self, x):
        for i,cnn_block in enumerate(self.cnn_blocks):
            x = cnn_block(x)
            
            if(i == self.max_pool_layer_idx):
                x = self.max_pool(x)
        return x
        