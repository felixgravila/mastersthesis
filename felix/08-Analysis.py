#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
from matplotlib import pyplot as plt
import h5py
import numpy as np
import math

# from taiyaki encoding
labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}


# In[ ]:


def get_reads_dict(filename):
    file = h5py.File(filename, "r")
    file = file['Reads']
    reads = []
    for r in file.keys():
        elem = {}
        elem['UUID'] = r
        for k in file[r].keys():
            elem[k]=file[r][k][()]
        reads.append(elem)
    return reads


# In[ ]:


rd = get_reads_dict("../taiyakiOutputs/output_justfromfasta.hdf5")
print(f"Total {len(rd)} reads")
rd[0]


# In[ ]:


# analyse average 5-mer length
def getLengthPer(read, k=5):
    rref = list(read['Ref_to_signal'])
    lens = []
    maxdif = 0
    for i in range(0, (len(rref)-k)):
        dif = rref[i+k]-rref[i]
        lens.append(dif)
        maxdif = dif if dif > maxdif else maxdif
    print(f"{read['UUID']} - max {k}-mer length: {maxdif}")
    return lens
#     return maxdif

lengths = [getLengthPer(r, 5) for r in rd]
alllengths = []
for l in lengths:
    alllengths.extend(l)
plt.hist(alllengths, log=True)


# In[ ]:





# In[ ]:


seq = "CAGTTAGTGTTACCCAACCTTCAA"
Ref0 = "".join(list(map(lambda x: labelBaseMap[x], rd[0]['Reference'])))
Ref1 = "".join(list(map(lambda x: labelBaseMap[x], rd[1]['Reference'])))
p0 = Ref0.find(seq)
p1 = Ref1.find(seq)
start0 = rd[0]['Ref_to_signal'][p0]
stop0 = rd[0]['Ref_to_signal'][p0+len(seq)]
start1 = rd[1]['Ref_to_signal'][p1]
stop1 = rd[1]['Ref_to_signal'][p1+len(seq)]

plt.plot(rd[0]['Dacs'][start0:stop0])
plt.plot(rd[1]['Dacs'][start1:stop1])


# In[ ]:




