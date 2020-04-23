# %%
from utils.Other import set_gpu_growth, analyse_cigar
from utils.DataPrepper import DataPrepper
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.assembler import assemble
from utils.cigar_vizualiser import get_comparison, output_comparison, print_comparison

import os
import sys
import json
import mappy as mp

sys.path.insert(0, './src')

set_gpu_growth()

# %%
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 0
MAXPOOL_BLOCK_IDX = 3
D_MODEL = 256
DFF = 2*D_MODEL
NUM_HEADS = 8
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATE = 0.1
STRIDE = 30

READS = 10
BATCH_SIZE = 64
AS_BASE_STRING = True

MODEL_SAVE_FILENAME = f"./trained_models/fishnchips_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H_{ATTENTION_BLOCKS}B"

result_dict = []
if os.path.isfile(f"{MODEL_SAVE_FILENAME}.json"):
  answer = input("This model exists, do you want to append to existing analysis [Y/n]?:")
  if answer not in "Nn" or answer == "":
    with open(f"{MODEL_SAVE_FILENAME}.json", "r") as f:
        result_dict = json.load(f)


# on gtx 1080
# 32: 0.085 -> 0.0026
# 50: 0.11 -> 0.0022
# 64: 0.15 -> 0.0023
# 96: 0.2 -> 0.0020

def get_cig_result(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return {
                'read_id':read_id,
                'ctg': besthit.ctg,
                'r_st': besthit.r_st,
                'r_en': besthit.r_en,
                'NM': besthit.NM,
                'blen': besthit.blen,
                'cig': analyse_cigar(besthit.cigar_str),
                'cigacc': 1-(besthit.NM/besthit.blen)
            }    
    except:
        return {
            'read_id':read_id,
            'ctg': 0,
            'r_st': 0,
            'r_en': 0,
            'NM': 0,
            'blen': 0,
            'cig': 0,
            'cigacc': 0
        }

def pretty_print_progress(current_begin, current_end, total):
    progstr = "["
    for i in range(0, total, total//50):
        if i>=current_begin and i<current_end:
            progstr += "x"
        else:
            progstr += "-"
    progstr += "]"
    return progstr

fish = FishNChips(
    num_cnn_blocks=CNN_BLOCKS,
    max_pool_layer_idx=MAXPOOL_BLOCK_IDX,
    num_layers=ATTENTION_BLOCKS,
    d_model=D_MODEL,
    output_dim=1 + 4 + 1 + 1,  # PAD + ATCG + START + STOP
    num_heads=NUM_HEADS,
    dff=DFF,
    pe_encoder_max_length=ENCODER_MAX_LENGTH,
    pe_decoder_max_length=DECODER_MAX_LENGTH,
    rate=DROPOUT_RATE)

build(fish)
fish.load_weights(f"{MODEL_SAVE_FILENAME}.h5")

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

print(f"stride: {STRIDE} batch size: {BATCH_SIZE}")
for read in range(len(result_dict), READS):
    try:
        x_windows, y_windows, ref, raw, read_id = next(generator.get_window_batch(label_as_bases=AS_BASE_STRING))
        nr_windows = len(x_windows)

        assert nr_windows == len(y_windows)

        y_pred = []
        for b in range(0,nr_windows,BATCH_SIZE):
            x_batch = x_windows[b:b+BATCH_SIZE]
            print(f"{read:02d}/{READS:02d} Predicting windows {pretty_print_progress(b, b+len(x_batch), nr_windows)} {b:04d}-{b+len(x_batch):04d}/{nr_windows:04d}", end="\r")

            y_batch_true = y_windows[b:b+BATCH_SIZE]
            y_batch_pred, _ = evaluate_batch(x_batch, fish, len(x_batch), as_bases=AS_BASE_STRING)
            y_pred.extend(y_batch_pred)

        assembly = assemble(y_pred)

        result = get_cig_result(aligner, assembly)
        result_dict.append(result)
        print(f"{read:02d}/{READS} Done read... cigacc {result['cigacc']}"+" "*50) # 50 blanks to overwrite the previous print
        with open(f'{MODEL_SAVE_FILENAME}.json', 'w') as jsonfile:
            json.dump(result_dict, jsonfile)
    except Exception as e:
        print(e)
