from itertools import zip_longest
import collections
import editdistance
import numpy as np
import operator

def assemble(base_string_list):
  aligned_seq = _get_aligned_sequences(base_string_list)
  return _get_assembled_string(aligned_seq)

def assemble_from_file(path):
  file = np.load(path, allow_pickle=True)
  return assemble(file[0])

def compare(assembled_string, reference_string):
  return editdistance.eval(assembled_string, reference_string)

def compare_from_file(path):
  file = np.load(path, allow_pickle=True)
  assembled_string = assemble(file[0])
  reference_string = file[1]
  return compare(assembled_string,reference_string)

def _get_assembled_string(alignments):
    padded = _pad_seq_list(alignments)
    zipped = list(zip_longest(*padded, fillvalue=" "))
    return "".join(list(map(_get_most_popular_base, zipped)))

def _get_aligned_sequences(seq_list,window=10):
    aligned_seq_list = []
    
    for i, seq in enumerate(seq_list):
        window_seq_list = aligned_seq_list[max(0, i-window):i]
        index = _find_alignment_index(window_seq_list, seq)
        aligned_seq_list.append((index,seq))

    return aligned_seq_list

def _find_alignment_index(seq_list, seq_to_align):
  if(len(seq_list) == 0):
    return 0
  
  max_score = 0
  max_score_index = 0

  alignment_from = _get_closest_index(seq_list)-len(seq_to_align)+1
  alignment_to = _get_furthest_index(seq_list)-1
  
  for i in range(alignment_from, alignment_to):
    score = _calc_score(seq_list, seq_to_align, i)
    if(score > max_score):
      max_score, max_score_index = (score, i)
  return max_score_index

def _calc_score(seq_list, seq_to_align, index):
  seq_list = seq_list.copy()
    
  min_in_list = min(a for (a,_) in seq_list)
  min_offset = min(min_in_list, index)

  seq_list = [(a-min_offset, b) for (a,b) in seq_list]
  index -= min_offset

  # transforms into relative padded strings
  padded_seq_list = _pad_seq_list(seq_list)
  seq_to_align = " "*index+seq_to_align

  # zip them for count(), if only one then just make lists of 1
  if len(padded_seq_list) > 1:
      zipped_list = list(zip_longest(*padded_seq_list, fillvalue=" "))
  else:
      zipped_list = [[a] for a in padded_seq_list[0]]

  counts = list(map(lambda x: x[1].count(x[0]) if x[0] != " " else 0, zip(seq_to_align, zipped_list)))
  return sum(counts[index:])

def _get_furthest_index(seq_list):
    return max([i+len(l) for (i,l) in seq_list])

def _get_closest_index(seq_list):
    return min([i for (i,l) in seq_list])

def _pad_seq_list(seq_list):
  return [" "*a+b for (a,b) in seq_list]

def _get_most_popular_base(base_string):
  base_count_dic = _count_bases(base_string)
  return max(base_count_dic.items(), key=operator.itemgetter(1))[0]

def _count_bases(base_string):
    d = {}
    for l in "ATCG":
        d[l] = base_string.count(l)
    return d
  
def _show_alignment(s,i):
    pan = 10
    if(i < 0):
        pan = pan + i
    return pan * '+' + i * '_' + s + f"    :{i}"
