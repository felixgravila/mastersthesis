import sys
import re
import matplotlib.pyplot as plt
import json
from collections import deque
import mappy as mp
sys.path.insert(0, './../src')

from utils.assembler import assemble_and_output,assemble
from models.ChironBuilder import ChironBuilder
from utils.Other import set_gpu_growth
from utils.DataGeneratorCombined import DataGeneratorCombined
from utils.DataPrepper import DataPrepper
from utils.DataLoader import DataLoader

set_gpu_growth()

INPUT_LENGTH = 300

def make_chiron_for_file(file):
    description = "outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5".split("/")[1]
    if "CNN" in description:
        cnn = int(re.findall(r"\d+CNN", description)[0][:-3])
        lstm = int(re.findall(r"\d+LSTM", description)[0][:-4])
    else:
        cnn = 256
        lstm = 200
    cb = ChironBuilder(INPUT_LENGTH, cnn_filters=cnn, lstm_units=lstm)
    if "bn" in description:
        cb = cb.with_batch_normalization()
    if "pad5" in description:
        cb = cb.with_rnn_padding(5)
    if "maxpool3" in description:
        cb = cb.with_maxpool(3)
    chiron = cb.build()
    chiron.load_weights(file)
    return (chiron.name, chiron.predict_beam_search)


def get_cig_acc(aligner, assembly):
    try:
        besthit = next(aligner.map(assembly))
        return 1-(besthit.NM/besthit.blen)
    except:
        return 0

def run(output_file=None, out_img=False, out_assembly=False):
    aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")
    model = "./trained_models/00377_dis421.h5"
    
    data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
    read_ids = data_preper.get_all_read_ids()
    
    readGeneratorObj = DataGeneratorCombined("../somedata/singlefast5/", window_size=INPUT_LENGTH, stride=30)
    generator = readGeneratorObj.generator(available_read_ids=read_ids)
    modelname, chiron = make_chiron_for_file(model)

    outputs = []
    outputs_raw = []
    for i,(read_id, x_raw, x, _) in enumerate(generator):
        
        print(f"Iteration:{i}")

        if i % 10 == 0:
            print(f"Skips:{readGeneratorObj.skip_count}")
            print(f"Matches:{readGeneratorObj.match_count}")

        if x == None:
            continue
        
        y_pred, _ = chiron(x, beam_width=1)
        y_pred_raw, _ = chiron(x_raw, beam_width=1)

        dna_pred = assemble_and_output(f"./temps/{read_id}.txt", y_pred)
        dna_pred_raw = assemble_and_output(f"./temps/{read_id}_raw.txt", y_pred_raw)

        acc = get_cig_acc(aligner, dna_pred)
        acc_raw = get_cig_acc(aligner, dna_pred_raw)

        outputs.append({
            'name': f"{modelname}_{read_id}",
            'dna_pred': dna_pred,
            'acc': acc
        })

        outputs_raw.append({
            'name': f"{modelname}_{read_id}_raw",
            'dna_pred': dna_pred_raw,
            'acc': acc_raw
        })

        with open(f"./temps/only_good.json", 'w') as jsonfile:
            json.dump(outputs, jsonfile)  

        with open(f"./temps/only_good_raw.json", 'w') as jsonfile:
            json.dump(outputs_raw, jsonfile)  

if __name__ == "__main__":
    run()