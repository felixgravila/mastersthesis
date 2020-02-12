#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sys
sys.path.insert(0,'../src/utils')

import datetime
import os
import numpy as np
from multiprocessing import Pool
from multiprocessing.pool import ThreadPool
from functools import partial, reduce
from IPython.core.debugger import set_trace
import matplotlib.pyplot as plt
from DataPrepper import PrepData
from ChironModel import Chiron
import tensorflow as tf
import editdistance

from Utils import labelBaseMap, set_gpu_limit, get_valid_taiyaki_filename

set_gpu_limit(4000)
filename = get_valid_taiyaki_filename()


# In[ ]:


prepData = PrepData(filename, RNN_LEN=300)

chiron = Chiron(max_label_length=prepData.get_max_label_len())
chiron.model.load_weights("models/bestrun/2020-01-09_20:04:16_e00538_dis478.h5")


# In[ ]:


traingen = prepData.train_gen()
testgen = prepData.test_gen()

a = next(traingen)
b = next(testgen)
ref = prepData.last_orig_ref

print(len(ref))

a_X = a[0]['the_input']
b_X = b[0]


# In[ ]:


batchsize = 200
results = []
for i in range(0, len(a_X), batchsize):
    results.extend(chiron.predict(a_X[i:i+batchsize]))
for i in range(0, len(b_X), batchsize):
    results.extend(chiron.predict(b_X[i:i+batchsize]))


# In[ ]:


print(results[:10])
print(len(results))


# In[ ]:


ref = "".join(map(lambda x: labelBaseMap[x], ref))


# In[ ]:


np.save("assemblydata", np.array([results, ref]))

