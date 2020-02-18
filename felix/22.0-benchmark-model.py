#%%


import sys
sys.path.insert(0,'../src/utils')

import datetime
import os
import numpy as np
from multiprocessing import Pool
from multiprocessing.pool import ThreadPool
from functools import partial, reduce
from IPython.core.debugger import set_trace
import matplotlib.pyplot as plt
from DataPrepper import PrepData
from ChironModel import Chiron
import tensorflow as tf
import mappy as mp
import editdistance

from Utils import labelBaseMap, set_gpu_growth, get_valid_taiyaki_filename, analyse_cigar
from assembler import assemble, assemble_from_file

from TryAssembly import assemble_complicated, assemble_simple, assemble_wjlcs

set_gpu_growth()
filename = get_valid_taiyaki_filename()


prepData = PrepData(filename, RNN_LEN=300, min_labels=0)

chiron = Chiron(max_label_length=prepData.get_max_label_len())
chiron.model.load_weights("../trained_models/Chiron_v1_e538_dis478.h5")

print(prepData.get_len())
prepData.pos = 5000 # start at 5000 to be sure it wasn't trained on

traingen = prepData.train_gen()
testgen = prepData.test_gen()

aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

analysis_results = []

#%%

def get_minimap_stats(assembled):
    bestacc = 0
    bestmatch = ""
    bestcig = ""
    for hit in aligner.map(assembled):
        # print("{}\t{}\t{}\t{}\t{}\t{}".format(hit.ctg, hit.r_st, hit.r_en, hit.NM, hit.blen, analyse_cigar(hit.cigar_str)))
        cig = analyse_cigar(hit.cigar_str)
        acc = (cig['M']-cig['S']-cig['I']-cig['D'])/len(assembled)
        if bestacc < acc:
            bestacc = acc
            bestcig = cig
            bestmatch = hit.ctg
    return bestacc, bestmatch, bestcig

while True:
    a = next(traingen)
    b = next(testgen)
    ref = "".join([ labelBaseMap[x] for x in prepData.last_orig_ref ])

    ref_bacteria = next(aligner.map(ref)).ctg
    # print(f"Should be {ref_bacteria}")

    a_X = a[0]['the_input']
    b_X = b[0]

    print("Evaluating. ", end="")
    batchsize = 200
    results_a = []
    results_b = []
    for i in range(0, len(a_X), batchsize):
        results_a.extend(chiron.predict(a_X[i:i+batchsize]))
        print(".", end="")
    for i in range(0, len(b_X), batchsize):
        results_b.extend(chiron.predict(b_X[i:i+batchsize]))
        print(".", end="")
    results = results_a + results_b

    print(" Assembling ", end="")

    algo_pref = ['simple', 'compli', 'window', 'wjlcs']
    ass_algos = [assemble_simple, assemble_complicated, assemble, assemble_wjlcs]

    this_result = {}
    this_result['Reference'] = ref_bacteria
    this_result['read_idx'] = prepData.pos

    for name, algo in zip(algo_pref, ass_algos):
        print(name, end=" ")
        this_result[name] = {}
        assembled = algo(results)
        ed = editdistance.eval(ref, assembled)/len(ref)
        this_result[name]["ed"] = ed
        this_result[name]["len"] = len(assembled)
        acc, match, cig = get_minimap_stats(assembled)
        this_result[name]["cigar_acc"] = acc
        this_result[name]["cigar_match"] = match
        this_result[name]["cigar_cig"] = cig

    analysis_results.append(this_result)
    print(this_result)
    np.save("analysis", np.array(analysis_results))



# %%
 

# %%
