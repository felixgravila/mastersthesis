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
import time
import datetime

sys.path.insert(0, './src')

set_gpu_growth()

NO_OVERLAP = False

# %%
config_filename = "configs/train-fishnchips-config-skel.json"

if len(sys.argv)>1:
  config_filename = sys.argv[1]
with open(config_filename, "r") as f:
  config = json.load(f)

config['BATCH_SIZE'] = config['BATCH_SIZE'] * 30

READS = 200
AS_BASE_STRING = True

MODEL_SAVE_FILENAME = f"./trained_models/fishnchips62v_{config['D_MODEL']}_{config['CNN_BLOCKS']}CNN_{config['NUM_HEADS']}H_{config['ATTENTION_BLOCKS']}B"
if config['MAX_POOL_KERNEL'] != 2:
    MODEL_SAVE_FILENAME = f"{MODEL_SAVE_FILENAME}_{config['MAX_POOL_KERNEL']}MPK"
if config['ENCODER_MAX_LENGTH'] != 300:
    MODEL_SAVE_FILENAME = f"{MODEL_SAVE_FILENAME}_{config['ENCODER_MAX_LENGTH']}W"

json_filename = f"{MODEL_SAVE_FILENAME}_nooverlap.json" if NO_OVERLAP else f"{MODEL_SAVE_FILENAME}.json"
fasta_filename = f"{MODEL_SAVE_FILENAME}_nooverlap.fa" if NO_OVERLAP else f"{MODEL_SAVE_FILENAME}.fa"

result_dict = []
if os.path.isfile(json_filename):
  answer = input("This model exists, do you want to append to existing analysis [Y/n]?:")
  if answer not in "Nn" or answer == "":
    with open(json_filename, "r") as f:
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
    num_cnn_blocks=config['CNN_BLOCKS'],
    max_pool_layer_idx=config['MAXPOOL_IDX'],
    max_pool_kernel_size=config['MAX_POOL_KERNEL'],
    num_layers=config['ATTENTION_BLOCKS'],
    d_model=config['D_MODEL'],
    output_dim=1 + 4 + 1 + 1,  # PAD + ATCG + START + STOP
    num_heads=config['NUM_HEADS'],
    dff=config['DFF'],
    pe_encoder_max_length=config['ENCODER_MAX_LENGTH'],
    pe_decoder_max_length=config['DECODER_MAX_LENGTH'],
    rate=config['DROPOUT_RATE'])

build(fish)
fish.load_weights(f"{MODEL_SAVE_FILENAME}.h5")

filename = "mapped_therest.hdf5"
bacteria = ["Escherichia", "Salmonella"]
if NO_OVERLAP:
    generator = AttentionDataGenerator(filename, bacteria, config['BATCH_SIZE'], config['ENCODER_MAX_LENGTH'], config['ENCODER_MAX_LENGTH'], config['DECODER_MAX_LENGTH'])
else:
    generator = AttentionDataGenerator(filename, bacteria, config['BATCH_SIZE'], config['STRIDE'], config['ENCODER_MAX_LENGTH'], config['DECODER_MAX_LENGTH'])
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

print(f"stride: {config['STRIDE']} batch size: {config['BATCH_SIZE']}")
for read in range(len(result_dict), READS):
    try:
        x_windows, y_windows, ref, raw, read_id = next(generator.get_window_batch(label_as_bases=AS_BASE_STRING))
        nr_windows = len(x_windows)

        assert nr_windows == len(y_windows)

        start_time = time.time()

        y_pred = []
        for b in range(0,nr_windows,config['BATCH_SIZE']):
            x_batch = x_windows[b:b+config['BATCH_SIZE']]
            print(f"{read:02d}/{READS:02d} Predicting windows {pretty_print_progress(b, b+len(x_batch), nr_windows)} {b:04d}-{b+len(x_batch):04d}/{nr_windows:04d}", end="\r")

            y_batch_true = y_windows[b:b+config['BATCH_SIZE']]
            y_batch_pred, _ = evaluate_batch(x_batch, fish, len(x_batch), as_bases=AS_BASE_STRING)
            y_pred.extend(y_batch_pred)

        if NO_OVERLAP:
            assembly = "".join(y_pred)
        else:
            assembly = assemble(y_pred)

        result = get_cig_result(aligner, assembly)
        result['time'] = time.time() - start_time

        result_dict.append(result)
        print(f"{read:02d}/{READS} Done read... cigacc {result['cigacc']}"+" "*50) # 50 blanks to overwrite the previous print
        with open(json_filename, 'w') as jsonfile:
            json.dump(result_dict, jsonfile)
        with open(fasta_filename, 'a') as f:
            f.write(f"@{read_id};{round(time.time())};{datetime.datetime.now().strftime('%m/%d/%Y, %H:%M:%S')}\n")
            f.write(f"{assembly}\n")
    except Exception as e:
        print(e)
