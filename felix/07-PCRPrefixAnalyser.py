#!/usr/bin/env python
# coding: utf-8

# In[ ]:


from matplotlib import pyplot as plt
import h5py
import re

noalign = "../taiyakiOutputs/output_justfromfasta.hdf5"
yealign = "../taiyakiOutputs/output_map_whole_genome.hdf5"


# In[ ]:


labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

def labelToBase(label):
    return labelBaseMap[label]
    
def getReadsDict(filename):
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

def checkedZippedIsSynced(zipped):
    dirty = False
    for z in zipped:
        if z[0]['UUID'] != z[1]['UUID']:
            dirty = True
            print(f"Fail at {z}")
    return dirty

def getPref(z):
    return "".join(list(map(labelToBase, list(z[1]['Reference'][:len(list(filter(lambda x: x<=z[0]['Ref_to_signal'][0], z[1]['Ref_to_signal'])))]))))


# In[ ]:


readsnoalign = getReadsDict(noalign)
readsyealign = getReadsDict(yealign)

# create intersection
keysInAligned = list(map(lambda read: read['UUID'], readsyealign))
readsnoalign = list(filter(lambda read: read['UUID'] in keysInAligned, readsnoalign))

zipped = list(zip(readsyealign, readsnoalign))

if checkedZippedIsSynced(zipped):
    print("The two lists are synced")


# In[ ]:


len(zipped)


# In[ ]:


zz = list(map(getPref, zipped))
zz[10:15]


# In[ ]:


zz = list(filter(lambda x: len(x)>0, zz))
zz.sort(key=len)
zz


# In[ ]:


lcs = ""
shortest = zz[0]
tolerance = 10

for i in range(len(shortest)-1):
    for j in range(i+1, len(shortest)):
        if j-i<=len(lcs):
            continue
        fltr = list(filter(lambda x: shortest[i:j] in x, zz))
        if len(fltr) >= len(zz) - tolerance:
            lcs = shortest[i:j]
            
print(lcs)
print(len(list(filter(lambda x: lcs in x, zz))))


# In[ ]:


mx = 0
for z in zz:
    if lcs in z:
        l = len(z.split(lcs)[0])
        mx = l if l > mx else mx
print(mx)
for z in zz:
    start=len(z.split(lcs)[0])
    if len(z[start:]) > 0:
        print(f"{z[:start]:>{mx}s}|{lcs}|{z[start+len(lcs):]}")


# In[ ]:




