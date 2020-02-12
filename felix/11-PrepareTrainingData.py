#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
import h5py
import numpy as np
from multiprocessing import Pool

# labelBaseMap = {
#     0: "A",
#     1: "C",
#     2: "G",
#     3: "T"
# }


# In[ ]:


def get_reads_dict(filename):
    file = h5py.File(filename, "r")
    freads = file['Reads']
    reads = []
    for r in freads.keys():
        elem = {}
        elem['UUID'] = r
        elem['Dacs'] = freads[r]['Dacs'][()]
        elem['RTS'] = freads[r]['Ref_to_signal'][()]
        elem['REF'] = freads[r]['Reference'][()]
        reads.append(elem)
    file.close()
    return reads


# In[ ]:


file = "../taiyakiOutputs/output_createfasta.hdf5"
reads = get_reads_dict(file)


# In[ ]:


def processRead(read):
    print()
    df = pd.DataFrame([], columns=['label', 'dac'])
    # For each index in the RTS array -1 since we need another last one
    for rtsidx in range(len(read['RTS'])-1):
        # Add to dataset in increments of 5 until too close to the next rtsidx
        # Or not enough Dacs left
        i = read['RTS'][rtsidx]
        
        #make the labels iteratively
        labels = []
        l = rtsidx
        while read['RTS'][l] < i + RNN_LEN and l < len(read['REF']):
            labels.append(read['REF'][l])
            l += 1

        while i < (read['RTS'][rtsidx+1] - 5) and (i + RNN_LEN) < len(read['Dacs']):
            # check if we should include another label
            while read['RTS'][l] <= i + RNN_LEN and l < len(read['REF']):
                labels.append(read['REF'][l])
                l += 1
            df = df.append({
                    "label":labels,
                    "dac":read['Dacs'][i:(i+RNN_LEN)]
                    }, ignore_index=True)
            i += 5
    return df


# In[ ]:


pool = Pool()
results = pool.map(processRead, reads)
pool.close()
pool.join()


# In[ ]:


df = pd.DataFrame([], columns=['label', 'dac'])
for result in results:
    df = df.append(result, ignore_index=True)


# In[ ]:


df.to_pickle("dataset.pickle")

