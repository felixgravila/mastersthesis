#%%

import mappy as mp
import matplotlib.pyplot as plt
import numpy as np
import json

from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

class style():
    RED = lambda x: f"\033[31m{x}\033[0m"
    GREEN = lambda x: f"\033[32m{x}\033[0m"

model = 'outputs/chiron-pad5-maxpool3/2020-03-04_17:44:03/checkpoints/00927_dis193.h5'

reads_to_eval = 5
json_write_file = "eval_output_whole.json"

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=300, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

'''
makes a chiron for the model file
loads the weights
returns name of model and predict func
'''
def make_chiron_for_file(file, input_length):
    description = file.split("/")[1]
    cb = ChironBuilder(input_length)
    if "bn" in description:
        cb = cb.with_batch_normalization()
    if "pad5" in description:
        cb = cb.with_rnn_padding(5)
    if "dropout" in description:
        cb = cb.with_dropout()
    if "maxpool3" in description:
        cb = cb.with_maxpool(3)
    chiron = cb.build()
    chiron.model.load_weights(file)
    return chiron.predict

#%%

cigaccs = []

for idx in range(reads_to_eval):
    X, ref, raw, read_id = next(generator)
    print(f"Evaluating {idx}/{reads_to_eval}... Read {read_id} ", end="")
    predictor = make_chiron_for_file(model, len(raw))
    raw = raw.reshape(1,-1,1)

    prediction, logs = predictor(raw)

    try:
        besthit = next(aligner.map(prediction[0]))

        r = {
            'ctg': besthit.ctg,
            'r_st': besthit.r_st,
            'r_en': besthit.r_en,
            'NM': besthit.NM,
            'blen': besthit.blen,
            'cig': analyse_cigar(besthit.cigar_str),
            'cigacc': 1-(besthit.NM/besthit.blen)
        }
        cigaccs.append( 1-(besthit.NM/besthit.blen) )
        print(r)
    except:
        print("No match found...")


# %%

print(f"Mapped {len(cigaccs)}/{reads_to_eval} ({(len(cigaccs)/reads_to_eval)*100}%)")
print(f"Average accuracy: {(sum(cigaccs)/reads_to_eval)*100}%")
plt.hist([c*100 for c in cigaccs], bins=range(0, 100))
plt.show()

# %%