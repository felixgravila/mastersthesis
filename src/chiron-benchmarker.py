#%%

import editdistance
import mappy as mp
import matplotlib.pyplot as plt
import numpy as np

from models.ChironBuilder import ChironBuilder
from utils.assembler import assemble
from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.Other import analyse_cigar, labelBaseMap, set_gpu_growth

set_gpu_growth()
aligner = mp.Aligner("../useful_files/zymo-ref-uniq_2019-03-15.fa")

models = [
    'outputs/chiron-bn-pad5/2020-03-03_21:24:40/checkpoints/00377_dis421.h5',
    'outputs/chiron-bn-pad5-maxpool3/2020-03-04_09:35:31/checkpoints/00569_dis245.h5',
    'outputs/chiron-pad5-maxpool3/2020-03-04_17:44:03/checkpoints/00927_dis193.h5',
    'outputs/chiron-bn-pad5-dropout-maxpool3/2020-03-05_08:48:58/checkpoints/01924_dis588.h5'
]

input_length = 300

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=None, input_length=input_length, stride=20, reads_count=None, rnn_pad_size=None, use_maxpool=None).get_evaluate_batch()

cb = ChironBuilder(input_length)\
        .with_batch_normalization()\
        .with_rnn_padding(5)\
        .with_dropout()\
        .with_maxpool(3)\
        .build()


cb.model.load_weights(models[3])

results = []
for i in range(50):
    X, ref, raw = next(generator)
    print(f"{i:02d}: Predicting {len(X)} windows... ", end="")
    pred = cb.predict(X)
    assembled = assemble(pred, window=7)
    print(f"Assembled length: {len(assembled)}, ref length {len(ref)}... ", end="")

    besthit = next(aligner.map(assembled))
    cigacc = 1-(besthit.NM/besthit.blen)
    results.append((cigacc, assembled, raw, ref))
    print(f"cigacc {cigacc:.3f}")

    np.save("bn-pad5-maxpool3-e569-dis245", np.array(results))
    # for hit in aligner.map(assembled):
    #     print("{}\t{}\t{}\t{}\t{}\t{}".format(hit.ctg, hit.r_st, hit.r_en, hit.NM, hit.blen, analyse_cigar(hit.cigar_str)))
    #     # cig = analyse_cigar(hit.cigar_str)
    #     # print(cig)

accs = [x[0] for x in results]
print(accs)
print(f"mean acc: {np.mean(accs)}")


# %%

result_chiron_pad5_maxpool3 = [0.947877358490566, 0.9298245614035088, 0.9279199110122358, 0.9231992728925245, 0.9054116558741906, 0.8613089937666963, 0.967391304347826, 0.9541860465116279, 0.9406919275123559, 0.9722814498933902, 0.8935544263171971, 0.6998491704374057, 0.9513452914798206, 0.947282861124013, 0.9165716890813768, 0.9805395842547545, 0.9645454545454546, 0.928268156424581, 0.8990528414755733, 0.8559556786703602, 0.9820875718708536, 0.9726605912424984, 0.763847144697295, 0.9541713014460511, 0.87738670347366, 0.9421875, 0.9493760301389216, 0.9615651771243343, 0.8331140350877193, 0.9187027987561084, 0.9122417240613196, 0.9735508044963632, 0.970957249070632, 0.9295085612630642, 0.9196774193548387, 0.9831157136425034, 0.9559306141584623, 0.9581458145814581, 0.9563789868667918, 0.8655974700700249, 0.8213592233009709, 0.9658289241622575, 0.9574045464577357, 0.9675915649278579, 0.8997326203208557, 0.9017568192325474, 0.9037189139858545, 0.9571361281205841, 0.9411243913235945, 0.9517960602549247]
