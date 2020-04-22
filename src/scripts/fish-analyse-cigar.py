# %%
from utils.assembler import assemble, assemble_and_output_labelled
from utils.cigar_vizualiser import get_comparison, output_comparison, print_comparison, _get_reference
from utils.Other import set_gpu_growth
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.DataPrepper import DataPrepper
from utils.AttentionDataGenerator import AttentionDataGenerator

import os
import sys
import json
import mappy as mp
sys.path.insert(0, './src')

set_gpu_growth()

# y_pred = []
# with open(f"./trained_models/predictions.json", "r") as f:
#     y_pred = json.load(f)

# assembly = assemble(y_pred)
# y_pred, y_true = get_comparison(assembly)
# print(y_pred)
# print(y_true)

# raise Exception('done')

# %%
READS = 10
BATCH_SIZE = 32
TRASHOLD = 0.8

models = [{
    'name': 'fishnchips_256_0CNN_8H_4B',
    'params': {
        'cnn': 0,
        'blocks': 4,
        'd_model': 256,
        'heads': 8
    }
},
    {
    'name': 'fishnchips_256_0CNN_8H_2B',
    'params': {
        'cnn': 0,
        'blocks': 2,
        'd_model': 256,
        'heads': 8
    }
},
    {
    'name': 'fishnchips_256_0CNN_16H_4B',
    'params': {
        'cnn': 0,
        'blocks': 4,
        'd_model': 256,
        'heads': 16
    }},

]

def pretty_print_progress(current_begin, current_end, total):
    progstr = "["
    for i in range(0, total, total//50):
        if i>=current_begin and i<current_end:
            progstr += "x"
        else:
            progstr += "-"
    progstr += "]"
    return progstr

def get_cig_acc(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen) 
    except:
        return 0

outputs = []
for el in models:
    model_name = el['name']
    model_params = el['params']
    model_save_filename = f"./trained_models/{model_name}"

    model = FishNChips(
        num_cnn_blocks=model_params['cnn'],
        max_pool_layer_idx=3,
        num_layers=model_params['blocks'],
        d_model=model_params['d_model'],
        output_dim=7,  # PAD + ATCG + START + STOP
        num_heads=model_params['heads'],
        dff=model_params['d_model'] * 2,
        pe_encoder_max_length=300,
        pe_decoder_max_length=100,
        rate=0.1)

    build(model)
    model.load_weights(f"{model_save_filename}.h5")

    read_ids = DataPrepper(validation_split=0.1,
                           test_split=0.1).get_train_read_ids()
    generator = AttentionDataGenerator(read_ids, BATCH_SIZE, 30, 300, 100)
    aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

    for read in range(READS):
        try:
            x_windows, y_windows, ref, raw, read_id = next(generator.get_window_batch(label_as_bases=True))
            nr_windows = len(x_windows)

            assert nr_windows == len(y_windows)

            y_pred = []
            for b in range(0,nr_windows,BATCH_SIZE):
                x_batch = x_windows[b:b+BATCH_SIZE]
                print(f"{read:02d}/{READS:02d} Predicting windows {pretty_print_progress(b, b+len(x_batch), nr_windows)} {b:04d}-{b+len(x_batch):04d}/{nr_windows:04d}", end="\r")

                y_batch_true = y_windows[b:b+BATCH_SIZE]
                y_batch_pred, _ = evaluate_batch(x_batch, model, len(x_batch), as_bases=True)
                y_pred.extend(y_batch_pred)

            assembly = assemble(y_pred)
            acc = get_cig_acc(aligner, assembly)

            if acc > TRASHOLD:
                dna_pred, dna_true = get_comparison(assembly)
                outputs.append({
                    'name':model_name,
                    'dna_pred':dna_pred,
                    'dna_true':dna_true,
                    'acc':acc
                })

            print(f"{read:02d}/{READS} Done read... cigacc {acc}"+" "*50) # 50 blanks to overwrite the previous print    
            with open(f'./temps/cigar_analysis.json', 'w') as jsonfile:
                json.dump(outputs, jsonfile)     
        except Exception as e:
            print(e)
