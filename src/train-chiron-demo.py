# %%

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
rnn_padding = 5

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=10000, input_length=input_length, stride=30, reads_count=5, rnn_pad_size=rnn_padding)

val_read_ids = data_preper.get_validation_read_ids()
val_generator = DataGenerator(val_read_ids, batch_size=500, input_length=input_length, stride=150, reads_count=5, rnn_pad_size=rnn_padding)

#%%

chiron = ChironBuilder(input_length)\
            .with_batch_normalization()\
            .with_rnn_padding(rnn_padding)\
            .build()

save_cb = SaveCB(chiron, val_generator)\
    .withCheckpoints("model_output")\
    .withImageOutput("image_output")

epoch = 1
while True:    
    generator.print_status()
    X,y = next(generator.get_batch())
    chiron.fit(X, y, initial_epoch=epoch, epochs=epoch+1, callbacks=[save_cb])

# %%
