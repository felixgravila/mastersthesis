import sys
import math

sys.path.insert(0,'./src')

from models.Chiron import Chiron
from models.ChironBuilder import ChironBuilder
from models.Callback import SaveCB

from utils.refactored2.DataGenerator import DataGenerator
from utils.refactored2.DataPrepper import DataPrepper

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

input_length = 300
label_length = 50

data_preper = DataPrepper()

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, input_length=input_length, label_length=label_length)

chiron = ChironBuilder(input_length, label_length)\
            .with_batch_normalization()\
            .build()

save_cb = SaveCB(chiron, data_preper)\
    .withCheckpoints("models")\
    .withImageOutput("images")

for idx in range(len(generator)):
    print(f"Epoch {idx}/{len(generator)}")
    try:
        a = next(generator.get_batch())
        chiron.fit(a[0], a[1], initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])
    except Exception as e:
        print(f"Error {e}, continuing...")