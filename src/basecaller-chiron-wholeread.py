#%%

import os
import re

from models.ChironBuilder import chiron_for_file
from utils.RawReadGenerator import RawReadGenerator
from utils.assembler import assemble
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()

# model = 'outputs/chiron-512CNN-512LSTM-pad5-maxpool3/2020-04-21_17:32:55/checkpoints/00464_dis247.h5'
model = 'outputs/chiron-pad5-maxpool3/2020-03-04_17:44:03/checkpoints/00927_dis193.h5'
in_folder = '../somedata/singlefast5/'
output_file = 'wholeread_chiron_output.fa'


readGeneratorObj = RawReadGenerator(in_folder, window_size=None, stride=30)
readGenerator = readGeneratorObj.generator_whole_read()

#%%

modelname, chiron = chiron_for_file(300, model, with_None_input=True, use_our_predict=True)
i = 0
for filename, dac in readGenerator:
    i+=1
    print(f"{i:05d}/{readGeneratorObj.len}", end="\r")
    prediction, logs = chiron(dac)
    with open(output_file, 'a') as f:
        f.write(f"@{filename}\n")
        f.write(f"{prediction[0]}\n")


# %%
