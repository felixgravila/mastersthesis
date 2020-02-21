import sys
sys.path.insert(0,'../src/utils')

import numpy as np
from DataPrepper import PrepData
from ChironModel import Chiron
from Utils import get_valid_taiyaki_filename
from assembler import assemble, assemble_from_file

file = np.load("../felix/div_outputs/analysis.npy", allow_pickle=True)

ids = []
for read in file[:]:
    if(read['window']['len'] < 1000):
        ids.append(read["read_idx"])

filename = get_valid_taiyaki_filename()
prepData = PrepData(filename, RNN_LEN=300)
chiron = Chiron(max_label_length=prepData.get_max_label_len())
chiron.model.load_weights("../trained_models/Chiron_v1_e538_dis478.h5")

ids = [ids[0]]
for j,index in enumerate(ids):
    prepData.pos = index - 1
    traingen = next(prepData.train_gen())
    testgen = next(prepData.test_gen())

    a_X = traingen[0]['the_input']
    b_X = testgen[0]


    batchsize = 200
    results_a = []
    results_b = []

    print(f"Index {j} / {len(ids)}")
    for i in range(0, len(a_X), batchsize):

        #DataPrepper.get_window_reference(index, i, )

        #results_a.extend(chiron.predict(a_X[i:i+batchsize]))

        raw = a_X[i:i+batchsize]

        reference = []
        points = []
        for wid,window in enumerate(raw):
            window_padding = 5
            start_index = (i + wid) * window_padding
            lbl, p = prepData.get_window_reference(index, start_index, window_size = 300)
            reference.append(lbl)
            points.append(p)

        pred = chiron.predict(raw)
        zipped = list(zip(raw, pred, reference, points))
        results_a.extend(zipped)
        
        print(".", end="")

    for i in range(0, len(b_X), batchsize):
        #results_b.extend(chiron.predict(b_X[i:i+batchsize]))

        raw = b_X[i:i+batchsize]
        pred = chiron.predict(raw)
        zipped = list(zip(raw, pred))
        results_b.extend(zipped)

        print(".", end="")

    print("assembling")
    results = results_a + results_b
    
    np.save(f"raw_analysis2_{index}", np.array(results))