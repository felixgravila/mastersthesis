#%%

import numpy as np
import mappy as mp 
import os, sys
from collections import deque
import json
from Other import analyse_cigar

aligner = mp.Aligner("/mnt/nvme/bio/mastersthesis/useful_files/zymo-ref-uniq_2019-03-15.fa")

class style():
    RED = lambda x: f"\033[31m{x}\033[0m"
    GREEN = lambda x: f"\033[32m{x}\033[0m"

# folder = 'fasta/chiron-bn-pad5'
# folder = '/mnt/nvme/bio/train_chiron/output_DNA_MODEL/result/'
# folder = '/mnt/nvme/bio/mastersthesis/somedata/guppy_output'
folder = 'fasta/fishnchips_250_5CNN_25H_4B'
experiment_name = "DNA_MODEL"

result_dict = []
json_write_file = f"trained_models/fa_{experiment_name}.json"

if os.path.isfile(json_write_file):
    answer = input("File exists. Overwrite [Y/n]?:")
    if answer in "Nn" and answer is not "":
        sys.exit(0)

#%%

reads = {}

for fastafile in os.listdir(folder):
    if fastafile.split(".")[-1] not in ["fastq", "fasta", "fa", "fq"]:
        continue
    with open(os.path.join(folder, fastafile), "r") as f:
        data = deque(f.readlines())
    while len(data) > 0:
        l = data.popleft()
        if l[0] == "@":
            rid = l[1:-1] # remove @ and \n
            dna = data.popleft()[:-1]
            reads[rid] = dna

#%%

cigaccs = []
tot_reads = len(reads)
for i, (rid, dna) in enumerate(reads.items()):
    print(f"Aligning {i:04d}/{tot_reads}"+" "*50, end="\r")
    try:
        # this crashes if no match found
        besthit = next(aligner.map(dna))
        cigacc = 1-(besthit.NM/besthit.blen)
        result_dict.append({
            'read_id':rid,
            'ctg': besthit.ctg,
            'r_st': besthit.r_st,
            'r_en': besthit.r_en,
            'NM': besthit.NM,
            'blen': besthit.blen,
            'cig': analyse_cigar(besthit.cigar_str),
            'cigacc': cigacc
        })
        # print(style.GREEN(f"{modelname} ({cigacc*100:.2f})..."), end="")
        cigaccs.append(cigacc*100)
    except Exception as e:
        result_dict.append({
            'read_id':rid,
            'ctg': 0,
            'r_st': 0,
            'r_en': 0,
            'NM': 0,
            'blen': 0,
            'cig': 0,
            'cigacc': 0
        })
        # print(style.RED(f"{rid}..."), end="")
        cigaccs.append(0)
    with open(json_write_file, 'w') as jsonfile:
        json.dump(result_dict, jsonfile)

print(f"Average cigacc {np.mean(cigaccs)}")
# %%
