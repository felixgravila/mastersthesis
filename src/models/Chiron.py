import numpy as np
import tensorflow as tf
import tensorflow.keras.backend as kb
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Activation, Add, Lambda, Dense, MaxPooling1D, Conv1D, LSTM, BatchNormalization
from tensorflow.keras.backend import ctc_batch_cost
from functools import reduce
import editdistance
import datetime
import os
import matplotlib.pyplot as plt

from utils.Other import labelBaseMap

class Chiron():
    
    def __init__(self, input_length, rnn_padding, batch_normalization, maxpool_layer, model_name):
        self.input_length = input_length
        self.rnn_padding = rnn_padding
        self.batch_normalization = batch_normalization
        self.maxpool_layer = maxpool_layer
        self.model_name=model_name
        self.model, self.testfunc = self.make_model()

    def get_model(self):
        return self.model

    def get_model_name(self):
        return self.model_name

    def predict(self, input_data):
        pred = self.testfunc(input_data)
        cur = [[np.argmax(ts) for ts in p] for p in pred]
        nodup = ["".join(list(map(lambda x: labelBaseMap[x], filter(lambda x: x!=4, reduce(lambda acc, x: acc if acc[-1] == x else acc + [x], c[5:], [4]))))) for c in cur]
        return nodup

    def predict_raw(self, input_data):
        return self.testfunc(input_data)
        
    def make_res_block(self, upper, block):

        inner = upper
        if(self.batch_normalization):
            inner = BatchNormalization()(upper)

        if block==1:
            res = Conv1D(256, 1,
                padding="same",
                name=f"res{block}-r")(inner)
        else:
            res = inner

        inner = Conv1D(256, 1,
                      padding="same",
                      activation="relu",
                      use_bias="false",
                      name=f"res{block}-c1")(inner)
        inner = Conv1D(256, 3,
                      padding="same",
                      activation="relu",
                      use_bias="false",
                      name=f"res{block}-c2")(inner)
        inner = Conv1D(256, 1,
                      padding="same",
                      use_bias="false",
                      name=f"res{block}-c3")(inner)

        added = Add(name=f"res{block}-add")([res, inner])
        return Activation('relu', name=f"res{block}-relu")(added)

    def make_bdlstm(self, upper, block):
        
        inner = upper
        if(self.batch_normalization):
            inner = BatchNormalization()(upper)

        lstm_1a = LSTM(200, return_sequences=True, name=f"blstm{block}-fwd")(inner)
        lstm_1b = LSTM(200, return_sequences=True, go_backwards=True, name=f"blstm{block}-rev")(inner)
        return Add(name=f"blstm{block}-add")([lstm_1a, lstm_1b])

    def make_model(self):
        
        def ctc_lambda_func(args):
            y_pred, labels, input_length, label_length = args
            if self.rnn_padding > 0:
                y_pred = y_pred[:, self.rnn_padding:-self.rnn_padding, :]
            return ctc_batch_cost(labels, y_pred, input_length, label_length) 
        
        input_data = Input(name="the_input", shape=(self.input_length,1), dtype="float32")
        inner = input_data

        for res_idx in range(1,6):
            inner = self.make_res_block(input_data, res_idx)
            if self.maxpool_layer == res_idx:
                inner = MaxPooling1D(pool_size=2, name="max_pool_1D")(inner)


        inner = self.make_bdlstm(inner, 1)
        inner = self.make_bdlstm(inner, 2)
        inner = self.make_bdlstm(inner, 3)

        if(self.batch_normalization):
            inner = BatchNormalization()(inner)
        
        inner = Dense(64, name="dense", activation="relu")(inner)
        inner = Dense(5, name="dense_output")(inner)

        y_pred = Activation("softmax", name="softmax")(inner)

        labels = Input(name='the_labels', shape=(self.input_length), dtype='float32')
        input_length = Input(name='input_length', shape=(1), dtype='int64')
        label_length = Input(name='label_length', shape=(1), dtype='int64')

        loss_out = Lambda(ctc_lambda_func, output_shape=(1,), name='ctc')([y_pred, labels, input_length, label_length])

        model = Model(inputs=[input_data, labels, input_length, label_length], outputs=loss_out, name="chiron")
        model.compile(loss={'ctc': lambda y_true, y_pred: y_pred}, optimizer='adam')
        
        testfunc = tf.keras.backend.function(input_data, y_pred)
        return model, testfunc
        
    def calculate_loss(self, X, y, testbatchsize=1000):
        editdis = 0
        editdiss = []
        for b in range(0, len(X), testbatchsize):
            predicted = self.predict(X[b:b+testbatchsize])
            mtest_y = ["".join(list(map(lambda x: labelBaseMap[x], ty))) for ty in y[b:b+testbatchsize]]
            for (p,l) in zip(predicted, mtest_y):
                ed = editdistance.eval(p,l)
                editdis += ed
                editdiss.append(ed)
        return (editdis, len(X), editdiss)
    
    def fit(self, *args, **kwargs):
        self.model.fit(*args, **kwargs)
    
    def fit_generator(self, *args, **kwargs):
        self.model.fit_generator(*args, **kwargs)