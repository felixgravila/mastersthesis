#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, MaxPooling1D, Flatten, Conv1D, LSTM, Softmax
from tensorflow.keras.backend import ctc_batch_cost, ctc_decode
import random

tf.__version__


# In[ ]:


model_lstm = Sequential()
model_lstm.add(LSTM(4, activation="softmax", return_sequences=True))
model_lstm.add(LSTM(4, activation="softmax", return_sequences=True))
model_lstm.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

pred = np.array([[[1,2,3],[2,1,2],[1,2,3]]], np.float)
print(model_lstm.predict(pred))

pred = np.array([[[1,2,3],[2,1,2]]], np.float)
print(model_lstm.predict(pred))

# pred = np.array([[[1],[2]]], np.float)
# print(model_lstm.predict(pred))

pred.shape


# In[ ]:


model_nn = Sequential()
model_nn.add(Dense(2, input_dim=1, activation='softmax'))
model_nn.compile(loss='categorical_crossentropy', optimizer='adam', metrics=['accuracy'])

values = [random.random() for _ in range(50000)]
truths = [[0.0,1.0] if v>0.5 else [1.0,0.0] for v in values]

model_nn.fit(values, np.array(truths), batch_size=10, epochs=4)

# model_nn.predict([0.0])


# In[ ]:




