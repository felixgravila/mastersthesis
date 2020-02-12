#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sys
sys.path.insert(0,'../src/utils')

import datetime
import os
import numpy as np
import matplotlib.pyplot as plt

from DataPrepper import PrepData
from ChironModel import Chiron
from Utils import labelBaseMap, get_valid_taiyaki_filename

filename = get_valid_taiyaki_filename()


# In[ ]:


prepData = PrepData(filename, RNN_LEN=300)


# In[ ]:


next(prepData.train_gen())
a = np.array(prepData.raw)
print(a.shape)
print(a.mean())
mn = a.mean()
a = a - mn
print(a.mean())


# In[ ]:


from scipy import signal
f, t, Sxx = signal.spectrogram(a[500:1000], nperseg=10, noverlap=8)
print(Sxx.shape)


# In[ ]:


sxxmax = max(map(max, Sxx))
sxxmin = min(map(min, Sxx))
print(sxxmax, sxxmin)


# In[ ]:


import matplotlib
import matplotlib.colors as colors
cmap = matplotlib.cm.gray.reversed()
plt.figure(figsize=(20,4))
plt.pcolormesh(t, f, Sxx, cmap=cmap, norm=colors.LogNorm(vmin=sxxmin, vmax=sxxmax))
plt.ylabel('Frequency [Hz]')
plt.xlabel('Time [sec]')
plt.show()


# In[ ]:




