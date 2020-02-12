#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import pandas as pd
from matplotlib import pyplot as plt
import h5py
import numpy as np
import math


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
    "C": "r",
    "G": "g",
    "T": "#FFA500"
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


# In[ ]:


files = [
    "../taiyakiOutputs/output_flappie_nomap.hdf5",
    "../taiyakiOutputs/output_justfromfasta.hdf5",
    "../taiyakiOutputs/output_flappiealigned.hdf5",
    "../taiyakiOutputs/output_createfasta.hdf5"
]

better_filenames = {
    "../taiyakiOutputs/output_flappie_nomap.hdf5": "flappie no map",
    "../taiyakiOutputs/output_justfromfasta.hdf5": "fasta no map",
    "../taiyakiOutputs/output_flappiealigned.hdf5": "flappie map",
    "../taiyakiOutputs/output_createfasta.hdf5": "fasta map"
}

count = 4
start = 0
end = 2000

reads = list(map(lambda file: get_reads_dict(file), files))

fig, ax = plt.subplots(nrows=count, ncols=1, sharex=True, figsize=(30,5*count))
if count == 1:
    ax = [ax]

for i in range(count):
    dacs = normalise_list(reads[0][i]['Dacs'])*4 + len(reads)*0.5
    ax[i].plot(range(start, end), dacs[start:end], 'k', label="raw")
    
    for r in range(len(reads)):
        dnalist = make_dna_list(reads[r][i])
        ohes = makeOHE(dnalist)
        
        for base in ohes.keys():
            ohes[base] = list(map(lambda x: (x+r)*0.5, ohes[base]))
            if r == 0:
                ax[i].plot(range(start,end), ohes[base][start:end], baseColourMap[base], label=base)
            else:
                ax[i].plot(range(start,end), ohes[base][start:end], baseColourMap[base])
                
    for pos in range(len(files)):
        ax[i].text(start+2, pos*0.5+0.2, better_filenames[files[pos]], fontsize=12)
    ax[i].text(start+50, 5.5, reads[0][i]['UUID'], fontsize=12)

    ax[i].set_xlim([start-10, end])
    ax[i].set_ylim([0,6])

ax[0].legend(loc="upper right")
plt.subplots_adjust(wspace=0, hspace=0)

plt.savefig(f"4split.png", bbox_inches = 'tight', pad_inches = 0)


# In[ ]:


reads = get_reads_dict(files[2])
read = reads[0]

start = 2000
end = 2500

plt.figure(figsize=(30,5))

dacs = normalise_list(read['Dacs'])
dnalist = make_dna_list(read)

for base in range(4):
    cb = []
    for i in range(start, end):
        cb.append(dacs[i] if dnalist[i] == base else 0)
    plt.plot(range(start,end),
             cb,
             baseColourMap[labelBaseMap[base]],
             label=labelBaseMap[base])

plt.xlim([start, end])
plt.ylim([0,1])

plt.savefig(f"colourseq.png", bbox_inches = 'tight', pad_inches = 0)


# In[ ]:




