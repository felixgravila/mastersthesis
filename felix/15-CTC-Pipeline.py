#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import datetime
import os
import pandas as pd
import h5py
import numpy as np
from multiprocessing import Pool
from multiprocessing.pool import ThreadPool
from functools import partial, reduce
from collections import deque
from IPython.core.debugger import set_trace
from tensorflow.keras.utils import Sequence

labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

possible_filenames = ["/mnt/sdb/taiyaki_mapped/mapped_umi16to9.hdf5",
                      "/mnt/nvme/taiyaki_aligned/mapped_umi16to9.hdf5",
                      "/Users/felix/MsC/DNA/mapped_umi16to9.hdf5"]

for filename in possible_filenames:
    if os.path.isfile(filename):
        the_filename = filename
        print(f"Using {filename}")
        break
else:
    the_filename = ""
    print("Error, no filename valid!")

RNN_LEN = 200


# In[ ]:


class PrepData(Sequence):
    
    def __init__(self, filename, train_validate_split=0.8, min_labels=5):
        self.filename = filename
        self.train_validate_split=train_validate_split
        self.min_labels=min_labels
        self.pos = 0
        self.test_gen_data = ([],[])
        self.max_label_len = 50
        with h5py.File(filename, 'r') as h5file:
            self.readIDs = list(h5file['Reads'].keys())
            
    def get_len(self):
        return len(self.readIDs)
    
    def get_max_label_len(self):
        return self.max_label_len
        
    def normalise(self, dac):
        dmin = min(dac)
        dmax = max(dac)
        return [(d-dmin)/(dmax-dmin) for d in dac]
    
    def processRead(self, readID):
        train_X = []
        train_y = []
        test_X  = []
        test_y  = []
        with h5py.File(self.filename, 'r') as h5file:
            DAC = list(self.normalise(h5file['Reads'][readID]['Dacs'][()]))
            RTS = deque(list(h5file['Reads'][readID]['Ref_to_signal'][()]))
            REF = deque(h5file['Reads'][readID]['Reference'][()])
            
        train_validate_split = round(len(REF)*(1-self.train_validate_split))
        curdacs  = deque( [[x] for x in DAC[RTS[0]:RTS[0]+RNN_LEN-5]], RNN_LEN )
        curdacts = RTS[0]+RNN_LEN-5
        labels  = deque([])
        labelts = deque([])

        while RTS[0] < curdacts:
            labels.append(REF.popleft())
            labelts.append(RTS.popleft())


        while curdacts+5 < RTS[-1]-RNN_LEN:
            curdacs.extend([[x] for x in DAC[curdacts:curdacts+5]])
            curdacts += 5
            
            while RTS[0] < curdacts:
                labels.append(REF.popleft())
                labelts.append(RTS.popleft())
                
            while len(labelts) > 0 and labelts[0] < curdacts - RNN_LEN:
                labels.popleft()
                labelts.popleft()

            if len(labels) > self.min_labels:
                if len(RTS) > train_validate_split:
                    train_X.append(list(curdacs))
                    train_y.append(list(labels))
                else:
                    test_X.append(list(curdacs))
                    test_y.append(list(labels))

        return train_X, train_y, test_X, test_y
    
    
    def train_gen(self):
        while self.pos < len(self.readIDs):
            print(f"Processing {self.pos}")
            train_X, train_y, test_X, test_y = self.processRead(self.readIDs[self.pos])
            self.pos += 1
            
            train_X = np.array(train_X)
            train_y = np.array(train_y)
            test_X  = np.array(test_X)
            test_y  = np.array(test_y)
            self.test_gen_data = (test_X, test_y)
            
            train_X_lens = np.array([[95] for x in train_X], dtype="float32")
            train_y_lens = np.array([[len(x)] for x in train_y], dtype="float32")
#             maxlen = max([len(r) for r in train_y])
            train_y_padded = np.array([r + [5]*(self.get_max_label_len()-len(r)) for r in train_y], dtype='float32')
            X = {'the_input': train_X,
                      'the_labels': train_y_padded,
                      'input_length': train_X_lens,
                      'label_length': train_y_lens
                      }
            y = {'ctc': np.zeros([len(train_X)])}
            yield (X, y)
        
    def test_gen(self):
        while True:
            tgd, self.test_gen_data = self.test_gen_data, ([],[])
            yield tgd
            
            
    def __len__(self):
        return len(self.readIDs)

    def __getitem__(self, idx):
        return next(self.train_gen())
    
prepData = PrepData(filename)


# # HERE COME DAT ML

# In[1]:


