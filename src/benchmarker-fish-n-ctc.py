import sys, os
import json
import mappy as mp
sys.path.insert(0, './src')

from utils.Other import set_gpu_growth, analyse_cigar
from utils.DataPrepper import DataPrepper
from models.FishNCTSea import FishNCTSea
from utils.DataGenerator import DataGenerator
from utils.assembler import assemble,assemble_and_output
set_gpu_growth()

"""
 Model parameters
"""
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 0
MAXPOOL_IDX = 3
D_MODEL = 512
DFF = 2*D_MODEL
NUM_HEADS = 8
DROPOUT_RATE = 0.1
STRIDE = 30
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100

MODEL_SAVE_FILENAME = f"./trained_models/fishnctsea_{D_MODEL}_{CNN_BLOCKS}CNN_{NUM_HEADS}H_{ATTENTION_BLOCKS}B"

if not os.path.isfile(f"{MODEL_SAVE_FILENAME}.h5"):
    print("File doesn't exist for parameters.")
    sys.exit(1)

result_dict = []
if os.path.isfile(f"{MODEL_SAVE_FILENAME}.json"):
  answer = input("This model exists, do you want to append to existing analysis [Y/n]?:")
  if answer not in "Nn" or answer == "":
    with open(f"{MODEL_SAVE_FILENAME}.json", "r") as f:
        result_dict = json.load(f)


"""
 Script parameters
"""
READS = 2
BATCH_SIZE = 96
OUTPUT_ASSEMEBLY = False

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

fish = FishNCTSea(
  num_cnn_blocks=CNN_BLOCKS, 
  max_pool_layer_idx=MAXPOOL_IDX, 
  num_layers=ATTENTION_BLOCKS, 
  d_model=D_MODEL, 
  output_dim= 4 + 1, # ATCG + -
  num_heads=NUM_HEADS, 
  dff=DFF,
  pe_encoder_max_length=ENCODER_MAX_LENGTH,
  rate=DROPOUT_RATE)

fish.build(input_shape=(None, ENCODER_MAX_LENGTH, 1))
fish.load_weights(f"{MODEL_SAVE_FILENAME}.h5")

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_test_read_ids()
generator = DataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, 5, False)
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

result_dict = []
for i in range(READS):
    x_windows, y_windows, ref, raw, read_id = next(generator.get_evaluate_batch_with_labels())
    nr_windows = len(x_windows)

    assert nr_windows == len(y_windows)

    y_pred = []
    for j in range(0,nr_windows,BATCH_SIZE):
        x_batch = x_windows[j:j+BATCH_SIZE]
        print(f"{i:02d}/{READS:02d} Predicting windows {pretty_print_progress(j, j+len(x_batch), nr_windows)} {j:04d}-{j+len(x_batch):04d}/{nr_windows:04d}", end="\r")

        y_batch_true = y_windows[j:j+BATCH_SIZE]
        y_batch_pred = fish.predict(x_batch)
        y_pred.extend(y_batch_pred)
    
    print("Assembling...")
    if OUTPUT_ASSEMEBLY:
        assembly = assemble_and_output(f"./trained_models/assembly{i}_{read_id}.txt", y_pred)
    else:
        assembly = assemble(y_pred)

    result = get_cig_result(aligner, assembly)
    result_dict.append(result)
    print(f"{i:02d}/{READS:02d} Done read... cigacc {result['cigacc']:.2f}"+" "*100) # blanks to overwrite the previous print
    with open(f'{MODEL_SAVE_FILENAME}.json', 'w') as jsonfile:
        json.dump(result_dict, jsonfile)

