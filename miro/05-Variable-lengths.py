import sys
sys.path.insert(0,'./src')

import math

from models.ChironBuilder import ChironBuilder
from models.Chiron import Chiron
from models.Callback import SaveCB

from utils.refactored_to_delete.DataPrepper import DataPrepper
from utils.refactored_to_delete.DataGenerator import DataGenerator
from utils.refactored_to_delete.DataLoader import DataLoader

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth


def main():

    batch_size = 5

    data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
    train_read_ids = data_preper.get_train_read_ids()
    validation_read_ids = data_preper.get_validation_read_ids()

    training_batch_generator = DataGenerator(train_read_ids, batch_size)
    validating_batch_generator = DataGenerator(validation_read_ids, batch_size)

    input_length = 300
    label_length = math.ceil(300 * 0.2)

    chiron = ChironBuilder(input_length, label_length)\
                .build()\

    model = chiron.get_model()

    # model.fit(
    #     x=training_batch_generator,
    #     steps_per_epoch=len(training_batch_generator),
    #     epochs=10,
    #     verbose=2
    # )

    model.fit_generator(
                    generator=training_batch_generator,
                    steps_per_epoch = len(training_batch_generator),
                    epochs = 10,
                    verbose = 2,
                    validation_data = validating_batch_generator,
                    validation_steps = len(validating_batch_generator))
    
main()