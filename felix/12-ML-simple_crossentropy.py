#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import time
import pandas as pd
import h5py
import numpy as np
from multiprocessing import Pool
from functools import partial, reduce
from collections import deque



import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, MaxPooling1D, Flatten, Conv1D, CuDNNLSTM, Softmax
from tensorflow.nn import ctc_loss
from tensorflow.keras.callbacks import TensorBoard
import numpy as np

# labelBaseMap = {
#     0: "A",
#     1: "C",
#     2: "G",
#     3: "T"
# }

# filename = "/mnt/nvme/taiyaki_aligned/mapped_umi16to9.hdf5"
filename = "/Users/felix/MsC/DNA/mapped_umi16to9.hdf5"

RNN_LEN = 200
gpu_options = tf.GPUOptions(per_process_gpu_memory_fraction=0.5)
sess = tf.Session(config=tf.ConfigProto(gpu_options=gpu_options))


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


with h5py.File(filename, 'r') as h5file:
    readIDs = list(h5file['Reads'].keys())
    print(f"{len(readIDs)} reads, keys: {list(h5file['Reads'][readIDs[0]].keys())}")


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


get_ipython().run_cell_magic('time', '', 'pool = Pool(16)\nresults_prim = pool.map(partial(processRead, filename=filename), readIDs[:16])\npool.close()\npool.join()')


# In[ ]:


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


# In[ ]:


simple_train_y = np.array([y[-1] for y in train_y])
simple_test_y = np.array([y[-1] for y in test_y])


# # HERE COME DAT ML

# In[ ]:


model = Sequential()
model.add(Conv1D(32, 3,
          padding="valid",
          activation="relu", 
          input_shape=train_X[0].shape))
model.add(Conv1D(32, 10,
          padding="valid",
          activation="relu"))
model.add(Flatten())
model.add(Dense(32, activation="relu"))
model.add(Dense(4, activation="softmax"))
model.compile(optimizer="adam", loss="categorical_crossentropy", metrics=['accuracy'])

model.fit(x=train_X, y=simple_train_y, batch_size=10, epochs=2, validation_data=(test_X, simple_test_y))


# In[ ]:


p = model.predict(train_X[:10])
p.shape


# In[ ]:




