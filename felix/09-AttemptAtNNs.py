#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
import h5py
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, MaxPooling1D, Flatten, Conv1D, LSTM, Embedding, SpatialDropout1D, Dropout, SimpleRNN
import random


# In[ ]:


# from taiyaki encoding
labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

def get_reads_dict(filename):
    file = h5py.File(filename, "r")
    file = file['Reads']
    reads = []
    for r in file.keys():
        elem = {}
        elem['UUID'] = r
        firstMap = file[r]['Ref_to_signal'][0] # get the first taiyaki map point
        lastMap = file[r]['Ref_to_signal'][-1] # get the last taiyaki map point
        elem['Dacs'] = normalise_list(file[r]['Dacs'][firstMap:lastMap]) # Cut the signal to the last and first point
        elem['Ref_to_signal'] = file[r]['Ref_to_signal']-firstMap # now the first map point is 0
        elem['Reference'] = file[r]['Reference']
        reads.append(elem)
    return reads

def make_dna_list(read):
    dnalist = []
    pos = 0
    signalrefs = list(read['Ref_to_signal'])
    dnaref = list(read['Reference'])
    for idx in range(len(signalrefs)):
        if idx == 0:
            dnalist.extend([-1]*signalrefs[idx])
        else:
            for i in range(signalrefs[idx]-signalrefs[idx-1]):
                dnalist.append(dnaref[idx-1])
    return dnalist

def normalise_list(lst):
    mmin = min(lst)
    mmax = max(lst)
    lst = (lst - mmin)/(mmax - mmin)
    return lst

def intbase_to_vec(base):
    vec = [0]*4
    vec[base]=1
    return vec


# In[ ]:


reads = get_reads_dict("../taiyakiOutputs/output_createfasta.hdf5")


# In[ ]:


reads_per = 50


# In[ ]:


train_X = []
train_y = []
test_X = []
test_y = []

for r in reads[:2]:
    dnalist = list(map(intbase_to_vec, make_dna_list(r)))
    # dnalist = make_dna_list(r)
    sig = r['Dacs']
    
    for i in range(reads_per, len(dnalist)-reads_per):
        if random.random() > 0.7:
            train_X.append(sig[i-reads_per:i+reads_per])
            train_y.append(dnalist[i])
        else:
            test_X.append(sig[i-reads_per:i+reads_per])
            test_y.append(dnalist[i])

train_X2 = np.expand_dims(train_X, axis=2)
test_X2 = np.expand_dims(test_X, axis=2)

print(len(train_X))
print(len(test_X))


# In[ ]:


# NN
model_nn = Sequential()
model_nn.add(Dense(12, input_dim=reads_per*2, activation='relu'))
model_nn.add(Dense(8, activation='relu'))
model_nn.add(Dense(4, activation='softmax'))
model_nn.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model_nn.fit([train_X], [train_y], epochs=5, batch_size=10)


# In[ ]:


model_nn.evaluate([test_X], [test_y])


# In[ ]:


# CNN
model_cnn = Sequential()
model_cnn.add(Conv1D (kernel_size = (20), filters = 20, input_shape=(reads_per*2,1), activation='relu'))
model_cnn.add(MaxPooling1D(pool_size = (20), strides=(10)))
model_cnn.add(Flatten())
model_cnn.add(Dense(12, activation='relu'))
model_cnn.add(Dense(8, activation='relu'))
model_cnn.add(Dense(4, activation='softmax'))
model_cnn.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

model_cnn.fit([train_X2], [train_y], epochs=5, batch_size=10)


# In[ ]:


model_rnn = Sequential()
model_rnn.add(SimpleRNN(40, input_shape=(reads_per*2, 1), dropout = 0.1))
model_rnn.add(Dense(20, activation='relu'))
model_rnn.add(Dense(8, activation='relu'))
model_rnn.add(Dense(4, activation='softmax'))
model_rnn.compile(loss='categorical_crossentropy', optimizer='adam',metrics=['accuracy'])

model_rnn.fit(train_X2, [train_y], epochs=2, batch_size=100)


# In[ ]:


doublelayer = False
# LSTM
model_lstm = Sequential()
model_lstm.add(LSTM(40, input_shape=(reads_per*2, 1), dropout = 0.1, return_sequences=doublelayer))
if doublelayer:
    model_lstm.add(LSTM(40, input_shape=(reads_per*2, 1), dropout = 0.1))
model_lstm.add(Dense(20, activation='relu'))
model_lstm.add(Dense(8, activation='relu'))
model_lstm.add(Dense(4, activation='softmax'))
model_lstm.compile(loss='categorical_crossentropy', optimizer='adam',metrics=['accuracy'])

model_lstm.fit(train_X2, [train_y], epochs=2, batch_size=100)


# In[ ]:





# In[ ]:




