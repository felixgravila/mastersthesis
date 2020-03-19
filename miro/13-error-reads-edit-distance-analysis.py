import sys
sys.path.insert(0,'./src')

import json
from matplotlib import pyplot as plt
import numpy as np
import os

from utils.DataGenerator import DataGenerator
from utils.Other import labelBaseMap

def load_json():
    with open('miro/error_reads_analysis_full3.json') as f:
        return json.load(f)

INPUT_LENGTH = 300
WINDOW_STRIDE = 20

data = load_json()
for read in data:#[data[0]]:
    eds = read['edit_distances']
    y_pred_lst = read['y_pred']
    read_id = read['read_id']
   
    directory = f"{os.getcwd()}/miro/edit_distance_analysis4"
    if not os.path.exists(directory):
        os.makedirs(directory)

    plt.figure(figsize=(30,5))
    plt.plot(eds, 'r')
    plt.title(read_id)
    plt.savefig(f"{directory}/{read_id}.png")
    plt.close()

    generator = DataGenerator([read_id], batch_size=None, input_length=INPUT_LENGTH, stride=WINDOW_STRIDE, reads_count=None, rnn_pad_size=None, use_maxpool=None)
    test_x, test_y_raw, reference, _, _ = next(generator.get_evaluate_batch_with_labels())
    test_y = np.array(["".join([labelBaseMap[base] for base in y]) for y in test_y_raw])

    for idx,edit_distance in enumerate(eds):    
        if(edit_distance > 0.6):
            x = test_x[idx]
            y_pred = y_pred_lst[idx]
            y_true = test_y[idx]

            if not os.path.exists(f"{directory}/{read_id}"):
                os.makedirs(f"{directory}/{read_id}")

            plt.figure(figsize=(30,5))
            plt.plot(x)
            # plt.ylim(top=10)
            # plt.ylim(bottom=-10)
            plt.suptitle(f"true:{y_true}\npred:{y_pred}\ned:{edit_distance}", horizontalalignment='left', fontsize =15)
            plt.savefig(f"{directory}/{read_id}/{idx}.png")
            plt.close()

