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

experiments = [
    # ('path', 'name'),
    ('fasta/chiron-bn-pad5', 'chiron_bn_pad5'),
    ('/mnt/nvme/bio/train_chiron/output_DNA_MODEL/result/', 'chiron_dna_model'),
    ('/mnt/nvme/bio/mastersthesis/somedata/guppy_output', 'guppy'),
    ('fasta/fishnchips_250_5CNN_25H_4B', 'fishnchips_250_5CNN_25H_4B'),
]

overwrite_all = False

read_dict_file = "/mnt/nvme/bio/mastersthesis/utilities/umiToBactDict/uids.json"
with open(read_dict_file) as f:
    read_dict = json.load(f)

for folder,experiment_name in experiments:
    print(f"Running {experiment_name}")

    result_dict = []
    json_write_file = f"trained_models/fa_{experiment_name}.json"

    if os.path.isfile(json_write_file) and not overwrite_all:
        answer = input("File exists. Overwrite (yes/no/all) [Y/n/a]?:")
        if answer in "Nn" and answer is not "":
            continue
        if answer in "Aa" and answer is not "":
            overwrite_all = True

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

    cigaccs = []
    misses = 0
    tot_reads = len(reads)
    for i, (rid, dna) in enumerate(reads.items()):
        print(f"Aligning {i:04d}/{tot_reads}"+" "*50, end="\r")
        found = False
        for hit in aligner.map(dna):
            if hit.ctg.split(";")[0] == read_dict[rid.split(" ")[0]]:
                found = True
                cigacc = 1-(hit.NM/hit.blen)
                result_dict.append({
                    'read_id':rid,
                    'ctg': hit.ctg,
                    'r_st': hit.r_st,
                    'r_en': hit.r_en,
                    'NM': hit.NM,
                    'blen': hit.blen,
                    'cig': analyse_cigar(hit.cigar_str),
                    'cigacc': cigacc
                })
                # print(style.GREEN(f"{modelname} ({cigacc*100:.2f})..."), end="")
                cigaccs.append(cigacc*100)

        if not found:
            misses += 1
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

    print(f"Average cigacc {np.mean(cigaccs):.2f}%, {misses} not found")
# %%