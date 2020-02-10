#!/usr/bin/env python
# coding: utf-8

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


# In[ ]:


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


# In[ ]:


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


# In[ ]:


#test 1
# lst = [
#     [0,to_base_list("AATTCC")],
#     [1,to_base_list("ATTCCG")],
#     [2,to_base_list("TTCCGG")],
#     [3,to_base_list("TCCGGA")],
#     [4,to_base_list("CCGGAA")]
# ]
# s = tbl("AATTCCGGAA")
# find_alignment_many(lst, s)

#test2
# lst = [
#     [1,to_base_list("AAA")],
#     [1,to_base_list("A")]
# ]
# s = tbl("AA")
# find_alignment_many(lst, s)

#test3
lst = [
    [0,"CTCTTGGGGGATAAGCCTGTTATC"],
    [0,"ACTCTTGGGGATAAGCCTGTTATCA"],
    [1,"CTCTTGGGGATAAGCCTGTTATC"],
    [0,"CTCTTGGGGGATAAGCCTGTTATC"],
    [0,"CTCTTGGGGGATAAGCCTGTTATC"],
    [2,"TCTTGGGGATAAGCCTGTTATCC"],
    [2,"CTTGGGGGATAAGCCTGTTATCCA"],
    [3,"CTTGGGGATAAGCCTGTTATCC"],
    [3,"CTTGGGGATAAGCCTGTTATCCC"],
    [4,"CTTGGGGATAAGCCTGTTATCCC"],
]
s = "TGGGGATAAGCCTGTTATCCC"
# find_alignment_many(lst, s, True)


# In[ ]:


path = "../../felix/assemblydata.npy" #path to the label / unassembled sequences
import numpy as np

file = np.load(path, allow_pickle=True)
sequences_list = []
sequences = file[0]
reference = file[1]

for i in range(len(sequences)):
    sequences_list.append(sequences[i])
    


# In[ ]:


import collections
alignments = []
max_length = 0

window = 10

seq_list=sequences_list[5:68]

for i, seq in enumerate(seq_list):
    to_align_sequences = alignments[max(0, i-window):i]
    index = align_many(to_align_sequences, seq)
    
    #debug
    if(len(to_align_sequences) > 0 and abs(index - to_align_sequences[-1][0]) > 5):
        align_many(to_align_sequences, seq, fb=True)
        print("======")
    
    alignments.append((index,seq))

    if(index + len(seq) > max_length):
        max_length = index + len(seq)
    
for i, alignment in enumerate(alignments):
    print(f"{i:03d} - {show_alignment(alignment[1], alignment[0])}")
    


# In[ ]:


testseq = alignments[28:38]
testalgn = alignments[38][1]
print(testalgn)
testseq


# In[ ]:


al = align_many(testseq, testalgn)

# otherwise a negative al doesn't make sense
testseq_minus_al = [(a-al,b) for (a,b) in testseq]

for a,b in testseq_minus_al:
    print(f"{' '*a}{b}")

#testalgn now effectively at "0"
print(testalgn)
print(al)


# In[ ]:


calc_score_basic_many(testseq, testalgn, 7, 0)


# In[ ]:


import collections
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
print(dna)


# In[ ]:




