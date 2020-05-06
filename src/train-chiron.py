#%% 
import sys
import math

#sys.path.insert(0,'./src')

from models.ChironBuilder import ChironBuilder
from models.Callback import SaveCB

from utils.DataGenerator import DataGenerator
from utils.Other import set_gpu_growth

set_gpu_growth()

input_length = 300
rnn_padding = 5
use_maxpool = True

filename = "mapped_therest.hdf5"
train_bacteria = ["Bacillus", "Staphylococcus", "Lactobacillus", "Pseudomonas", "Listeria", "Enterococcus"]
generator = DataGenerator(filename, bacteria=train_bacteria, batch_size=10000, input_length=input_length, stride=30, reads_count=5, rnn_pad_size=rnn_padding, use_maxpool=use_maxpool)

filename = "mapped_therest.hdf5"
test_bacteria = ["Escherichia", "Salmonella"]
val_generator = DataGenerator(filename, bacteria=test_bacteria, batch_size=500, input_length=input_length, stride=150, reads_count=5, rnn_pad_size=rnn_padding, use_maxpool=use_maxpool)

#%%

cb = ChironBuilder(input_length, cnn_filters=512, lstm_units=512)\
        .with_rnn_padding(rnn_padding)
cb = cb.with_maxpool(3) if use_maxpool else cb
chiron=cb.build()


save_cb = SaveCB(chiron, val_generator)\
    .withCheckpoints()\
    .withImageOutput()\
    .withMaxPool()\
    .withPatience(patience=300)


#%%

for epoch in range(2000):
    if chiron.stop_training:
        break
    
    try:
        X,y = next(generator.get_batch())
        chiron.fit(X, y, initial_epoch=epoch, epochs=epoch+1, callbacks=[save_cb])
    except Exception as e:
        print(e)