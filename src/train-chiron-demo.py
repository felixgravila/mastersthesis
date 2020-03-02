# %%

#import sys
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
label_length = 50
batch_size = 500
buffer_size = 5

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=batch_size, input_length=input_length, label_length=label_length, buffer_size=buffer_size)

chiron = ChironBuilder(input_length, label_length)\
            .with_batch_normalization()\
            .build()

save_cb = SaveCB(chiron, data_preper)\
    .withCheckpoints("models")\
    .withImageOutput("images")

for idx in range(len(generator)):
    generator.print_status()
    try:
        examples = next(generator.get_batch(window_size=300, window_stride=300, ignore_boundary_size=5))
        x = examples[0]
        y = examples[1]
        chiron.fit(x, y, initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])
    except Exception as e:
        print(f"Error {e}, continuing...")