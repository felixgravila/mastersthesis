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

models = [
    'outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5',
    'outputs/chiron-bn-pad5-maxpool3/2020-03-04_09:35:31/checkpoints/00569_dis245.h5'
]

input_length = 300

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=input_length, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

cb = ChironBuilder(input_length)\
        .with_batch_normalization()\
        .with_maxpool(3)\
        .with_rnn_padding(5)\
        .build()
# cb = ChironBuilder(input_length)\
#         .with_batch_normalization()\
#         .build()


cb.model.load_weights(models[1])

results = []
for i in range(50):
    X, ref, raw = next(generator)
    print(f"{i:02d}: Predicting {len(X)} windows... ", end="")
    pred = cb.predict(X)
    assembled = assemble(pred, window=7)
    print(f"Assembled length: {len(assembled)}, ref length {len(ref)}... ", end="")

    besthit = next(aligner.map(assembled))
    cigacc = 1-(besthit.NM/besthit.blen)
    results.append((cigacc, assembled, raw, ref))
    print(f"cigacc {cigacc:.3f}")

    np.save("bn-pad5-maxpool3-e569-dis245", np.array(results))
    # for hit in aligner.map(assembled):
    #     print("{}\t{}\t{}\t{}\t{}\t{}".format(hit.ctg, hit.r_st, hit.r_en, hit.NM, hit.blen, analyse_cigar(hit.cigar_str)))
    #     # cig = analyse_cigar(hit.cigar_str)
    #     # print(cig)

accs = [x[0] for x in results]
print(accs)
print(f"mean acc: {np.mean(accs)}")


# %%
