import tensorflow as tf
from models.Attention.Encoder import Encoder
from models.Attention.Decoder import Decoder

class Transformer(tf.keras.Model):
  def __init__(self, num_layers, d_model, output_dim, num_heads, dff, pe_encoder_max_length, pe_decoder_max_length, rate=0.1):
    super(Transformer, self).__init__()

    self.encoder = Encoder(num_layers, d_model, num_heads, dff, pe_encoder_max_length, rate)

    self.decoder = Decoder(num_layers, d_model, num_heads, dff, pe_decoder_max_length, rate)

    self.final_layer = tf.keras.layers.Dense(output_dim)
    
  def call(self, inp, tar, training, look_ahead_mask):

    enc_output = self.encoder(inp, training)  # (batch_size, inp_seq_len, d_model)
    
    # dec_output.shape == (batch_size, tar_seq_len, d_model)
    dec_output, attention_weights = self.decoder(tar, enc_output, training, look_ahead_mask)
    
    final_output = self.final_layer(dec_output)  # (batch_size, tar_seq_len, target_vocab_size)
    
    return final_output, attention_weights
