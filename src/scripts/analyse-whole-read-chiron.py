import sys
import re
import mappy as mp
import matplotlib.pyplot as plt
import json
sys.path.insert(0, './../src')

from utils.assembler import assemble_and_output,assemble
from models.ChironBuilder import ChironBuilder
from utils.Other import set_gpu_growth
from utils.RawReadGenerator import RawReadGenerator
set_gpu_growth()

INPUT_LENGTH = 300

def make_chiron_for_file(file):
    description = "outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5".split("/")[
        1]
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
    readGenerator = RawReadGenerator(
        "../somedata/singlefast5/", window_size=INPUT_LENGTH, stride=30).generator_with_raw()
    modelname, chiron = make_chiron_for_file(model)

    outputs = []
    count = 0
    print("Starting...")
    for filename, x, dac_raw in readGenerator:
        count += 1

        if out_img=="True":
            plt.figure(figsize=(30,5))
            plt.plot(dac_raw[:3000], 'r')
            plt.title(filename)
            plt.savefig(f"./temps/{modelname}_{filename}.png")
            plt.close()

        print(f"Predicting read num. {count}.")
        y_pred, _ = chiron(x, beam_width=1)
        print(f"Assembling read num. {count}.")
        if out_assembly=="True":
            dna_pred = assemble_and_output(f"./temps/{filename}.txt", y_pred)
        else:
            dna_pred = assemble(y_pred)

        acc = get_cig_acc(aligner, dna_pred)

        outputs.append({
            'name': f"{modelname}_{filename}",
            'dna_pred': dna_pred,
            'acc': acc
        })
        if output_file == None:
            output_file = f"{modelname}.json"
        with open(f"./temps/{output_file}", 'w') as jsonfile:
            json.dump(outputs, jsonfile)  

if __name__ == "__main__":
    output_file = sys.argv[1]
    out_img = sys.argv[2]
    out_assembly = sys.argv[3]
    run(output_file, out_img, out_assembly )
