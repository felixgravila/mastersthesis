#!/usr/bin/env python
# coding: utf-8

# In[ ]:


path = "../../felix/assemblydata.npy" #path to the label / unassembled sequences
import numpy as np
import collections


file = np.load(path, allow_pickle=True)
sequences_list = []
sequences = file[0]
reference = file[1]

for i in range(len(sequences)):
    sequences_list.append(sequences[i])
    


# In[ ]:


def print_find_alignment_many(score,lst,s2,i1,i2):
    print(f"i1:{i1}, i2:{i2}")
    for i in range(len(lst)):
        print(i2 * '+' + lst[i][0] * "_" + lst[i][1])
    print(i1 * '+' + s2)
    print(f"score:{score}")
    print("==========")
    
def show_alignment(s,i):
    pan = 10
    if(i < 0):
        pan = pan + i
    return pan * '+' + i * '_' + s + f"    :{i}"


def calc_overlap_many(lst, s2, i1, i2):
    total_overlap = 0
    for i in range(len(lst)):
        index = lst[i][0]
        s1 = lst[i][1]
        
        overlap = min(len(s1) - i1 + index, len(s2) - i2 - index)
        if(overlap > 0):
            total_overlap += overlap
    return total_overlap

def calc_score_basic_many(lst, s2, i1, i2):
       
#     s2 = s2[i1:]
      
    total_score = 0
#     overlap = calc_overlap_many(lst, s2,i1,i2)
    
    while(len(s2) > i2 and get_furthest_index(lst) - 1 > i1):

        for i in range(len(lst)):
            s1 = lst[i][1]
            index = lst[i][0]
            
            if(index <= i2 and len(s1) + index > i1):
                score = 0
                if(s1[i1-index] == s2[i2]):
                    score = 1
                total_score += score
        i1 += 1
        i2 += 1
#     print(total_score, overlap)
    return total_score

def get_furthest_index(lst):
    return max([i+len(l) for (i,l) in lst])

def align_many(lst,s2, fb = False):
    if len(lst) == 0:
        return 0
       
    i1 = get_furthest_index(lst) -1
    i2 = 0
    
    max_score = -100
    max_s2 = []
    max_i2 = 0
    
    print_i1 = 0
    print_i2 = 0
    
    count = 0
    while(i2 < len(s2)):               
        score = calc_score_basic_many(lst, s2, i1,i2)
            
        if(score > max_score):
            if(fb):                       
                print_find_alignment_many(score,lst,s2,i1,i2)
            
            print_i1 = i1
            print_i2 = i2
            
            max_score = score
            max_s2 = s2
            if(i1 > 0):
                max_i2 = i1
            else:
                max_i2 = -1*i2
        if(i1 > 0):
            i1 -= 1
        else:
            i2 += 1
   
    return max_i2

def align_list_of_sequences(seq_list, window=10, debug=False):
    alignments = []
    max_length = 0 # what is this used for?
    
    for i, seq in enumerate(seq_list):
        to_align_sequences = alignments[max(0, i-window):i]
        index = align_many(to_align_sequences, seq)

        
        if debug and len(to_align_sequences) > 0 and abs(index - to_align_sequences[-1][0]) > 5:
            align_many(to_align_sequences, seq, fb=True)
            print("======")

        alignments.append((index,seq))

        if(index + len(seq) > max_length):
            max_length = index + len(seq)
            
    return alignments


# In[ ]:


alignments = align_list_of_sequences(sequences_list[:68])


for i, alignment in enumerate(alignments):
    print(f"{i:03d} - {show_alignment(alignment[1], alignment[0])}")
    


# In[ ]:


def run_test_at_faulty_index(faulty_index, alignments, window=10):
    # get context for algo
    testseq = alignments[faulty_index-window:faulty_index]
    testalgn = alignments[faulty_index][1]

    # run alignment
    al = align_many(testseq, testalgn)
    print(al)

    # print to ensure it's correct
    if al < 0:
        testseq = [(a-al,b) for (a,b) in testseq]
        al = 0
    else:
        mina = min(a for (a,_) in testseq)
        minb = min(mina, al)
        testseq = [(a-minb,b) for (a,b) in testseq]
        al = al - minb

    for a,b in testseq:
        print(f"{' '*a}{b}")

    print(f"{' '*al}{testalgn}")


# In[ ]:


run_test_at_faulty_index(46, alignments)


# In[ ]:


# this should take the raw signal, not the alignments
def assemble(alignments):
    dna = ""
    for col in range(max_length):
        col_bases = []
        for j in range(len(alignments)):   
            i = alignments[j][0]
            s = alignments[j][1]
            if(col >= i and col < i + len(s)):
                col_bases.append(s[col-i])

        freq_base = collections.Counter(col_bases).most_common(1)
        if(freq_base != []):
            dna += freq_base[0][0]
    return dna


# In[ ]:




