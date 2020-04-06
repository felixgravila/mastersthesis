# %%
from utils.Other import set_gpu_growth, analyse_cigar
from utils.DataPrepper import DataPrepper
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.assembler import assemble_and_output

import sys
import json
import mappy as mp

sys.path.insert(0, './src')

set_gpu_growth()

# %%
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 5
MAXPOOL_BLOCK_IDX = 3
D_MODEL = 256
DFF = 512
NUM_HEADS = 8
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATR = 0.1
STRIDE = 30

READS = 2
BATCH_SIZE = 32
AS_BASE_STRING = True


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
    rate=DROPOUT_RATR)

build(fish)
fish.load_weights("./fish_weights_256.h5")

read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

result_dict = []
for i in range(READS):
    x_windows, y_windows, ref, raw, read_id = next(generator.get_window_batch(label_as_bases=AS_BASE_STRING))
    assert len(x_windows) == len(y_windows)
    print(f"Loaded {len(x_windows)} windows (stride: {STRIDE}). Predicting with batch size: {BATCH_SIZE}")

    y_pred = []
    for i in range(0,len(x_windows),BATCH_SIZE):
        x_batch = x_windows[i:i+BATCH_SIZE]
        print(f"Predicting windows {i}-{i+len(x_batch)}")

        y_batch_true = y_windows[i:i+BATCH_SIZE]
        y_batch_pred, _ = evaluate_batch(x_batch, fish, BATCH_SIZE, as_bases=AS_BASE_STRING)
        y_pred.extend(y_batch_pred)
        print()

    assembly = assemble_and_output(f"./assembly_{read_id}.txt", y_pred)
    result = get_cig_result(aligner, assembly)
    result_dict.append(result)
    with open('fish_assembly_evaluation.json', 'w') as jsonfile:
        json.dump(result_dict, jsonfile)
