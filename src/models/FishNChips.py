import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Model
from tensorflow.keras.layers import Input, Activation, Add, Lambda, Dense, MaxPooling1D, Conv1D, LSTM, BatchNormalization, Dropout
from tensorflow.keras.backend import ctc_batch_cost, ctc_decode
from functools import reduce

from utils.Other import labelBaseMap
from models.Attention.Transformer import Transformer
from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_masks

class FishNChips():
    
    def __init__(self, input_length, maxpool_layer, model_name):
        self._input_length = input_length
        self._maxpool_layer = maxpool_layer
        self.name = model_name
        self.transformer = Transformer(num_layers=2, d_model=256, output_dim=4, num_heads=8, dff=2048, pe_input=1000, pe_target=1000)
        self._model = self._make()

    def fit(self, *args, **kwargs):
        self._model.fit(*args, **kwargs)
    
    def fit_generator(self, *args, **kwargs):
        self._model.fit_generator(*args, **kwargs)

    def load_weights(self, *args, **kwargs):
        self._model.load_weights(*args, **kwargs)

    def save_weights(self, *args, **kwargs):
        self._model.save_weights(*args, **kwargs)

    def predict(self, *args, **kwargs):
        self._model.predict(*args, **kwargs)

    def summary(self):
        self._model.summary()

        
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


    def _make(self):

        loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 
        
        def loss_function(real, pred):
            mask = tf.math.logical_not(tf.math.equal(real, 0))
            loss_ = loss_object(real, pred)

            mask = tf.cast(mask, dtype=loss_.dtype)
            loss_ *= mask
            
            return tf.reduce_mean(loss_)

               
        input_data = Input(name="input_data", shape=(self._input_length,1), dtype="float32")
        target_data = Input(name="target_data", shape=(50, 1), dtype="int32")
        inner = input_data

        for res_idx in range(1,6):
            inner = self._make_res_block(inner, res_idx)
            if self._maxpool_layer == res_idx:
                inner = MaxPooling1D(pool_size=2, name="max_pool_1D")(inner)

        '''
        dff = number of neurons in the dense layer at the end of encoder/decoder layers
        pe_input - positionally encoded input (max signal window length): d_model x pe_input - just has to be larger than the max length
        pe_target - positionally encoded target (max label length): d_model x pe_target - just has to be larger than the max length
        '''

        enc_padding_mask, combined_mask, dec_padding_mask = create_masks(inner, target_data)
        predictions, _ = self.transformer(inner, target_data, True, enc_padding_mask, combined_mask, dec_padding_mask)
        
        # y_pred = Activation("output-softmax", name="softmax")(inner)

        model = Model(inputs=[input_data, target_data], outputs=predictions, name=self.name)

        learning_rate = CustomSchedule(256)
        optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)
        
        model.compile(loss=loss_function, optimizer=optimizer)

        return model
        
    @property
    def _ctc_length(self):
        if self._maxpool_layer == 0:
            return self._input_length
        return self._input_length//2

if __name__=="__main__":
    fish = FishNChips(300, 3, "test")