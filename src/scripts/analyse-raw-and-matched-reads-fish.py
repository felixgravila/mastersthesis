import sys
import json
import mappy as mp
sys.path.insert(0, './../src')

from models.FishNChips import FishNChips
from utils.Other import set_gpu_growth
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.DataPrepper import DataPrepper
from utils.DataGeneratorCombined import DataGeneratorCombined
from utils.assembler import assemble
set_gpu_growth()

MODEL_NAME = "fishnchips_250_5CNN_25H_4B"
MODEL_CONFIG = "train-fishnchips-config-25H-5CNN.json"
MODEL_WEIGHTS = "fishnchips_250_5CNN_25H_4B.h5"

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
        rate=params['DROPOUT_RATE'])

def get_cig_acc(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen) 
    except:
        return 0

def run(output_file):
    model_params_file = f"./configs/{MODEL_CONFIG}"
    model_params = load_model(model_params_file)
    model = make_model(model_params)
    
    build(model)
    model.load_weights(f"./trained_models/{MODEL_WEIGHTS}")

    data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
    read_ids = data_preper.get_all_read_ids()

    readGeneratorObj = DataGeneratorCombined("../somedata/singlefast5/", window_size=model_params['ENCODER_MAX_LENGTH'], stride=model_params['STRIDE'])
    generator = readGeneratorObj.generator(available_read_ids=read_ids)
    aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

    outputs = []
    outputs_raw = []
    for i,(read_id, x_raw, x, _) in enumerate(generator):
        if x is None:
            continue

        y_pred = []
        for b in range(0,len(x),model_params['BATCH_SIZE']):
            x_batch = x[b:b+model_params['BATCH_SIZE']]            
            print(f"{i:02d}/?, Predicting windows {pretty_print_progress(b, b+len(x_batch), len(x))} {b:04d}-{b+len(x_batch):04d}/{len(x):04d}", end="\r")
            y_batch_pred, _ = evaluate_batch(x_batch, model, len(x_batch), as_bases=True)
            y_pred.extend(y_batch_pred)

        y_raw_pred = []
        for b in range(0,len(x_raw),model_params['BATCH_SIZE']):
            x_raw_batch = x_raw[b:b+model_params['BATCH_SIZE']]            
            print(f"{i:02d}/?, Predicting raw windows {pretty_print_progress(b, b+len(x_raw_batch), len(x_raw))} {b:04d}-{b+len(x_raw_batch):04d}/{len(x_raw):04d}", end="\r")
            y_raw_batch_pred, _ = evaluate_batch(x_raw_batch, model, len(x_raw_batch), as_bases=True)
            y_raw_pred.extend(y_raw_batch_pred)
        
        dna_pred = assemble(y_pred)
        dna_pred_raw = assemble(y_raw_pred)

        acc = get_cig_acc(aligner, dna_pred)
        acc_raw = get_cig_acc(aligner, dna_pred_raw)

        outputs.append({
            'name': f"{MODEL_NAME}_{read_id}",
            'dna_pred': dna_pred,
            'acc': acc
        })

        outputs_raw.append({
            'name': f"{MODEL_NAME}_{read_id}_raw",
            'dna_pred': dna_pred_raw,
            'acc': acc_raw
        })

        with open(f"./temps/{output_file}.json", 'w') as jsonfile:
            json.dump(outputs, jsonfile)  

        with open(f"./temps/{output_file}_raw.json", 'w') as jsonfile:
            json.dump(outputs_raw, jsonfile)  

if __name__ == "__main__":
    output_file = sys.argv[1]
    run(output_file)
