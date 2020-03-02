import sys
sys.path.insert(0,'./src')

import math

from tensorflow.keras.metrics import Mean, SparseCategoricalAccuracy
from tensorflow import GradientTape

from models.ChironBuilder import ChironBuilder
from models.Chiron import Chiron
from models.Callback import SaveCB

from utils.refactored_to_delete.DataPrepper import DataPrepper
from utils.refactored_to_delete.DataGenerator import DataGenerator
from utils.refactored_to_delete.DataLoader import DataLoader

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

def main():

    batch_size = 1

    data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
    train_read_ids = data_preper.get_train_read_ids()
    validation_read_ids = data_preper.get_validation_read_ids()


    input_length = 300
    label_length = 50

    chiron = ChironBuilder(input_length, label_length)\
                .build()\

    save_cb = SaveCB(chiron, data_preper)\
        .withCheckpoints("models")\
        .withImageOutput("images")
    
    num_epochs = 20
    num_batches_per_epoch = 100
    batch_size = 500 #windows

    training_generator = DataGenerator(train_read_ids, batch_size)

    for epoch_idx in range(num_epochs):
        try:
            x,y = next(training_generator.batch())
            chiron.fit(x, y, initial_epoch=epoch_idx, epochs=epoch_idx+1, callbacks=[save_cb])
        except Exception as e:
            print(f"Error {e}, continuing...")
        
        
        # for batch_idx in range(num_batches_per_epoch):
        #     x,y = next(training_generator.batch())
        #     chiron.fit(x, y, initial_epoch=epoch_idx, epochs=epoch_idx+1, callbacks=[save_cb])

    
main()