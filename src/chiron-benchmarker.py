#%%

#%% 

import editdistance
import mappy as mp
import matplotlib.pyplot as plt
import numpy as np

from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

input_length = 300

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=input_length, stride=10, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

X, ref = next(generator)
print(f"Predicting {len(X)} windows...")

cb = ChironBuilder(input_length)\
        .with_batch_normalization()\
        .build()

cb.model.load_weights('outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/chiron-bn-pad5/chiron-bn-pad5-2020-03-03_21:24:40_e00377_dis421.h5')

pred = cb.predict(X)
assembled = assemble(pred)
print(f"Assembled length: {len(assembled)}")
ed = editdistance.eval(ref, assembled)
print(f"Editdistance to ref is {ed}, accuracy {1-(ed/len(ref)):.3f}")

for hit in aligner.map(assembled):
    print("{}\t{}\t{}\t{}\t{}\t{}".format(hit.ctg, hit.r_st, hit.r_en, hit.NM, hit.blen, analyse_cigar(hit.cigar_str)))
    # cig = analyse_cigar(hit.cigar_str)
    # print(cig)

# %%

# def get_minimap_stats(assembled):
#     bestacc = 0
#     bestmatch = ""
#     bestcig = ""
#     for hit in aligner.map(assembled):
#         cig = analyse_cigar(hit.cigar_str)
#         acc = (cig['M']-cig['S']-cig['I']-cig['D'])/len(assembled)
#         if bestacc < acc:
#             bestacc = acc
#             bestcig = cig
#             bestmatch = hit.ctg
#     return bestacc, bestmatch, bestcig

# while True:
#     a = next(traingen)
#     b = next(testgen)
#     ref = "".join([ labelBaseMap[x] for x in prepData.last_orig_ref ])

#     ref_bacteria = next(aligner.map(ref)).ctg
#     # print(f"Should be {ref_bacteria}")

#     a_X = a[0]['the_input']
#     b_X = b[0]

#     print("Evaluating. ", end="")
#     batchsize = 200
#     results_a = []
#     results_b = []
#     for i in range(0, len(a_X), batchsize):
#         results_a.extend(chiron.predict(a_X[i:i+batchsize]))
#         print(".", end="")
#     for i in range(0, len(b_X), batchsize):
#         results_b.extend(chiron.predict(b_X[i:i+batchsize]))
#         print(".", end="")
#     results = results_a + results_b

#     print(" Assembling ", end="")

#     algo_pref = ['simple', 'compli', 'window', 'wjlcs']
#     ass_algos = [assemble_simple, assemble_complicated, assemble, assemble_wjlcs]

#     this_result = {}
#     this_result['Reference'] = ref_bacteria
#     this_result['read_idx'] = prepData.pos

#     for name, algo in zip(algo_pref, ass_algos):
#         print(name, end=" ")
#         this_result[name] = {}
#         assembled = algo(results)
#         ed = editdistance.eval(ref, assembled)/len(ref)
#         this_result[name]["ed"] = ed
#         this_result[name]["len"] = len(assembled)
#         acc, match, cig = get_minimap_stats(assembled)
#         this_result[name]["cigar_acc"] = acc
#         this_result[name]["cigar_match"] = match
#         this_result[name]["cigar_cig"] = cig

#     analysis_results.append(this_result)
#     print(this_result)
#     np.save("analysis", np.array(analysis_results))

