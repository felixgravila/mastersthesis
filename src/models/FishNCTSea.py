import tensorflow as tf
import numpy as np
from functools import reduce

from models.Layers.ConvBlock import ConvolutionBlock
from models.Attention.Encoder import Encoder
from utils.Other import with_timer, labelBaseMap

class FishNCTSea(tf.keras.Model):
    def __init__(self, num_cnn_blocks, max_pool_layer_idx, num_layers, d_model, output_dim, num_heads, dff, pe_encoder_max_length, rate=0.1):
        super(FishNCTSea, self).__init__()
        self.pe_encoder_max_length = pe_encoder_max_length

        # cnn layer for dimensionality expansion
        self.first_encoder_cnn = tf.keras.layers.Conv1D(d_model, 1, padding="same", activation="relu", name=f"dimensionality-encoder-cnn")
        
        if max_pool_layer_idx < num_cnn_blocks:
            self.max_pool_layer_idx = max_pool_layer_idx
            self.max_pool = tf.keras.layers.MaxPooling1D(pool_size=2, name="max_pool_1D")
        
        self.cnn_blocks = [ConvolutionBlock([1,3,1], d_model, i) for i in range(num_cnn_blocks)]
        self.encoder = Encoder(num_layers, d_model, num_heads, dff, pe_encoder_max_length, rate)
        self.final_layer = tf.keras.layers.Dense(output_dim, activation="softmax")

    #@with_timer
    def call(self, x, training):
        x = self.first_encoder_cnn(x) # to bring to proper dimensionality      
        x = self.call_cnn_blocks(x) # won't do anything if no cnn blocks
        
        x = self.encoder(x, training)
        return self.final_layer(x)

    #@with_timer  
    def call_cnn_blocks(self, x):
        for i,cnn_block in enumerate(self.cnn_blocks):
            x = cnn_block(x)
            
            if(i == self.max_pool_layer_idx):
                x = self.max_pool(x)
        return x
        

    def predict(self, X, batchsize=100):
        results = []
        for i in range(0, len(X), batchsize):
            pred = self(X[i:i+batchsize], False)
            cur = [[np.argmax(ts) for ts in p] for p in pred]
            nodup = ["".join(list(map(lambda x: labelBaseMap[x], filter(lambda x: x!=4, reduce(lambda acc, x: acc if acc[-1] == x else acc + [x], c[5:], [4]))))) for c in cur]
            results.extend(nodup)
        return results