
import sys
sys.path.insert(0,'./src')

import mappy as mp
import json

from models.ChironBuilder import ChironBuilder
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.assembler import assemble



def load_model():
    file = get_model_path()
    chiron = ChironBuilder(INPUT_LENGTH)\
                .with_batch_normalization()\
                .with_rnn_padding(5)\
                .with_maxpool(3)\
                .build()
    chiron.model.load_weights(file)
    return chiron

def get_model_path():
    model_path = 'outputs/chiron-bn-pad5-maxpool3/2020-03-04_09_35_31/checkpoints/00787_dis234.h5'
    local_path = f"/mnt/c/Users/mirop/OneDrive/Documents/Programming/Data/bdm"
    return f"{local_path}/{model_path}"

def get_alignment_result(sequence, aligner):
    try:
        besthit = next(aligner.map(sequence))
        result = {'ctg': besthit.ctg,
                'r_st': besthit.r_st,
                'r_en': besthit.r_en,
                'NM': besthit.NM,
                'blen': besthit.blen,
                'cig': analyse_cigar(besthit.cigar_str),
                'cigacc': 1-(besthit.NM/besthit.blen)}
        return result
    except Exception as e:
        print('Unable to align sequence.')
        print(f"Exception: {e}")
        return {'ctg': 0,
                'r_st': 0,
                'r_en': 0,
                'NM': 0,
                'blen': 0,
                'cig': 0,
                'cigacc': 0}

def write_to_file(path, output):
    with open(path, 'w') as jsonfile:
            json.dump(output, jsonfile)

INPUT_LENGTH = 300
NO_TEST_READS = 5
OUTPUT_FILE = 'eval_output.json'

aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")
data_preper = DataPrepper(validation_split=0.0, test_split=1.0)
read_ids = data_preper.get_test_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=INPUT_LENGTH, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

chiron = load_model()

alignment_accuracies = []
for i in range(NO_TEST_READS):
    print(f"Evaluating {i}/{NO_TEST_READS}")
    test_x, reference, _, read_id = next(generator)
    print(f"Read ID: {read_id}")
    print("Predicting...")
    predictions = chiron.predict(test_x, batchsize=10)
    print("Assembling...")
    assembled = assemble(predictions, window=7)
    print("Aligning...") 
    alignment_result = get_alignment_result(assembled, aligner)
    output = {
        'id':read_id,
        'acc':alignment_result['cigacc']   
    }
    print("Saving results...")
    write_to_file(OUTPUT_FILE, output)




    