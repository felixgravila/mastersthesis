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
    3: "T",
    4: "-"
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

RNN_LEN = 300


# In[ ]:


class PrepData(Sequence):
    
    def __init__(self, filename, train_validate_split=0.8, min_labels=5):
        self.filename = filename
        self.train_validate_split=train_validate_split
        self.min_labels=min_labels
        self.pos = 0
        self.test_gen_data = ([],[])
        self.last_train_gen_data = ({},{})
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
    
    
    def train_gen(self, full=True):
        while self.pos < len(self.readIDs):
            print(f"Processing {self.pos}")
            train_X, train_y, test_X, test_y = self.processRead(self.readIDs[self.pos])
            self.pos += 1
            
            train_X = np.array(train_X) if full else np.array(train_X[:100])
            train_y = np.array(train_y) if full else np.array(train_y[:100])
            test_X  = np.array(test_X) if full else np.array(test_X[:100])
            test_y  = np.array(test_y) if full else np.array(test_y[:100])
            self.test_gen_data = (test_X, test_y)
            
            train_X_lens = np.array([[95] for x in train_X], dtype="float32")
            train_y_lens = np.array([[len(x)] for x in train_y], dtype="float32")
#             maxlen = max([len(r) for r in train_y])
            train_y_padded = np.array([r + [5]*(self.get_max_label_len()-len(r)) for r in train_y], dtype='float32')
            X = {'the_input': train_X,
                      'the_labels': train_y_padded,
                      'input_length': train_X_lens,
                      'label_length': train_y_lens,
                      'unpadded_labels' : train_y
                      }
            y = {'ctc': np.zeros([len(train_X)])}
            self.last_train_gen_data = (X, y)
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

# In[ ]:


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
  try:
    tf.config.experimental.set_virtual_device_configuration(
        gpus[0],
        [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=5000)])
    logical_gpus = tf.config.experimental.list_logical_devices('GPU')
    print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
  except RuntimeError as e:
    print(e)


# In[ ]:


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


def make_res_block(upper, block):
    res = Conv1D(256, 1,
                  padding="same",
                  name=f"res{block}-r")(upper)
    upper = Conv1D(256, 1,
                  padding="same",
                  activation="relu",
                  use_bias="false",
                  name=f"res{block}-c1")(upper)
    upper = Conv1D(256, 3,
                  padding="same",
                  activation="relu",
                  use_bias="false",
                  name=f"res{block}-c2")(upper)
    upper = Conv1D(256, 1,
                  padding="same",
                  use_bias="false",
                  name=f"res{block}-c3")(upper)
    added = Add(name=f"res{block}-add")([res, upper])
    return Activation('relu', name=f"res{block}-relu")(added)

def make_bdlstm(upper, block):
    lstm_1a = LSTM(200, return_sequences=True, name=f"blstm{block}-fwd")(upper)
    lstm_1b = LSTM(200, return_sequences=True, go_backwards=True, name=f"blstm{block}-rev")(upper)
    return Add(name=f"blstm{block}-add")([lstm_1a, lstm_1b])


input_data = Input(name="the_input", shape=(300,1), dtype="float32")

inner = make_res_block(input_data, 1)
inner = make_res_block(inner, 2)
inner = make_res_block(inner, 3)
inner = make_res_block(inner, 4)
inner = make_res_block(inner, 5)
inner = make_bdlstm(inner, 1)
inner = make_bdlstm(inner, 2)
inner = make_bdlstm(inner, 3)

inner = Dense(64, name="dense", activation="relu")(inner)
inner = Dense(5, name="dense_output")(inner)

y_pred = Activation("softmax", name="softmax")(inner)

labels = Input(name='the_labels', shape=(prepData.get_max_label_len()), dtype='float32')
input_length = Input(name='input_length', shape=(1), dtype='int64')
label_length = Input(name='label_length', shape=(1), dtype='int64')

loss_out = Lambda(ctc_lambda_func, output_shape=(1,), name='ctc')([y_pred, labels, input_length, label_length])

model = Model(inputs=[input_data, labels, input_length, label_length], outputs=loss_out, name="chiron")
model.compile(loss={'ctc': lambda y_true, y_pred: y_pred}, optimizer='adam')


# In[ ]:


class SaveCB(Callback):
    def __init__(self, model_output_dir, image_output_dir, test_func, prepper):
        self.model_output_dir=model_output_dir
        self.image_output_dir=image_output_dir
        self.test_func = test_func
        self.prepper = prepper
        self.best_dist = None
        self.Xforimg = None
        self.testvalid = [[],[]]
        
    def save_anim_pic(self, epoch):
        fig, ax = plt.subplots( nrows=1, ncols=1, figsize=(30,10))
        ax.set_ylim(top=1)
        ax.set_ylim(bottom=0)
        prediction = self.test_func(self.Xforimg)[0][0]
        transposed = list(map(list, zip(*prediction)))
        for i in range(len(transposed)):
            ax.plot(transposed[i], label=labelBaseMap[i])
        ax.plot(self.Xforimg[0], "k", label="raw")
        ax.legend()
        fig.savefig(os.path.join(self.image_output_dir, f'{epoch:05d}.png'))
        plt.close(fig)
        
    def calculate_loss(self, X, y, testbatchsize=1000):
        editdis = 0
        for b in range(0, len(X), testbatchsize):
            predicted = decode_batch(self.test_func, X[b:b+testbatchsize])
            mtest_y = ["".join(list(map(lambda x: labelBaseMap[x], ty))) for ty in y[b:b+testbatchsize]]
            for (p,l) in zip(predicted, mtest_y):
                editdis += editdistance.eval(p,l)
        return editdis/len(y)
    

    def on_epoch_end(self, epoch, logs={}):
        test_X, test_y = next(self.prepper.test_gen())
        train_X, train_y = self.prepper.last_train_gen_data[0]['the_input'], self.prepper.last_train_gen_data[0]['unpadded_labels']
#         if self.Xforimg is None:
#             self.Xforimg = test_X[0:1]
#         self.save_anim_pic(epoch)

        testloss = self.calculate_loss(train_X, train_y)
        print(f"\nAverage test edit distance is: {testloss}")
        valloss = self.calculate_loss(test_X, test_y)
        print(f"\nAverage validation edit distance is: {valloss}")
        self.testvalid[0].append(testloss)
        self.testvalid[1].append(valloss)
        np.save("testval", np.array(np.array(self.testvalid)))
        
        if self.best_dist is None or valloss < self.best_dist:
            self.best_dist = valloss
            self.model.save_weights(os.path.join(self.model_output_dir, f'{datetime.datetime.now().strftime("%Y-%m-%d_%H:%M:%S")}_e{epoch:05d}_dis{round(valloss*100)}.h5'))
        
save_cb = SaveCB("models", "images", tf.keras.backend.function([input_data], [y_pred]), prepData)


# In[ ]:


for idx in range(prepData.get_len()):
    print(f"Epoch {idx}/{prepData.get_len()}")
    try:
        a = next(prepData.train_gen())
        model.fit(a[0], a[1], initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])
    except Exception as e:
        print(f"Error {e}, continuing...")


# In[ ]:




