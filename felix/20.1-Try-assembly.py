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

from Utils import analyse_cigar


# In[ ]:


data = np.load("assemblydata.npy", allow_pickle=True)


# In[ ]:


results = data[0][::3]
ref = data[1]
len(results)


# In[ ]:


data[1]


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


def jumpy_lcs(X, Y): 
    m = len(X)
    n = len(Y)
    L = [[0 for x in range(n+1)] for x in range(m+1)] 
  
    # Following steps build L[m+1][n+1] in bottom up fashion. Note 
    # that L[i][j] contains length of LCS of X[0..i-1] and Y[0..j-1]  
    for i in range(m+1): 
        for j in range(n+1): 
            if i == 0 or j == 0: 
                L[i][j] = 0
            elif X[i-1] == Y[j-1]: 
                L[i][j] = L[i-1][j-1] + 1
            else: 
                L[i][j] = max(L[i-1][j], L[i][j-1]) 
  
    # Following code is used to print LCS 
    index = L[m][n] 
  
    # Create a character array to store the lcs string 
    lcs = [""] * (index+1) 
    lcs[index] = "" 
  
    # Start from the right-most-bottom-most corner and 
    # one by one store characters in lcs[] 
    i = m 
    j = n 
    while i > 0 and j > 0: 
  
        # If current character in X[] and Y are same, then 
        # current character is part of LCS 
        if X[i-1] == Y[j-1]: 
            lcs[index-1] = X[i-1] 
            i-=1
            j-=1
            index-=1
  
        # If not same, then find the larger of two and 
        # go in the direction of larger value 
        elif L[i-1][j] > L[i][j-1]: 
            i-=1
        else: 
            j-=1
  
    return "".join(lcs) 


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

def complicated(results, display=False):
    ll = simple(results[:3])
    indents = 0
    for i in range(3,len(results)):
        a0 = align(results[i-3], results[i]) - ll[-2]
        a1 = align(results[i-2], results[i]) - ll[-1]
        a2 = align(results[i-1], results[i])

        avgalign = round((a0+a1+a2)/3)
        ll.append(avgalign)
        indents += avgalign
        if display:
            print(" "*indents + results[i])
    return ll

def with_jumpy_lcs(results, display=False):
    ll = []
    indents = 0
    for i in range(1, len(results)):
        substr = jumpy_lcs(results[i-1], results[i])
        a0 = align(results[i-1], substr)
        a1 = align(substr, results[i])
        a = a0 + a1
        indents += a
        ll.append(a)
        if display:
            print(" "*indents + results[i])
    return ll


def all_together(results, display=False):
    if display:
        print(results[0])
    all_aligns = simple(results), complicated(results), with_jumpy_lcs(results)
    ll = list(map(lambda x: round(sum(x)/3), zip(*all_aligns)))
    indents = 0
    for indent,string in zip(ll, results[1:]):
        indents += indent
        if display:
            print(" "*indents + string)
    return ll


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


def do_assembly(function, results):
    r = function(results)
    a = [results[0]]
    indents = 0
    for indent,result in zip(r,results[1:]):
        indents += indent
        a.append(" "*indents+result)
    return "".join(map(most_frequent_element, zip_longest(*a, fillvalue=' ')))
        
def write_assembled_fasta(filename):
    with open(filename, "w") as file:
        for func, fname in zip([simple, complicated, with_jumpy_lcs, all_together],["simple", "compli", "jumpy ", "all   "]):
            best = 0
            bestlen = 0
            assembled = do_assembly(func, results)
            file.write(f"@{fname}\n")
            file.write(f"{assembled}\n")
            print(f"{fname}: {len(assembled)}, acc {1 - editdistance.eval(assembled, data[1])/len(data[1]):.2f}")
            
write_assembled_fasta("output.fasta")


# In[ ]:


