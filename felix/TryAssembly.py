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



def similarity(str1,str2):
    if len(str2) == 0:
        return 0
    # divide by len of str2 since we make str1 smaller and we want to penalise it
    return sum([s1==s2 for s1, s2 in zip(str1, str2)])/len(str2)


def align(str1, str2):
    bestsim = 0
    bestalign = 0
    for i in range(10):
        sim = similarity(str1[i:], str2)
        bestsim, bestalign = (sim, i) if sim > bestsim else (bestsim, bestalign)
    return bestalign


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


def do_assembly(function, results):
    results = [r for r in results if len(r) > 0]
    r = function(results)
    a = [results[0]]
    indents = 0
    for indent,result in zip(r,results[1:]):
        indents += indent
        a.append(" "*indents+result)
    return "".join(map(most_frequent_element, zip_longest(*a, fillvalue=' ')))

def assemble_simple(results):
    return do_assembly(simple, results)

def assemble_complicated(results):
    return do_assembly(complicated, results)

def assemble_wjlcs(results):
    return do_assembly(with_jumpy_lcs, results)
        
