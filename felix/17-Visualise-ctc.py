#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sys
sys.path.insert(0,'../src/utils')

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
import matplotlib.pyplot as plt

from DataPrepper import PrepData
from ChironModel import Chiron
from Utils import labelBaseMap, get_valid_taiyaki_filename, set_gpu_limit

set_gpu_limit(5000)

filename = get_valid_taiyaki_filename()


# In[ ]:


prepData = PrepData(filename, RNN_LEN=300)
chiron = Chiron(prepData.get_max_label_len())


# In[ ]:


reads_to_test = 5
modeldir = "models/bestrun/"
results = []
traingen = prepData.train_gen()
testgen = prepData.test_gen()

a_X, a_y, b_X, b_y = [],[],[],[]
for _ in range(reads_to_test):
    a = next(traingen)
    b = next(testgen)
    a_X.extend(a[0]['the_input'])
    a_y.extend(a[0]['unpadded_labels'])
    b_X.extend(b[0])
    b_y.extend(b[1])
    
a_X, a_y, b_X, b_y = np.array(a_X), np.array(a_y), np.array(b_X), np.array(b_y),

for i, modelfile in enumerate(os.listdir(modeldir)):
    print(f"Evaluating {modelfile} ({i}/{len(os.listdir(modeldir))})")
    toteditdis = 0
    totsamples = 0
    treditdiss = []
    teeditdiss = []
    chiron.model.load_weights(os.path.join(modeldir, modelfile))
    try:
        a_X, a_y = a[0]['the_input'], a[0]['unpadded_labels']
        (ed, l, edss) = chiron.calculate_loss(a_X, a_y)
        toteditdis += ed
        totsamples += l
        treditdiss.extend(edss)
    except Exception as e:
        print(e)
    try:
        (ed, l, edss) = chiron.calculate_loss(b_X, b_y)
        toteditdis += ed
        totsamples += l
        teeditdiss.extend(edss)
    except Exception as e:
        print(e)

    result = {
        'model': modelfile,
        'toteditdis': toteditdis,
        'totsamples': totsamples,
        'avgeditdis': toteditdis/totsamples,
        'treditdiss': treditdiss,
        'teeditdiss': teeditdiss
    }
    results.append(result)
#     print(result)


# In[ ]:


print(results[2]['model'])
print(results[5]['model'])


# In[ ]:


plt.figure(figsize=(20,10))
p1 = results[2]['treditdiss'].copy()
p1.extend(results[2]['teeditdiss'])
plt.plot(p1, label="ed20.51")

p2 = results[5]['treditdiss'].copy()
p2.extend(results[5]['teeditdiss'])
plt.plot(p2, label="ed4.78")

plt.legend()


# In[ ]:


plt.plot([r['avgeditdis'] for r in results])


# In[ ]:




