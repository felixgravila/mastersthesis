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

models = [
    'outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5',
    'outputs/chiron-bn-pad5-maxpool3/2020-03-04_09:35:31/checkpoints/00787_dis234.h5',
    'outputs/chiron-pad5-maxpool3/2020-03-04_17:44:03/checkpoints/00927_dis193.h5',
    'outputs/chiron-bn-pad5-dropout-maxpool3/2020-03-05_08:48:58/checkpoints/01924_dis588.h5'
]

input_length = 300
reads_to_eval = 1000
json_write_file = "eval_output.json"

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=input_length, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

'''
makes a chiron for the model file
loads the weights
returns name of model and predict func
'''
def make_chiron_for_file(file):
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
    return (chiron.get_model_name(), chiron.predict) # using get_model_name instead of description for safety

chiron_funcs = list(map(make_chiron_for_file, models))

result_dict = {
    'read_ids': []
}
for funcname in [c[0] for c in chiron_funcs]:
    # initialise dict with empty arrays for each func
    result_dict[funcname] = []

for idx in range(reads_to_eval):
    try:
        print(f"Evaluating {idx}/{reads_to_eval}...", end="")
        X, ref, raw, read_id = next(generator)
        result_dict['read_ids'].append(read_id)
        for modelname, modelfunc in chiron_funcs:
            print(f"{modelname}...", end="")
            prediction = modelfunc(X)
            assembled = assemble(prediction, window=7)
            try:
                # this crashes if no match found
                besthit = next(aligner.map(assembled))
                result_dict[modelname].append({
                    'ctg': besthit.ctg,
                    'r_st': besthit.r_st,
                    'r_en': besthit.r_en,
                    'NM': besthit.NM,
                    'blen': besthit.blen,
                    'cig': analyse_cigar(besthit.cigar_str),
                    'cigacc': 1-(besthit.NM/besthit.blen)
                })
            except:
                result_dict[modelname].append({
                    'ctg': 0,
                    'r_st': 0,
                    'r_en': 0,
                    'NM': 0,
                    'blen': 0,
                    'cig': 0,
                    'cigacc': 0
                })
        with open(json_write_file, 'w') as jsonfile:
            json.dump(result_dict, jsonfile)
        print("done.")
    except Exception as e:
        print(e)

# with open(jsonfile, 'r') as jf:
#     results = json.load(jf)