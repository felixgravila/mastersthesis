#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
from matplotlib import pyplot as plt
import h5py
import numpy as np


# In[ ]:


# from taiyaki encoding
labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

#ensure colours are consistent
baseColourMap = {
    "A": "b",
    "C": "c",
    "G": "g",
    "T": "r"
}

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

def makeOHE(dnalist):
    ohes = {}
    for i in range(4):
        ohes[labelBaseMap[i]] = list(map(lambda x: 1 if x==i else 0, dnalist))
    return ohes


def plotInterestingFromFile(file, which, start, end):
    reads = get_reads_dict(file)
    
    if isinstance(which, int):
        read = reads[which]
    else:
        read = next(filter(lambda r: r['UUID'] == which, reads))
        
    print(read['UUID'])
    
    dnalist = make_dna_list(read)
    ohes = makeOHE(dnalist)
    
    plt.figure(figsize=(30,5))
    dacs = normalise_list(read['Dacs'])*4
    plt.plot(range(start, end), dacs[start:end], 'k', label="raw")
    
    # plot dots to see actual bases
    localrefs = [x for x in read['Ref_to_signal'] if x > start and x < end]
    plt.scatter(localrefs,[0.5 for i in range(len(localrefs))], s=100, c="k", marker="x")
    for base in ohes.keys():
        plt.plot(range(start,end), ohes[base][start:end], baseColourMap[base], label=base)
    plt.legend()
#     plt.savefig(f"{file.split('/')[2].split('.')[0]}.png")


# In[ ]:


plotfrom = 12500
plotto = 13500
# which = '6bfd9602-b481-49f1-9abf-2b2cd942897a'
which = 0


# In[ ]:


plotInterestingFromFile("../taiyakiOutputs/output_createfasta.hdf5", which, plotfrom, plotto)


# In[ ]:


# plotInterestingFromFile("../taiyakiOutputs/output_flappie_nomap.hdf5", which, plotfrom, plotto)


# In[ ]:


# plotInterestingFromFile("../taiyakiOutputs/output_justfromfasta.hdf5", which, plotfrom, plotto)


# In[ ]:


# plotInterestingFromFile("../taiyakiOutputs/output_map_whole_genome.hdf5", which, plotfrom, plotto)


# In[ ]:


# plotInterestingFromFile("../taiyakiOutputs/output_flappiealigned.hdf5", which, plotfrom, plotto)


# In[ ]:


# plotInterestingFromFile("../taiyakiOutputs/output_walkthrough.hdf5", which, plotfrom, plotto)

