#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import time
import os
import pandas as pd
import h5py
import numpy as np
from multiprocessing import Pool
from multiprocessing.pool import ThreadPool
from functools import partial, reduce
from collections import deque
from IPython.core.debugger import set_trace

# labelBaseMap = {
#     0: "A",
#     1: "C",
#     2: "G",
#     3: "T"
# }

possible_filenames = ["/mnt/nvme/taiyaki_aligned/mapped_umi16to9.hdf5",
                      "/Users/felix/MsC/DNA/mapped_umi16to9.hdf5"]

RNN_LEN = 200


# In[ ]:


def normalise(dac):
    dmin = min(dac)
    dmax = max(dac)
    return [(d-dmin)/(dmax-dmin) for d in dac]

def ohe(v):
    tr = [0,0,0,0]
    tr[v] = 1
    return tr

def change_shape(dac):
    return [[x] for x in dac]


# In[ ]:


for filename in possible_filenames:
    if not os.path.isfile(filename):
        pass
    with h5py.File(filename, 'r') as h5file:
        readIDs = list(h5file['Reads'].keys())
        print(f"{len(readIDs)} reads, keys: {list(h5file['Reads'][readIDs[0]].keys())}")
    break


# In[ ]:


def processRead(readID, filename, train_validate_split=0.8, min_labels=5, one_hot_encode=False):
    train_X = []
    train_y = []
    test_X  = []
    test_y  = []
    with h5py.File(filename, 'r') as h5file:
        DAC = list(normalise(h5file['Reads'][readID]['Dacs'][()]))
        RTS = deque(list(h5file['Reads'][readID]['Ref_to_signal'][()]))
        if ohe:
            REF = deque([ohe(x) for x in h5file['Reads'][readID]['Reference'][()]])
        else:
            REF = deque(h5file['Reads'][readID]['Reference'][()])
        
    # just get the number, (1-tvs) so that it can be compared to how many items are left    
    train_validate_split = round(len(REF)*(1-train_validate_split))
    
    # -5 so that the first WHILE iteration afterwards cancels it out
    curdacs  = deque( [[x] for x in DAC[RTS[0]:RTS[0]+RNN_LEN-5]], RNN_LEN ) # deque keeping `RNN_LEN` DACs
    curdacts = RTS[0]+RNN_LEN-5 # the current HEAD
    labels  = deque([]) # to hold the label for the sequence
    labelts = deque([]) # to hold the timestamps for the labels

    while RTS[0] < curdacts: # add the first RNN_LEN worth of labels to initialise
        labels.append(REF.popleft())
        labelts.append(RTS.popleft())    
    
    
    while curdacts+5 < RTS[-1]-RNN_LEN:
        curdacs.extend([[x] for x in DAC[curdacts:curdacts+5]])
        curdacts += 5
        
        # add labels if new ones appeared
        while RTS[0] < curdacts:
            labels.append(REF.popleft())
            labelts.append(RTS.popleft())    
        
        # pop from labels if we passed them
        # sometimes the strand gets stuck and the deques drop to 0
        while len(labelts) > 0 and labelts[0] < curdacts - RNN_LEN:
            labels.popleft()
            labelts.popleft()

        # only add if more than 5 labels
        if len(labels) > min_labels:
            # add to train if more than tvs remain
            if len(RTS) > train_validate_split:
                train_X.append(list(curdacs))
                train_y.append(list(labels))
            else:
                test_X.append(list(curdacs))
                test_y.append(list(labels))
                
    return train_X, train_y, test_X, test_y

# pp = partial(processRead, filename=filename, one_hot_encode=True)
# tr_X, tr_y, te_X, te_y = pp(readIDs[1])


# In[ ]:


pool = Pool(16)
results_prim = pool.map(partial(processRead, filename=filename, one_hot_encode=True), readIDs[:2])
pool.close()
pool.join()

print("Pool done")

train_X = []
train_y = []
test_X  = []
test_y  = []
for thread in results_prim:
    train_X.extend(thread[0])
    train_y.extend(thread[1])
    test_X.extend(thread[2])
    test_y.extend(thread[3])

train_X = np.array(train_X)
train_y = np.array(train_y)
test_X  = np.array(test_X)
test_y  = np.array(test_y)


print(train_X.shape)
print(train_y.shape)
print(test_X.shape)
print(test_y.shape)


# # HERE COME DAT ML

# In[ ]:


import tensorflow as tf
import tensorflow.keras.backend as kb
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, MaxPooling1D, Flatten, Conv1D, Softmax, Dropout, LSTM
from tensorflow.keras.backend import ctc_batch_cost
from tensorflow.keras.callbacks import TensorBoard
import numpy as np

device_hasgpu = tf.test.is_gpu_available(cuda_only=False, min_cuda_compute_capability=None)
if device_hasgpu:
    gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=0.5)
    sess = tf.Session(config=tf.ConfigProto(gpu_options=gpu_options))


# In[ ]:


def ctc_custom(prediction_batch, label_batch):
    input_length = kb.map_fn(lambda x: np.array([20]), prediction_batch)
    label_length = kb.map_fn(lambda x: np.array([x.shape[1]]), label_batch)
    return ctc_batch_cost(label_batch, prediction_batch, input_length, label_length)


# In[ ]:


model = Sequential()

model.add(Conv1D(32, 3,
          padding="valid",
          activation="relu", 
          input_shape=train_X[0].shape))
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.5))
model.add(Conv1D(32, 10,
          padding="valid",
          activation="relu"))
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.5))
model.add(Conv1D(32, 5,
          padding="valid",
          activation="relu"))
model.add(MaxPooling1D(pool_size=2))
model.add(Dropout(0.5))

model.add(LSTM(32,return_sequences=True))
# model.add(CuDNNLSTM(32))

# model.add(Dense(64, activation="relu"))
# model.add(Dense(64, activation="relu"))
model.add(Dense(5, activation="softmax"))

model.compile(optimizer="adam", loss=ctc_custom, metrics=['accuracy'])


# In[ ]:


# test

train_yy = np.array([y[-1] for y in train_y])
test_yy = np.array([y[-1] for y in test_y])

print(train_yy.shape)
print(test_yy.shape)


# In[ ]:


model.fit(x=train_X, y=train_yy, epochs=2, batch_size=10, validation_data=(test_X, test_yy))


# In[ ]:


x = tf.constant([[20] for x in range(20)])


# In[ ]:


x.get_shape().as_list()


# In[ ]:


y = tf.constant([[1,2,3,4],[5,6,7,8]])


# In[ ]:


y


# In[ ]:


kb.map_fn(lambda x: np.array([20]), y)


# In[ ]:


kb.map_fn(lambda x: np.array([x.shape[0]]), y)


# In[ ]:




