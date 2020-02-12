#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sys
sys.path.insert(0,'../src/utils')

import numpy as np
import matplotlib.pyplot as plt
from datetime import datetime
import matplotlib.dates as mdates


# In[ ]:


a = np.load("testval.npy")
a0 = list(filter(lambda x: x < 40, a[0]))
a1 = list(filter(lambda x: x < 40, a[1]))


# In[ ]:


plt.figure(figsize=(10,5))
plt.plot(a0, label="test")
plt.plot(a1, label="validation")
plt.axes().set_ylabel("average edit distance (lower is better)")
plt.axes().set_xlabel("# of reads trained")
plt.legend()
plt.savefig("testvalidation.png")


# In[ ]:


max(a[1])


# In[ ]:


b = np.load("resultsformodels.npy", allow_pickle=True)


# In[ ]:


b = list(b)
b.sort(key=lambda x: x['model'])


# In[ ]:


dists = [r['avgeditdis'] for r in b]
model = [datetime.strptime(r['model'][:19], "%Y-%m-%d_%H:%M:%S") for r in b]
model = [m-model[0] for m in model]
model = [m.seconds for m in model]


# In[ ]:


plt.figure(figsize=(10,4))
# plt.gca().xaxis.set_major_formatter(mdates.DateFormatter('%H:%M'))
plt.plot(model, dists)
plt.xticks(range(0, max(model), 30*60), [f"{m//3600}:{(m//60)%60}" for m in range(0, max(model), 30*60)], rotation=30)
plt.axes().set_ylabel("average edit distance (lower is better)")
plt.axes().set_xlabel("time trained (H:M)")
plt.savefig("aedovertime.png")


# In[ ]:




