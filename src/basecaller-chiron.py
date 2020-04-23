#%%

import mappy as mp
import matplotlib.pyplot as plt
import numpy as np
import json
import re
import os

class style():
    RED = lambda x: f"\033[31m{x}\033[0m"
    GREEN = lambda x: f"\033[32m{x}\033[0m"

from models.ChironBuilder import ChironBuilder
from utils.RawReadGenerator import RawReadGenerator
from utils.assembler import assemble
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

# model = 'outputs/chiron-512CNN-512LSTM-pad5-maxpool3/2020-04-21_17:32:55/checkpoints/00464_dis247.h5'
model = 'outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5'
in_folder = '/mnt/nvme/bio/extracted/umi_each_bact_with_1_single'
output_file = 'chiron_output.fa'


input_length = 300

readGenerator = RawReadGenerator(in_folder, window_size=input_length, stride=30).generator()

#%%

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

def print_acc_while_basecalling(assembled):
    try:
        # this crashes if no match found
        besthit = next(aligner.map(assembled))
        cigacc = 1-(besthit.NM/besthit.blen)
        result_dict.append({
            'read_id':filename,
            'ctg': besthit.ctg,
            'r_st': besthit.r_st,
            'r_en': besthit.r_en,
            'NM': besthit.NM,
            'blen': besthit.blen,
            'cig': analyse_cigar(besthit.cigar_str),
            'cigacc': cigacc
        })
        print(style.GREEN(f"{modelname} ({cigacc*100:.2f})..."), end="")
    except:
        result_dict.append({
            'read_id':filename,
            'ctg': 0,
            'r_st': 0,
            'r_en': 0,
            'NM': 0,
            'blen': 0,
            'cig': 0,
            'cigacc': 0
        })
        print(style.RED(f"{modelname}..."), end="")
    with open(json_write_file, 'w') as jsonfile:
        json.dump(result_dict, jsonfile)


for filename, dac in readGenerator:
    prediction, logs = chiron(dac, beam_width=1) # beam_width=1 -> greedy
    assembled = assemble(prediction, window=7)
    with open(output_file, 'a') as f:
        f.write(f">{filename}\n")
        f.write(f"{assembled}\n")
    print_acc_while_basecalling(assembled)


# %%
