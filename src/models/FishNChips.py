import tensorflow as tf

from models.Layers.ConvBlock import ConvolutionBlock
from models.Attention.Transformer import Transformer
from models.Attention.attention_utils import create_look_ahead_mask

class FishNChips(tf.keras.Model):
    def __init__(self, d_model, num_cnn_blocks, max_pool_layer_idx, training=False):
        super(FishNChips, self).__init__()
        self.training = training
        self.max_pool_layer_idx = max_pool_layer_idx
        self.max_pool = tf.keras.layers.MaxPooling1D(pool_size=2, name="max_pool_1D")
        
        self.cnn_blocks = [ConvolutionBlock([1,3,1], d_model, i) for i in range(num_cnn_blocks)]
        self.tranformer = Transformer(num_layers=2, d_model=d_model, output_dim=4, num_heads=8, dff=2048, pe_input=1000, pe_target=1000)
    
    def call(self, x, y_true):
        x = self.call_cnn_blocks(x)
        combined_mask = create_look_ahead_mask(y_true)
        x, attention_weights = self.tranformer(x, y_true, self.training, combined_mask)
        return x, attention_weights
        
    def call_cnn_blocks(self, x):
        for i,cnn_block in enumerate(self.cnn_blocks):
            x = cnn_block(x)
            
            if(i == self.max_pool_layer_idx):
                x = self.max_pool(x)
        return x
