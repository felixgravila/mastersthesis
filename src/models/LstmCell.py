import tensorflow as tf
import numpy as np

#from tensorflow.python.ops.rnn_cell import RNNCell

#from tf.keras.layers.LSTMCell import LSTMCell

from models.CellFunctions import orthogonal, orthogonal_initializer, bn_lstm_identity_initializer

# class LstmCell(RNNCell):

#     @property
#     def state_size(self):
#         return (self.neurons, self.neurons)

#     @property
#     def output_size(self):
#         return self.neurons

#     def __init__(self, neurons):
#         self.neurons = neurons
#         #self.training = training #can this be removed? 

#     def __call__(self, input, hidden_state):
#         cell, hidden = hidden_state
#         input_size = input.get_shape().as_list()[1] #debug this 

#         W_xh = tf.get_variable('W_xh', [input_size, 4 * self.neurons], initializer=orthogonal_initializer())
#         W_hh = tf.get_variable('W_hh', [self.neurons, 4 * self.neurons], initializer=bn_lstm_identity_initializer(0.95))
#         bias = tf.get_variable('bias', [4 * self.neurons])
    
#         # hidden = tf.matmul(x, W_xh) + tf.matmul(h, W_hh) + bias
#         concat = tf.concat(1, [input, hidden])
#         W_both = tf.concat(0, [W_xh, W_hh])
#         hidden = tf.matmul(concat, W_both) + bias

#         i, j, f, o = tf.split(1, 4, hidden)

#         new_cell = cell * tf.sigmoid(f) + tf.sigmoid(i) * tf.tanh(j)
#         new_hidden = tf.tanh(new_cell) * tf.sigmoid(o)

#         return new_hidden, (new_cell, new_hidden)

class CustomLstmCell(tf.keras.layers.Layer):
    def __init__(self, units):
        self.units = units
        #super(CustomLstmCell, self).__init__(**kwargs)

    @property
    def state_size(self):
        return self.units

    def call(self, input, state):
        cell, hidden = state
        input_size = input.get_shape().as_list()[1] #debug this 

        W_xh = tf.get_variable('W_xh', [input_size, 4 * self.neurons], initializer=orthogonal_initializer())
        W_hh = tf.get_variable('W_hh', [self.neurons, 4 * self.neurons], initializer=bn_lstm_identity_initializer(0.95))
        bias = tf.get_variable('bias', [4 * self.neurons])
    
        # hidden = tf.matmul(x, W_xh) + tf.matmul(h, W_hh) + bias
        concat = tf.concat(1, [input, hidden])
        W_both = tf.concat(0, [W_xh, W_hh])
        hidden = tf.matmul(concat, W_both) + bias

        i, j, f, o = tf.split(1, 4, hidden)

        new_cell = cell * tf.sigmoid(f) + tf.sigmoid(i) * tf.tanh(j)
        new_hidden = tf.tanh(new_cell) * tf.sigmoid(o)

        return new_hidden, (new_cell, new_hidden)