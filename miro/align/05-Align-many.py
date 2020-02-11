# In[ ]:


path = "../../felix/assemblydata.npy" #path to the label / unassembled sequences
import numpy as np
import collections
import sys # for debugging with sys.exit()
from itertools import zip_longest
import operator

def yeet():
    sys.exit()


file = np.load(path, allow_pickle=True)
sequences_list = []
sequences = file[0]
reference = file[1]

for i in range(len(sequences)):
    sequences_list.append(sequences[i])

#%%


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



def get_furthest_index(lst):
    return max([i+len(l) for (i,l) in lst])

def get_closest_index(lst):
    return min([i for (i,l) in lst])

def pad_align_with_spaces(lst):
    return [" "*a+b for (a,b) in lst]


# returns a dict with how many of each base are in a string
def count_bases(base_string):
    d = {}
    for l in "ATCG":
        d[l] = base_string.count(l)
    return d

# gets most popular base in a string
def get_most_popular_base(base_string):
    d = count_bases(base_string)
    return max(d.items(), key=operator.itemgetter(1))[0]


# Computes the similarity between lst and s2 if s2 starts at idx
def calc_score_basic_many(lst, s2, idx, debug=False):
    lst = lst.copy()

    min_in_list = min(a for (a,_) in lst)
    min_offset = min(min_in_list, idx)
 
    lst = [(a-min_offset, b) for (a,b) in lst]
    idx -= min_offset

    # transforms into relative padded strings
    only_str_list = pad_align_with_spaces(lst)
    s2 = " "*idx+s2

    # zip them for count(), if only one then just make lists of 1
    if len(only_str_list) > 1:
        zipped_list = list(zip_longest(*only_str_list, fillvalue=" "))
    else:
        zipped_list = [[a] for a in only_str_list[0]]

    # count how many bases at each index, ignoring " "
    counts = list(map(lambda x: x[1].count(x[0]) if x[0] != " " else 0, zip(s2, zipped_list)))
    return sum(counts[idx:])


def align_many(lst, s, fb = False):
    if len(lst) == 0:
        return 0

    maxval = 0
    iformax = 0
    for i in range(get_closest_index(lst)-len(s)+1, get_furthest_index(lst)-1):
        v = calc_score_basic_many(lst, s, i)
        maxval, iformax = (v, i) if v > maxval else (maxval, iformax)

    return iformax



def align_list_of_sequences(seq_list, window=10, debug=False):
    alignments = []
    
    for i, seq in enumerate(seq_list):
        index = align_many(alignments[max(0, i-window):i], seq)

        if debug and len(to_align_sequences) > 0 and abs(index - to_align_sequences[-1][0]) > 5:
            align_many(to_align_sequences, seq, fb=True)
            print("======")

        alignments.append((index,seq))

    return alignments



alignments = align_list_of_sequences(sequences_list)


for i, alignment in enumerate(alignments[:50]):
    print(f"{i:03d} - {show_alignment(alignment[1], alignment[0])}")

#%%

# this should take the raw signal, not the alignments
def assemble(alignments):
    padded = pad_align_with_spaces(alignments)
    zipped = list(zip_longest(*padded, fillvalue=" "))
    return "".join(list(map(get_most_popular_base, zipped)))


assembled = assemble(alignments)
print(len(assembled))

# %%
