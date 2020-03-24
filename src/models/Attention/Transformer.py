import tensorflow as tf
from Encoder import Encoder
from Decoder import Decoder

class Transformer(tf.keras.Model):
  def __init__(self, num_layers, d_model, num_heads, dff, pe_input, pe_target, rate=0.1):
    super(Transformer, self).__init__()

    self.encoder = Encoder(num_layers, d_model, num_heads, dff, pe_input, rate)

    self.decoder = Decoder(num_layers, d_model, num_heads, dff, pe_target, rate)

    self.final_layer = tf.keras.layers.Dense(5) # 5 is because we want ATCG- into CTC
    
  def call(self, inp, tar, training, enc_padding_mask, look_ahead_mask, dec_padding_mask):

    enc_output = self.encoder(inp, training, enc_padding_mask)  # (batch_size, inp_seq_len, d_model)
    
    # dec_output.shape == (batch_size, tar_seq_len, d_model)
    dec_output, attention_weights = self.decoder(
        tar, enc_output, training, look_ahead_mask, dec_padding_mask)
    
    final_output = self.final_layer(dec_output)  # (batch_size, tar_seq_len, target_vocab_size)
    
    return final_output, attention_weights
