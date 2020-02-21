import sys
sys.path.insert(0,'../src/utils')

import numpy as np 
from matplotlib import pyplot as plt
from assembler import assemble, assemble_from_file, _get_aligned_sequences, _show_alignment

# read = np.load("../miro/analysis_5006.npy")
# aligned = _get_aligned_sequences(read)

# for seq in aligned:
#     res = _show_alignment(seq[1],seq[0])
#     print(res)

read = np.load("../miro/raw_analysis_5006.npy", allow_pickle=True)
to_assemble = [e[1] for e in read]

ids = []
count = 0
for i,seq in enumerate(to_assemble):
    if(len(seq) < 3):
        count += 1
    else:
        count = 0
    
    if(count > 3):
        ids.append(i)

id = ids[0]
aligned = _get_aligned_sequences(to_assemble)
for i in range(id - 100, id + 100):
#for i,alignment in enumerate(aligned): 
    res = _show_alignment(aligned[i][1],aligned[i][0])

    if(i == id):
        print(30*"|")
        print(res)
        print(30*"|")
        continue
    print(f"{res};{i}")

print(len(aligned))

for i,(raw, pred) in enumerate(read):
    if(i == id):d

        plt.figure(figsize=(30,5))
        plt.plot(raw[:]*4, 'k', label="raw")
        plt.show() 
        break
#print(raw.shape)


