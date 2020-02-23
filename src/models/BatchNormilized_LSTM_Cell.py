import numpy as np 
from tensorflow import keras 
from tensorflow.keras import backend as K
from tensorflow.keras import activations, initializers, regularizers, constraints
from tensorflow.keras.layers import BatchNormalization, Layer

class BatchNormilized_LSTM_Cell(Layer):
    def __init__(self, units,
                activation='tanh',
                recurrent_activation='sigmoid',
                kernel_initializer='glorot_uniform',
                kernel_regularizer=None,
                kernel_constraint=None,
                recurrent_initializer='orthogonal',
                recurrent_regularizer=None,
                recurrent_constraint=None,
                **kwargs):
        super().__init__(**kwargs)
        self.units = units
        self.state_size = (units,units)

        self.activation = activations.get(activation)
        self.recurrent_activation = activations.get(recurrent_activation)

        self.kernel_initializer = initializers.get(kernel_initializer)
        self.kernel_regularizer = regularizers.get(kernel_regularizer)
        self.kernel_constraint = constraints.get(kernel_constraint)

        self.recurrent_initializer = initializers.get(recurrent_initializer)
        self.recurrent_regularizer = regularizers.get(recurrent_regularizer)
        self.recurrent_constraint = constraints.get(recurrent_constraint)

    def build(self, input_shape):
        input_dim = input_shape[-1]
        self.kernel = self.add_weight(shape=(input_dim, self.units * 4),
                                      name='kernel',
                                      initializer=self.kernel_initializer,
                                      regularizer=self.kernel_regularizer,
                                      constraint=self.kernel_constraint)

        self.recurrent_kernel = self.add_weight(
                shape=(self.units, self.units * 4),
                name='recurrent_kernel',
                initializer=self.recurrent_initializer,
                regularizer=self.recurrent_regularizer,
                constraint=self.recurrent_constraint)

        self.kernel_i = self.kernel[:, :self.units]
        self.kernel_f = self.kernel[:, self.units: self.units * 2]
        self.kernel_c = self.kernel[:, self.units * 2: self.units * 3]
        self.kernel_o = self.kernel[:, self.units * 3:]

        self.recurrent_kernel_i = self.recurrent_kernel[:, :self.units]
        self.recurrent_kernel_f = (self.recurrent_kernel[:, self.units: self.units * 2])
        self.recurrent_kernel_c = (self.recurrent_kernel[:, self.units * 2: self.units * 3])
        self.recurrent_kernel_o = self.recurrent_kernel[:, self.units * 3:]

    def call(self, inputs, states):
        h_tm1 = states[0]  # previous memory state
        c_tm1 = states[1]  # previous carry state

        x_i = BatchNormalization()(K.dot(inputs, self.kernel_i)) #BN(W_i . x_t)
        x_f = BatchNormalization()(K.dot(inputs, self.kernel_f)) #BN(W_f . x_t)
        x_c = BatchNormalization()(K.dot(inputs, self.kernel_c)) #BN(W_c . x_t)
        x_o = BatchNormalization()(K.dot(inputs, self.kernel_o)) #BN(W_o . x_t)

        h_i = BatchNormalization()(K.dot(h_tm1, self.recurrent_kernel_i)) #BN(U_i . h_tm1)
        h_f = BatchNormalization()(K.dot(h_tm1, self.recurrent_kernel_f)) #BN(U_f . h_tm1)
        h_c = BatchNormalization()(K.dot(h_tm1, self.recurrent_kernel_c)) #BN(U_c . h_tm1)
        h_o = BatchNormalization()(K.dot(h_tm1, self.recurrent_kernel_o)) #BN(U_o . h_tm1)
        
        i = self.recurrent_activation(x_i + h_i) #sigmoid(x_i + h_i)
        f = self.recurrent_activation(x_f + h_f) #sigmoid(x_f + h_f)
        c_candidate = self.activation(x_c + h_c) #tanh(x_c + h_c)
        c = f * c_tm1 + i * c_candidate          
        o = self.recurrent_activation(x_o + h_o) #sigmoid(x_o + h_o)
        h = o * self.activation(BatchNormalization()(c)) #o * tanh(BN(c))

        return h, [h, c]

        

