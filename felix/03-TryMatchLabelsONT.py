#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
from matplotlib import pyplot as plt
import F5Utils
from scipy.spatial.distance import euclidean
from fastdtw import fastdtw


# In[ ]:


mapping = pd.read_csv('../useful_files/ONT-template.model.csv')

#normalising
mmin = min(mapping['level_mean'])
mmax = max(mapping['level_mean'])
mapping['level_mean'] = mapping['level_mean'].map(lambda x: (x-mmin)/(mmax-mmin))

mapping.head()


# In[ ]:


file = "../somedata/multifast5/umi10000bins/batch0.fast5"
n = next(F5Utils.getReads(file))
read = [str(n[0]),n[1]] # unwrap tuple


# In[ ]:


# Get DNA data
DNA = read[0].split("\\n")[1]

ratio = len(read[1])/len(DNA)
print(f"Ratio is {ratio}")

# Convert 5-mers to values
vals= []
for i in range(len(DNA)-5):
    vals.append(mapping.loc[mapping['kmer'] == DNA[i:(i+5)]].level_mean.values[0])
    
# scale naively using ratio
scaledVals = []
for i in range(len(vals)):
    scaledVals.extend([vals[i] for j in range(round(((i+1)*ratio)-len(scaledVals)))])
    
#normalising
mmin = min(read[1])
mmax = max(read[1])
read[1] = list(map(lambda x: (x-mmin)/(mmax-mmin), read[1]))


# In[ ]:


plt.figure(figsize=(30,10))

plt.plot(read[1][300:1000])
made = [0.41 for x in range(300)]
made.extend(scaledVals[:1000])
plt.plot(made[30:730])


# In[ ]:





# In[ ]:




