#%%


import sys
sys.path.insert(0,'../src/utils')

import datetime
import os
import numpy as np
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


prepData = PrepData(filename, RNN_LEN=300)

read_gen = prepData.get_whole_read()

#%%

for idx in range(1):
    print(idx)

    raw,ref = next(read_gen)
    ref = "".join([labelBaseMap[base] for base in ref])
    fraw = np.array(raw).reshape(1,-1,1)

    chiron = Chiron(max_label_length=len(raw))
    chiron.model.load_weights("../trained_models/Chiron_v1_e538_dis478.h5")

    prediction = chiron.predict(fraw)[0]
    print(f"Ref len: {len(ref)}, pred len: {len(prediction)}. Edit distance {1-editdistance.eval(ref, prediction)/len(ref)}")


# %%

raw,ref = next(read_gen)
ref = "".join([labelBaseMap[base] for base in ref])
fraw = np.array(raw).reshape(1,-1,1)

chiron = Chiron(max_label_length=len(raw))
chiron.model.load_weights("../trained_models/Chiron_v1_e538_dis478.h5")

prediction = chiron.testfunc(fraw)[0]

# %%
plt.figure(figsize=(500,10))
plt.plot(raw, "k")

# %%
