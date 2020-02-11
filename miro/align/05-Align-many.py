# In[ ]:


path = "../../felix/assemblydata.npy" #path to the label / unassembled sequences
import numpy as np
import collections
import sys # for debugging with sys.exit()
from itertools import zip_longest
import operator
import editdistance

def yeet():
    sys.exit()


file = np.load(path, allow_pickle=True)
sequences_list = []
sequences = file[0]
reference = file[1]

for i in range(len(sequences)):
    sequences_list.append(sequences[i])

#%%

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
def calc_score_basic_many(lst, s2, idx):
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


def align_many(lst, s):
    if len(lst) == 0:
        return 0

    maxval = 0
    iformax = 0
    for i in range(get_closest_index(lst)-len(s)+1, get_furthest_index(lst)-1):
        v = calc_score_basic_many(lst, s, i)
        maxval, iformax = (v, i) if v > maxval else (maxval, iformax)

    return iformax



def align_list_of_sequences(seq_list, window=10):
    alignments = []
    
    for i, seq in enumerate(seq_list):
        index = align_many(alignments[max(0, i-window):i], seq)
        alignments.append((index,seq))

    return alignments



alignments = align_list_of_sequences(sequences_list)



def show_alignment(s,i):
    pan = 10
    if(i < 0):
        pan = pan + i
    return pan * '+' + i * '_' + s + f"    :{i}"

for i, alignment in enumerate(alignments[:50]):
    print(f"{i:03d} - {show_alignment(alignment[1], alignment[0])}")

#%%

# this should take the raw signal, not the alignments
def assemble(alignments):
    padded = pad_align_with_spaces(alignments)
    zipped = list(zip_longest(*padded, fillvalue=" "))
    return "".join(list(map(get_most_popular_base, zipped)))


assembled = assemble(alignments)
print(assembled)
# %%

print(f"Distance to reference is {editdistance.eval(assembled, reference)}")

# %%
