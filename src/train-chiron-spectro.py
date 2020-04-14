#%% 
import sys
import math

#sys.path.insert(0,'./src')

from models.Chiron import Chiron
from models.ChironBuilder import ChironBuilder
from models.Callback import SaveCB

from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

input_length = 300
rnn_padding = 0
use_maxpool = False

data_prepper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_prepper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=10000, input_length=input_length, stride=30, reads_count=5, rnn_pad_size=rnn_padding, use_maxpool=use_maxpool)

val_read_ids = data_prepper.get_validation_read_ids()
val_generator = DataGenerator(val_read_ids, batch_size=500, input_length=input_length, stride=150, reads_count=5, rnn_pad_size=rnn_padding, use_maxpool=use_maxpool)

#%%

x,y = next(generator.get_batch_spectro())
in_shape = x['the_input'][0].shape

# input shape (59,6) due to spectro data
cb = ChironBuilder(input_length=in_shape[0])\
        .with_batch_normalization()\
        .with_dropout()\
        .with_different_input_dim(in_shape[1])
chiron=cb.build()


save_cb = SaveCB(chiron, val_generator)\
    .withCheckpoints()\
    .withImageOutput()\
    .withMaxPool()


#%%

for epoch in range(2000):
    generator.print_status()
    # try:
    X,y = next(generator.get_batch_spectro())
    chiron.fit(X, y, initial_epoch=epoch, epochs=epoch+1, callbacks=[save_cb])
    # except Exception as e:
    #     print(e)