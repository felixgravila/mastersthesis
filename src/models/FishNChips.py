import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Activation, Add, Lambda, Dense, MaxPooling1D, Conv1D, LSTM, BatchNormalization, Dropout
from tensorflow.keras.backend import ctc_batch_cost, ctc_decode
from functools import reduce

from utils.Other import labelBaseMap

class FishNChips():
    
    def __init__(self, input_length, maxpool_layer, model_name):
        self._input_length = input_length
        self._maxpool_layer = maxpool_layer
        self.name = model_name
        self._model, self._predictor = self._make()

    def fit(self, *args, **kwargs):
        self._model.fit(*args, **kwargs)
    
    def fit_generator(self, *args, **kwargs):
        self._model.fit_generator(*args, **kwargs)

    def load_weights(self, *args, **kwargs):
        self._model.load_weights(*args, **kwargs)

    def save_weights(self, *args, **kwargs):
        self._model.save_weights(*args, **kwargs)

    def summary(self):
        self._model.summary()

    def predict(self, input_data, batchsize = 300):
        results = []
        for i in range(0, len(input_data), batchsize):
            pred = self._predictor(input_data[i:i+batchsize])
            cur = [[np.argmax(ts) for ts in p] for p in pred]
            nodup = ["".join(list(map(lambda x: labelBaseMap[x], filter(lambda x: x!=4, reduce(lambda acc, x: acc if acc[-1] == x else acc + [x], c[5:], [4]))))) for c in cur]
            results.extend(nodup)
        logs = [1]*len(results) # for compatibility with predict_beam_search
        return results, logs
    
    def predict_raw(self, input_data):
        return self._predictor(input_data)
        
    def _make_res_block(self, upper, block):
        # Add residual connection
        # If first block then shape needs to be reformed
        if block==1:
            res = Conv1D(256, 1,
                padding="same",
                name=f"res{block}-r")(upper)
        else:
            res = upper

        inner = Conv1D(256, 1,
                      padding="same",
                      activation="relu",
                      use_bias="false",
                      name=f"res{block}-c1")(upper)
        inner = Conv1D(256, 3,
                      padding="same",
                      activation="relu",
                      use_bias="false",
                      name=f"res{block}-c2")(inner)
        inner = Conv1D(256, 1,
                      padding="same",
                      use_bias="false",
                      name=f"res{block}-c3")(inner)
        
        # Add the residual connection to the output of the 3 conv layers
        added = Add(name=f"res{block}-add")([res, inner])
        return Activation('relu', name=f"res{block}-relu")(added)


    def _make_attention(self, upper):
        posenc = tf.convert_to_tensor(self._positional_encoding(256, self._ctc_length))
        inner = Lambda(lambda x: tf.add(posenc, x))(upper)
        
        return inner

    '''
    Function that returns a tensor with the positional encodings
    using sin and cos
    params:
        depth: the number of dimensions of each data point
        num_pos: the length of the time series
    '''
    def _positional_encoding(self, depth, num_pos):
        min_rate = 1/10000

        assert depth%2 == 0, "Depth must be even."
        angle_rate_exponents = np.linspace(0,1,depth//2)
        angle_rates = min_rate**(angle_rate_exponents)

        positions = np.arange(num_pos) 
        angle_rads = (positions[:, np.newaxis])*angle_rates[np.newaxis, :]

        sines = np.sin(angle_rads) # shape (150, 128) (128 == depth/2)
        cosines = np.cos(angle_rads) # shape (150, 128)
        pos_encoding = np.concatenate([sines, cosines], axis=-1) # shape (150, 256)
        return np.array(pos_encoding, dtype="float32")


    def _make(self):
        
        def ctc_lambda_func(args):
            y_pred, labels, input_length, label_length = args
            return ctc_batch_cost(labels, y_pred, input_length, label_length)
        
        input_data = Input(name="the_input", shape=(self._input_length,1), dtype="float32")
        inner = input_data

        for res_idx in range(1,6):
            inner = self._make_res_block(inner, res_idx)
            if self._maxpool_layer == res_idx:
                inner = MaxPooling1D(pool_size=2, name="max_pool_1D")(inner)

        # TODO: Attention here
        inner = self._make_attention(inner)        

        inner = Dense(64, name="dense", activation="relu")(inner)
        inner = Dense(5, name="dense_output")(inner)
        
        y_pred = Activation("softmax", name="softmax")(inner)

        labels = Input(name='the_labels', shape=(self._ctc_length), dtype='float32')
        input_length = Input(name='input_length', shape=(1), dtype='int64')
        label_length = Input(name='label_length', shape=(1), dtype='int64')

        loss_out = Lambda(ctc_lambda_func, output_shape=(1,), name='ctc')([y_pred, labels, input_length, label_length])

        model = Model(inputs=[input_data, labels, input_length, label_length], outputs=loss_out, name=self.name)
        model.compile(loss={'ctc': lambda y_true, y_pred: y_pred}, optimizer='adam')

        predictor = tf.keras.backend.function(input_data, y_pred) # TODO: change to model
        return model, predictor
        
    @property
    def _ctc_length(self):
        if self._maxpool_layer == 0:
            return self._input_length
        return self._input_length//2