import tensorflow as tf
import tensorflow.keras.backend as kb
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.layers import Input, Activation, Add, Lambda
from tensorflow.keras.layers import Dense, MaxPooling1D, Conv1D, LSTM, GRU
from tensorflow.keras.backend import ctc_batch_cost
from tensorflow.keras.callbacks import Callback
import numpy as np
import matplotlib.pyplot as plt
from functools import reduce
import editdistance

gpus = tf.config.experimental.list_physical_devices('GPU')
if gpus:
  # Restrict TensorFlow to only allocate 1GB of memory on the first GPU
  try:
    tf.config.experimental.set_virtual_device_configuration(
        gpus[0],
        [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=5000)])
    logical_gpus = tf.config.experimental.list_logical_devices('GPU')
    print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
  except RuntimeError as e:
    # Virtual devices must be set before GPUs have been initialized
    print(e)


# In[2]:


def ctc_lambda_func(args):
    y_pred, labels, input_length, label_length = args
    y_pred = y_pred[:, 5:, :]
    return kb.ctc_batch_cost(labels, y_pred, input_length, label_length)

def decode_batch(modelfunc, input_data):
    pred = modelfunc(input_data)[0]
    cur = [[np.argmax(ts) for ts in p] for p in pred]
    nodup = ["".join(list(map(lambda x: labelBaseMap[x], filter(lambda x: x!=4, reduce(lambda acc, x: acc if acc[-1] == x else acc + [x], c[5:], [4]))))) for c in cur]
    return nodup


# In[ ]:


input_data = Input(name="the_input", shape=(200,1), dtype="float32")

inner = Conv1D(32, 3,
          padding="same",
          activation="relu",
          name="conv1d_1")(input_data)
inner = MaxPooling1D(pool_size=2, name="maxpool_1")(inner)
inner = Conv1D(32, 5,
          padding="same",
          activation="relu",
          name="conv1d_2")(inner)
inner = Conv1D(32, 3,
          padding="same",
          activation="relu",
          name="conv1d_3")(inner)

lstm_1a = GRU(32, return_sequences=True, name="lstm_1a")(inner)
lstm_1b = GRU(32, return_sequences=True, go_backwards=True, name="lstm_1b")(inner)
lstm_1_merged = Add()([lstm_1a, lstm_1b])

lstm_2a = GRU(32, return_sequences=True, name="lstm_2a")(lstm_1_merged)
lstm_2b = GRU(32, return_sequences=True, go_backwards=True, name="lstm_2b")(lstm_1_merged)
lstm_2_merged = Add()([lstm_2a, lstm_2b])

inner = Dense(5, name="dense_1")(lstm_2_merged)

y_pred = Activation("softmax", name="softmax")(inner)

# Model(inputs=input_data, outputs=y_pred).summary()
labels = Input(name='the_labels', shape=(prepData.get_max_label_len()), dtype='float32')
input_length = Input(name='input_length', shape=(1), dtype='int64')
label_length = Input(name='label_length', shape=(1), dtype='int64')

loss_out = Lambda(ctc_lambda_func, output_shape=(1,), name='ctc')([y_pred, labels, input_length, label_length])

model = Model(inputs=[input_data, labels, input_length, label_length], outputs=loss_out, name="my_model")
model.compile(loss={'ctc': lambda y_true, y_pred: y_pred}, optimizer='adam')

# model.summary()


# In[ ]:


# model.fit_generator(prepData.train_gen(), steps_per_epoch=1, epochs=10, max_queue_size=1)


# In[ ]:


class SaveCB(Callback):
    def __init__(self, output_dir, test_func, test_gen):
        self.output_dir=output_dir
        self.test_func = test_func
        self.test_gen = test_gen

    def on_epoch_end(self, epoch, logs={}):
        test_X, test_y = next(self.test_gen)
        predicted = decode_batch(self.test_func, test_X)
        mtest_y = ["".join(list(map(lambda x: labelBaseMap[x], ty))) for ty in test_y]
        tot_edit_dis = 0
        for (p,l) in zip(predicted, mtest_y):
            tot_edit_dis += editdistance.eval(p,l)

        avgeditdis = tot_edit_dis/len(mtest_y)
        print(f"Average edit distance is: {avgeditdis}\n")
        self.model.save_weights(os.path.join(self.output_dir, f'{datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")}_e{epoch}_dis{round(avgeditdis*100)}.h5'))

save_cb = SaveCB("models", tf.keras.backend.function([input_data], [y_pred]), prepData.test_gen())


# In[ ]:


for idx in range(prepData.get_len()):
    print(f"Epoch {idx}")
    a = next(prepData.train_gen())
    model.fit(a[0], a[1], initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])


# In[ ]:




