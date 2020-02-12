#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import tensorflow as tf
import tensorflow.keras.backend as kb
from tensorflow.keras.models import Sequential, Model
from tensorflow.keras.layers import Input, Activation, Add, Lambda
from tensorflow.keras.layers import Dense, MaxPooling1D, Conv1D, LSTM
from tensorflow.keras.backend import ctc_batch_cost
from tensorflow.keras.callbacks import Callback
import numpy as np
import matplotlib.pyplot as plt
from functools import reduce
import editdistance

labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

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


# In[ ]:


train_X = np.load("train_X.npy")
train_y = np.load("train_y.npy", allow_pickle=True)
test_X  = np.load("test_X.npy")
test_y  = np.load("test_y.npy", allow_pickle=True)

train_X_lens = np.array([[95] for x in train_X], dtype="float32")
train_y_lens = np.array([[len(x)] for x in train_y], dtype="float32")

maxlen = max([len(r) for r in train_y])
train_y_padded = np.array([r + [5]*(maxlen-len(r)) for r in train_y], dtype='float32')


# In[ ]:


inputs = {'the_input': train_X,
          'the_labels': train_y_padded,
          'input_length': train_X_lens,
          'label_length': train_y_lens
          }
outputs = {'ctc': np.zeros([len(train_X)])}
training_data = (inputs, outputs)


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

lstm_1a = LSTM(32, return_sequences=True, name="lstm_1a")(inner)
lstm_1b = LSTM(32, return_sequences=True, go_backwards=True, name="lstm_1b")(inner)
lstm_1_merged = Add()([lstm_1a, lstm_1b])

lstm_2a = LSTM(32, return_sequences=True, name="lstm_2a")(lstm_1_merged)
lstm_2b = LSTM(32, return_sequences=True, go_backwards=True, name="lstm_2b")(lstm_1_merged)
lstm_2_merged = Add()([lstm_2a, lstm_2b])

inner = Dense(5, name="dense_1")(lstm_2_merged)

y_pred = Activation("softmax", name="softmax")(inner)

# Model(inputs=input_data, outputs=y_pred).summary()

labels = Input(name='the_labels', shape=(maxlen), dtype='float32')
input_length = Input(name='input_length', shape=(1), dtype='int64')
label_length = Input(name='label_length', shape=(1), dtype='int64')

loss_out = Lambda(ctc_lambda_func, output_shape=(1,), name='ctc')([y_pred, labels, input_length, label_length])

model = Model(inputs=[input_data, labels, input_length, label_length], outputs=loss_out, name="my_model")
model.compile(loss={'ctc': lambda y_true, y_pred: y_pred}, optimizer='adam')

# model.summary()


# In[ ]:


class ValCB(Callback):
    def __init__(self, testfunc, test_X, test_y):
        self.testfunc = testfunc
        self.test_X = test_X
        self.test_y = test_y
        
    def on_train_batch_end(self, batch, logs=None):
        print('Training: batch {}'.format(batch), end="\r")
        
    def on_epoch_end(self, epoch, logs={}):
        print("")
#         self.model.save_weights(os.path.join(self.output_dir, 'weights%02d.h5' % (epoch)))
        predicted = decode_batch(self.testfunc, self.test_X)
        mtest_y = ["".join(list(map(lambda x: labelBaseMap[x], ty))) for ty in self.test_y]
        tot_edit_dis = 0
        for (p,l) in zip(predicted, mtest_y):
            tot_edit_dis += editdistance.eval(p,l)
            
        print(f"Average edit distance is: {tot_edit_dis/len(mtest_y)}\n")

testfunc = tf.keras.backend.function([input_data], [y_pred])
validation_cb = ValCB(testfunc, test_X[:100], test_y[:100])


# In[ ]:


plt.plot([1,2,3])
plt.show()
model.fit(x=inputs, y=outputs, epochs=5, callbacks=[validation_cb])


# In[ ]:




