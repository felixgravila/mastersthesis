import sys
sys.path.insert(0,'./src')

import json
from matplotlib import pyplot as plt
import numpy as np

from utils.Other import get_valid_model_filename
from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.assembler import assemble_and_output

def load_json(model_name):
    with open('miro/eval_output.json') as f:
        data = json.load(f)
        return data[model_name], data['read_ids']

def get_low_accuracy_read_ids(trashold, data, read_ids):
    low_error_read_ids = []
    for i,val in enumerate(data):
        if(val['cigacc'] < trashold):
            low_error_read_ids.append(read_ids[i])
            print(f"low acc for read id {read_ids[i]}, accuracy: {val['cigacc']}")
    print(f"Total low error reads: {len(low_error_read_ids)}")
    return low_error_read_ids

def load_model(model_name, input_length):
    file = get_valid_model_filename(model_name)
    chiron = ChironBuilder(input_length)\
                .with_batch_normalization()\
                .with_rnn_padding(5)\
                .with_maxpool(3)\
                .build()
    chiron.model.load_weights(file)
    return chiron

INPUT_LENGTH = 300
MODEL_NAME = 'chiron-bn-pad5-maxpool3'
TRASHOLD = 0.7

WINDOW_STRIDE = 20
WINDOW_SIZE = INPUT_LENGTH  

data, all_read_ids = load_json(MODEL_NAME)
read_ids = get_low_accuracy_read_ids(TRASHOLD, data, all_read_ids)

generator = DataGenerator(read_ids, batch_size=None, input_length=INPUT_LENGTH, stride=WINDOW_STRIDE, reads_count=None, rnn_pad_size=None, use_maxpool=None)
chiron = load_model(MODEL_NAME, INPUT_LENGTH)


try:
    while True:
        test_x, reference, _, read_id = next(generator.get_evaluate_batch())
        predictions = chiron.predict(test_x, batchsize=10)
        _ = assemble_and_output(f"miro/error_reads_assembled/{read_id}.txt", predictions)
except: 
    print("Done.")     

    
