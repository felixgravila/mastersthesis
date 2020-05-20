from os import read
import sys
import json
import mappy as mp
sys.path.insert(0, './../src')

from models.FishNChips import FishNChips
from utils.Other import set_gpu_growth
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.DataPrepper import DataPrepper
from utils.DataGeneratorCombined import DataGeneratorCombined
from utils.assembler import assemble_and_output_labelled
from utils.AttentionDataGenerator import AttentionDataGenerator
set_gpu_growth()

TRASHOLD = 0.7
READS_FILENAME = "trained_models/fishnchips62_250_5CNN_25H_4B_6MPK.json"
MODEL_NAME = "fishnchips62_250_5CNN_25H_4B_6MPK"
MODEL_CONFIG = "train-fishnchips-config-25H-5CNN-4B-6MPK.json"
MODEL_WEIGHTS = "fishnchips62_250_5CNN_25H_4B_6MPK.h5"

def pretty_print_progress(current_begin, current_end, total):
    progstr = "["
    for i in range(0, total, total//50):
        if i>=current_begin and i<current_end:
            progstr += "x"
        else:
            progstr += "-"
    progstr += "]"
    return progstr

def load_model(filename):
    with open(filename, 'r') as jsonfile:
        return json.load(jsonfile)

def make_model(params):
    return FishNChips(
        num_cnn_blocks=params['CNN_BLOCKS'],
        max_pool_layer_idx=params['MAXPOOL_IDX'],
        num_layers=params['ATTENTION_BLOCKS'],
        d_model=params['D_MODEL'],
        output_dim=7, 
        num_heads=params['NUM_HEADS'],
        dff=params['DFF'],
        pe_encoder_max_length=params['ENCODER_MAX_LENGTH'],
        pe_decoder_max_length=params['DECODER_MAX_LENGTH'],
        rate=params['DROPOUT_RATE'],
        max_pool_kernel_size=params['MAX_POOL_KERNEL'])

def get_read_ids(filename, trashold):
    with open(filename, 'r') as jsonfile:
        reads = json.load(jsonfile)
    
    read_ids = []
    for read in reads:
        if read['cigacc'] > trashold:
            continue
        read_ids.append(read['read_id'])

    return read_ids
  

def get_cig_acc(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen) 
    except:
        return 0

def append_to_output(output, name, dna_pred, acc):
    output.append({
        'name': name,
        'dna_pred': dna_pred,
        'acc': acc
    })
    return output

def run(output_file):
    model_params_file = f"./configs/{MODEL_CONFIG}"
    model_params = load_model(model_params_file)
    model = make_model(model_params)

    build(model)
    model.load_weights(f"./trained_models/{MODEL_WEIGHTS}")

    filename = "mapped_therest.hdf5"
    bacteria = ["Escherichia", "Salmonella"]

    read_ids = get_read_ids(READS_FILENAME, TRASHOLD)
    generator = AttentionDataGenerator(filename, bacteria, model_params['BATCH_SIZE'], model_params['STRIDE'], model_params['ENCODER_MAX_LENGTH'], model_params['DECODER_MAX_LENGTH'])
    aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

    outputs = []
    print(f"Found {len(read_ids)} bellow {TRASHOLD*100}% accuracy.")
    for i,read_id in enumerate(read_ids):
        try:
            x_windows, y_windows = generator.get_batched_read_id(read_id)

            assert len(x_windows) == len(y_windows)
            nr_windows = len(x_windows)

            y_pred = []
            y_true = []
            for b in range(0,nr_windows,model_params['BATCH_SIZE']):
                x_batch = x_windows[b:b+model_params['BATCH_SIZE']]
                y_batch_true = y_windows[b:b+model_params['BATCH_SIZE']]
                print(f"{i:02d}/{len(read_ids):02d} Predicting windows {pretty_print_progress(b, b+len(x_batch), nr_windows)} {b:04d}-{b+len(x_batch):04d}/{nr_windows:04d}", end="\r")

                y_batch_pred, _ = evaluate_batch(x_batch, model, len(x_batch), as_bases=True)
                y_pred.extend(y_batch_pred)
                y_true.extend(y_batch_true)
            
            dna_pred = assemble_and_output_labelled(f"./trained_models/{read_id}_labelled.txt", y_pred, y_true)
            acc = get_cig_acc(aligner, dna_pred)
            outputs = append_to_output(outputs, f"{MODEL_NAME}_{read_id}", dna_pred, acc)
            
            with open(f"./temps/{output_file}.json", 'w') as jsonfile:
                json.dump(outputs, jsonfile) 
        except Exception as e:
            print(e)
            print(f"Error while processing read id: {read_id}")
            continue
     

if __name__ == "__main__":
    output_file = sys.argv[1]
    run(output_file)
