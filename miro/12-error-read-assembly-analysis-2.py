import sys
sys.path.insert(0,'./src')

import json
from matplotlib import pyplot as plt
import numpy as np
import editdistance

from utils.Other import get_valid_model_filename, labelBaseMap
from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.assembler import assemble_and_output

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

read_ids = [
    '85788b69-1031-42a1-a893-75192260e0e1',
    '433483a6-44b3-4f0b-9043-a6883a0a68ce'
#     '510ceaf8-502b-41df-a1ea-1a92bbfd9122',
#     '015d06fb-2f32-464d-8fda-0232d95129a4',
#     'a7922168-849c-44ac-bb71-5d1d90118178',
#     'db919aab-9716-42ca-8909-3ab85094f153'
]

generator = DataGenerator(read_ids, batch_size=None, input_length=INPUT_LENGTH, stride=WINDOW_STRIDE, reads_count=None, rnn_pad_size=None, use_maxpool=None)
chiron = load_model(MODEL_NAME, INPUT_LENGTH)



dic = []
try:
    while True:
        test_x, test_y_raw, reference, _, read_id = next(generator.get_evaluate_batch_with_labels())
        test_y = np.array(["".join([labelBaseMap[base] for base in y]) for y in test_y_raw])

        pred, _ = chiron.predict(test_x, batchsize=10)

        eds = []
        for (x, y_true, y_pred) in zip(test_x, test_y, pred):
            if(len(y_true) > 0 and len(y_pred) > 0):
                ed = editdistance.eval(y_true, y_pred) / max(len(y_pred),len(y_true))
            elif(len(y_true) == 0 and len(y_pred) == 0):
                ed = 0
            else:
                ed = 1
            
            eds.append(ed)
        dic.append({
            'read_id':read_id,
            'edit_distances':eds,
            'y_pred':pred
        })
        
except: 
    with open('./miro/error_reads_analysis_full3.json', 'w') as jsonfile:
        json.dump(dic, jsonfile)   

print()

    
