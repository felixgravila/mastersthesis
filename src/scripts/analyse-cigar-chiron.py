#%%
import sys
sys.path.insert(0, './../src')

import mappy as mp
import matplotlib.pyplot as plt
import numpy as np
import json
import re

from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

#%%
set_gpu_growth()
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa", preset="map-ont")

class style():
    RED = lambda x: f"\033[31m{x}\033[0m"
    GREEN = lambda x: f"\033[32m{x}\033[0m"

# model = 'outputs/chiron-512CNN-512LSTM-pad5-maxpool3/2020-04-21_17:32:55/checkpoints/00464_dis247.h5'
model = "./trained_models/00464_dis247.h5"

input_length = 300
reads_to_eval = 200

filename = "mapped_therest.hdf5"
bacteria = ["Escherichia", "Salmonella"]
generator = DataGenerator(filename, bacteria, batch_size=None, input_length=input_length, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None)\
    .get_evaluate_batch()

'''
makes a chiron for the model file
loads the weights
returns name of model and predict func
'''
def make_chiron_for_file(file):
    description = file.split("/")[1]
    if "CNN" in description:
        cnn = int(re.findall(r"\d+CNN", description)[0][:-3])
        lstm = int(re.findall(r"\d+LSTM", description)[0][:-4])
    else:
        cnn = 256
        lstm = 200
    cb = ChironBuilder(input_length, cnn_filters=cnn, lstm_units=lstm)
    if "bn" in description:
        cb = cb.with_batch_normalization()
    if "pad5" in description:
        cb = cb.with_rnn_padding(5)
    if "maxpool3" in description:
        cb = cb.with_maxpool(3)
    chiron = cb.build()
    chiron.load_weights(file)
    return (chiron.name, chiron.predict_beam_search) # using get_model_name instead of description for safety

modelname, chiron = make_chiron_for_file(model)

result_dict = []
json_write_file = f"trained_models/{modelname}.json"

#%%

def run(file_name):
    outputs = []
    for idx in range(reads_to_eval):
        try:
            print(f"Evaluating {idx}/{reads_to_eval}...", end="")
            X, ref, raw, read_id = next(generator)

            prediction, logs = chiron(X, beam_width=1) # beam_width=1 -> greedy
            assembled = assemble(prediction, window=7)
            try:
                # this crashes if no match found
                besthit = next(aligner.map(assembled))
                cigacc = besthit.mlen/besthit.blen
                print(style.GREEN(f"{modelname} ({cigacc*100:.2f})..."), end="")
                outputs.append({
                        'name':modelname,
                        'dna_pred':assembled,
                        'acc':cigacc
                    })
                with open(f"./temps/{file_name}", 'w') as jsonfile:
                    json.dump(outputs, jsonfile)
            except:
                print(style.RED(f"{modelname}..."), end="")
            print("done.")
        except Exception as e:
            print(e)

if __name__ == "__main__":
    file_name = sys.argv[1]
    run(file_name)