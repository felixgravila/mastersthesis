#%%

import os
import re

from models.ChironBuilder import chiron_for_file
from utils.RawReadGenerator import RawReadGenerator
from utils.assembler import assemble
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()

# model = 'outputs/chiron-512CNN-512LSTM-pad5-maxpool3/2020-04-21_17:32:55/checkpoints/00464_dis247.h5'
model = 'outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5'
in_folder = '../somedata/singlefast5/'
output_file = 'chiron_output.fa'


input_length = 300

readGeneratorObj = RawReadGenerator(in_folder, window_size=input_length, stride=30)
readGenerator = readGeneratorObj.generator()

#%%

modelname, chiron = chiron_for_file(input_length, model)
i = 0
for filename, dac in readGenerator:
    i+=1
    print(f"{i:05d}/{readGeneratorObj.len}", end="\r")
    prediction, logs = chiron(dac, beam_width=1) # beam_width=1 -> greedy
    assembled = assemble(prediction, window=7)
    with open(output_file, 'a') as f:
        f.write(f"@{filename}\n")
        f.write(f"{assembled}\n")


# %%
