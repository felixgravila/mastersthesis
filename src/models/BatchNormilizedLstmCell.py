import tensorflow as tf

from models.CellFunctions import orthogonal, orthogonal_initializer, bn_lstm_identity_initializer, batch_norm

class BatchNormilizedLstmCell(RNNCell):
    @property
    def get_hidden_state_size(self):
        return (self.neurons, self.neurons)

    @property
    def get_output_size(self):
        return self.neurons

    def __init__(self, neurons, training):
        self.neurons = neurons
        self.training = training #can this be removed? 

    def __call__(self, input, state):
        cell, hidden = state #size?
        input_size = input.get_shape().as_list()[1]

        W_xh = tf.get_variable('W_xh',[input_size, 4 * self.neurons], initializer=orthogonal_initializer())
        W_hh = tf.get_variable('W_hh',[self.neurons, 4 * self.neurons], initializer=bn_lstm_identity_initializer(0.95))
        bias = tf.get_variable('bias', [4 * self.neurons])

        xh = tf.matmul(input, W_xh)
        hh = tf.matmul(hidden, W_hh)

        bn_xh = batch_norm(xh, 'xh', self.training)
        bn_hh = batch_norm(hh, 'hh', self.training)

        hidden_state = bn_xh + bn_hh + bias

        i, j, f, o = tf.split(1, 4, hidden_state)

        new_cell = cell * tf.sigmoid(f) + tf.sigmoid(i) * tf.tanh(j)
        bn_new_cell = batch_norm(new_cell, 'cell', self.training)

        new_hidden = tf.tanh(bn_new_cell) * tf.sigmoid(o)

        return new_hidden, (new_cell, new_hidden)
        