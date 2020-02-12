#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import sys
sys.path.insert(0,'../src/utils')

import numpy as np
from multiprocessing import Pool
from functools import reduce
from itertools import zip_longest
import editdistance
import matplotlib.pyplot as plt


# In[ ]:


data = np.load("assemblydata.npy", allow_pickle=True)
results = data[0][::3]
ref = data[1]


# In[ ]:


def similarity(str1,str2):
    # divide by len of str2 since we make str1 smaller and we want to penalise it
    return sum([s1==s2 for s1, s2 in zip(str1, str2)])/len(str2)


# In[ ]:


def align(str1, str2):
    bestsim = 0
    bestalign = 0
    for i in range(10):
        sim = similarity(str1[i:], str2)
        bestsim, bestalign = (sim, i) if sim > bestsim else (bestsim, bestalign)
    return bestalign


# In[ ]:


def simple(results, display=False):
    ll = []
    indents = 0
    for i in range(1,len(results)):
        a = align(results[i-1], results[i])
        ll.append(a)
        indents += a
        if display:
            print(" "*indents + results[i])
    return ll


# In[ ]:


alignments = simple(results[:30], display=True)


# In[ ]:


def most_frequent_element(the_list):
    d = {}
    for l in the_list:
        if l not in d:
            d[l] = 0
        d[l] += 1
    mx = 0
    ml = ""
    for l in d.keys():
        mx, ml = (d[l], l) if d[l] > mx and l != " " else (mx, ml)
    return ml


# In[ ]:


def do_assembly(results):
    r = simple(results)
    a = [results[0]]
    indents = 0
    for indent,result in zip(r,results[1:]):
        indents += indent
        a.append(" "*indents+result)
    return "".join(map(most_frequent_element, zip_longest(*a, fillvalue=' ')))
            
do_assembly(results)


# In[ ]:




