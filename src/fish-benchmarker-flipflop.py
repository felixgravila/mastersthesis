import sys
import json
import mappy as mp
sys.path.insert(0, './src')

from models.FishNChips import FishNChips
from utils.Other import set_gpu_growth
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.DataPrepper import DataPrepper
from utils.AttentionFlipflopDataGenerator import AttentionFlipflopDataGenerator
from utils.assembler import assemble
set_gpu_growth()

config_filename = "./src/configs/train-fishnchips-config-25H-5CNN-flipflop.json"

MODEL_NAME = "fishnchips_250_5CNN_25H_4B_flipflop"
MODEL_CONFIG = "./configs/train-fishnchips-config-25H-5CNN-flipflop.json"
MODEL_WEIGHTS = "./trained_models/fishnchips_250_5CNN_25H_4B_flipflop.h5"
READS = 10

def load_model(filename):
    with open(filename, 'r') as jsonfile:
        return json.load(jsonfile)

def make_model(params):
    return FishNChips(
        num_cnn_blocks=params['CNN_BLOCKS'],
        max_pool_layer_idx=params['MAXPOOL_IDX'],
        num_layers=params['ATTENTION_BLOCKS'],
        d_model=params['D_MODEL'],
        output_dim=11, 
        num_heads=params['NUM_HEADS'],
        dff=params['DFF'],
        pe_encoder_max_length=params['ENCODER_MAX_LENGTH'],
        pe_decoder_max_length=params['DECODER_MAX_LENGTH'],
        rate=params['DROPOUT_RATE'])

def get_cig_acc(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen) 
    except:
        return 0

def pretty_print_progress(current_begin, current_end, total):
    progstr = "["
    for i in range(0, total, total//50):
        if i>=current_begin and i<current_end:
            progstr += "x"
        else:
            progstr += "-"
    progstr += "]"
    return progstr

def run(output_file):
    model_params = load_model(MODEL_CONFIG)
    model = make_model(model_params)

    build(model)
    model.load_weights(MODEL_WEIGHTS)

    read_ids = DataPrepper(validation_split=0.1, test_split=0.1).get_train_read_ids()
    generator = AttentionFlipflopDataGenerator(read_ids, model_params['BATCH_SIZE'], model_params['STRIDE'], model_params['ENCODER_MAX_LENGTH'], model_params['DECODER_MAX_LENGTH'])
    aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

    outputs = []
    for read in range(0, READS):
        try:
            x_windows, y_windows, ref, raw, read_id = next(generator.get_window_batch(label_as_bases=True))

            assert len(x_windows) == len(y_windows)
            nr_windows = len(x_windows)

            y_pred = []
            for b in range(0,nr_windows,model_params['BATCH_SIZE']):
                x_batch = x_windows[b:b+model_params['BATCH_SIZE']]
                print(f"{read:02d}/{READS:02d} Predicting windows {pretty_print_progress(b, b+len(x_batch), nr_windows)} {b:04d}-{b+len(x_batch):04d}/{nr_windows:04d}", end="\r")
                
                # y_batch_true = y_windows[b:b+model_params['BATCH_SIZE']]
                y_batch_pred, _ = evaluate_batch(x_batch, model, len(x_batch), as_bases=True)

                y_batch_pred_new = []
                for b_str in y_batch_pred:
                    y_batch_pred_new.append(b_str.upper())
                y_pred.extend(y_batch_pred)

            dna_pred = assemble(y_pred)
            acc = get_cig_acc(aligner, dna_pred)
            outputs.append({
                'name': f"{MODEL_NAME}_{read_id}",
                'dna_pred': dna_pred,
                'acc': acc
            })
            with open(f"./temps/{output_file}.json", 'w') as jsonfile:
                json.dump(outputs, jsonfile)  
        except Exception as e:
            print(e)

if __name__ == "__main__":
    output_file = sys.argv[1]
    run(output_file)