cigar_simple="12M2D2M1D3M1D20M1D1M1D6M2I50M1I15M2I2M1D9M2D12M3I3M1D10M4D6M2D2M2D3M1D34M1D6M1D6M1I7M4I24M2I2M1D12M2I12M2D3M1D21M1I5M1D2M3D8M1D10M1D3M2D9M2D24M1I42M2I1M4I21M2I9M4I6M1I17M4I19M1D27M1D12M1D12M6I8M3I4M1D18M1D1M1D7M3D17M1D5M1I8M2D6M1D12M1I9M8I22M1I9M1D12M1I18M2D6M1D5M1I6M1I18M3D9M2I12M2I6M2D7M2I10M2D15M2D21M7I2M2I12M2D11M1I16M2D5M1D3M1D12M2I9M1D3M2I12M2D5M1I17M2I27M1D3M1D27M1D7 M2I10M3I18M3D7M4D3M2D9M1I9M2D3M1I3M2I2M1I9M8I9M6I7M1D5M7I22M1I1M1I7M1D23M1I7M1D16M5I16M5D18M2I3M1D7M1I24M1D8M1D51M1D2M2D22M1I14M2D12M1D2M2D3M2D25M1D7M1I5M5D11M1D25M3D11M1D27M1D18M1I13M2D12M1D10M1D3M1D25M4D1M1I8M2I2M1I9M2D17M1I6M1D19M2I8M2D9M3D2M8D28M7I3M5D9M1D7M1I11M1D6M1D3M2D4M2D3M3D3M1D18M2D8M1I1M2D17M2D14M1D20M1I21M7I6M1D7M2D5M1D2M2D3M1D6M1I14M1D4M1I6M1D1M1D24M2I10M1D5M2D3M2 I4M3D14M4I10M1I16M4D20M1D8M1I14M1D6M1D18M4I8M1D18M1I12M1D25M3I20M1D5M1D8M2D4M1I11M3I3M2D6M4D9M3D16M1D5M2I10M1D19M2D8M2D3M4D3M1I6M2D2M1D2M2D6M5I9M1D10M1I6M1D2M2D10M3D14M1D3M2I6M1I1M1I12M1I29M1I16M1I3M1D8M1D3M1D13M1D3M3D4M1I7M2D17M1D3M2D7M1I4M2D7M3D9M3D9M4D3M1D8M2I11M5I1M4I5M2D5M2D6M1D33M1D6M1D5M1D3M1D1M3I8M1I29M1I11M1D9M1D8M1D5M1D17M1I6M1D3M1D1M3D25M1I14M1D7M4I41M3I14M1I18M2D24M 2D37M1D3M3D5M1D13M1D33M1I14M1I4M1I7M1D30M3I4M4D7M1D29M1I11M1D8M2I15M2D2M1I20M3I9M1I3M1D19M1I8M1D13M4D15M8I14M1D4M1D6M1D3M1D9M2D9M1I33M4I46M3I1M1I34M1D26M1D11M3I4M1D5M1I12M1D15M1I6M1D10M14S"
cigar_jumpy="7M1D32M4I1M5I26M2I17M14I1M1I7M2I5M3D6M1D5M1D17M2I1M1D4M1I14M6I6M10I2M1I5M7I8M5D6M1I5M1D12M5I11M5D8M3I1M1D5M5I1M2I24M2I13M4I3M2I2M1I17M12I2M1I19M1D3M1D9M4I17M2766S"
cigar_all="22M1D1M3I7M1I6M2I5M1D2M4I23M3I3M1D10M3I3M1I4M1I7M1D7M2D3M2D3M1D3M1D11M3I26M3I6M1D7M2I4M3I11M1I10M3I19M4I8M2D3M7I3M1D13M3I3M1I3M1D6M3I4M2D19M1D8M2I7M1D11M1I13M1I16M1I8M1D6M2I8M2I2M3I2M1I17M4I1M3I12M2D3M1D4M2I8M1D4M1I5M5I10M1I2M1I3M1I26M1I10M1I5M7I6M3I5M1D5M2I7M1D9M8I4M2I5M1D14M3D3M2I18M1D6M2D6M7I3M1D7M1I8M10I31M3I2M1I12M1I32M2I6M1I5M1I13M1D11M2I12M3I8M2D2M1I8M3I6M1I15M1D9M2I 5M8I8M1D12M1D17M5I13M2D8M1D13M5I6M3I44M3I3M2I29M5I11M2I4M2I11M2I1M4I1M2I7M1D3M1I4M3I9M3I2M1I6M1D1M3D4M3D5M1I2M2D8M4I10M1D3M1D9M2I9M3I1M2I4M7I7M1D5M6I12M1I7M1D2M1I1M1I7M1D8M6I15M1I18M7I3M1I2M1I12M1I6M2I2M3I18M7I5M2D7M3I3M1I6M8I6M1I7M1D30M2I7M1I19M1D5M1I2M2D7M2I5M1I7M4I6M1D13M1D18M1D23M2I2M1I9M3I4M1I1M5D6M1I5M1D13M2I10M1D1M2D12M2I5M1I26M1D10M1I1M1I7M5I13M1D21M1D3M1D11M1I13M3I8M1I 7M2I1M1D7M3I18M3I8M1D18M5I3M1I6M2D6M1I5M2D2M2D8M4D21M12I3M3D1M1D9M1D6M3I2M1I15M1I1M1I22M1D9M1I9M3D3M1I1M1I6M2I1M1D15M2D3M1I18M4I7M2I25M8I2M1D21M3D14M2I2M1D9M1I22M1D4M3I32M5I4M3D15M11I13M1I2M1I11M2D21M1D8M6I14M1D6M1D12M7I2M8I11M1D10M3I6M1I7M1I8M1D6M1I6M1I6M5I17M1I2M1D8M4I9M1D6M6I20M2I4M3I11M2D2M1D6M1I9M1D7M5I4M6I6M3D14M3I6M1D8M1D14M3I3M2I4M1D3M1I7M1I9M6I16M1D2M2D12M2D25M3I8M1I32 M1I12M2I7M1D8M1D17M3D5M2I10M3I4M2I2M2I17M2D7M2D6M2D2M5D6M1I14M2I3M3I7M1I15M1I14M1D7M6I21M4I4M1D9M1D6M1D4M2I9M1I15M1I13M2I7M1I11M1D9M1I9M1D17M1I3M1I3M1D7M2I4M1D27M3I14M1I2M7I2M1I17M1I26M5I5M1D11M2I17M1I14M4I12M2D15M1I7M3I15M1D7M1D27M4I40M4I5M6I2M1I6M3I6M1D7M5I2M1I2M2I9M4I4M2D27M2I5M1I5M9I10M4I28M1I5M4I3M1I1M2D4M1I3M2I1M1I4M3I14M4I14M2I1M1I4M1I19M4I5M1D16M4I17M1D7M1D10M3I10M1I3M2 D7M2I4M1D7M1I13M5I46M3I1M1I19M4I15M1D26M1D8M4I7M1D5M1I12M1D12M4I20M14S"


# In[ ]:


analyse_cigar(cigar_simple)


# In[ ]:


analyse_cigar(cigar_jumpy)


# In[ ]:


analyse_cigar(cigar_all)


# In[ ]:


do_assembly(simple, results)


# In[ ]:


with open("substrings.fasta", "w") as file:
    for i,s in enumerate(data[0]):
        file.write(f">{i}\n{s}\n")


# In[ ]:




