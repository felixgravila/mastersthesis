#%% 
import sys
import math
import tensorflow as tf
import numpy as np
#sys.path.insert(0,'./src')

from models.FishNChips import FishNChips
from models.Callback import SaveCB

from utils.DataGenerator import DataGenerator
from utils.DataPrepper import DataPrepper
from utils.DataBuffer import DataBuffer

from models.Attention.CustomSchedule import CustomSchedule
from models.Attention.attention_utils import create_masks

from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

input_length = 300
use_maxpool = True

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)

read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids, batch_size=1000, input_length=input_length, stride=30, reads_count=5, use_maxpool=use_maxpool)

val_read_ids = data_preper.get_validation_read_ids()
val_generator = DataGenerator(val_read_ids, batch_size=500, input_length=input_length, stride=150, reads_count=5, use_maxpool=use_maxpool)

#%%

train_loss = tf.keras.metrics.Mean(name='train_loss')
train_accuracy = tf.keras.metrics.SparseCategoricalAccuracy(name='train_accuracy')

loss_object = tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True, reduction='none') 

def loss_function(real, pred):
    mask = tf.math.logical_not(tf.math.equal(real, 0))
    loss_ = loss_object(real, pred)

    mask = tf.cast(mask, dtype=loss_.dtype)
    loss_ *= mask
    
    return tf.reduce_mean(loss_)

learning_rate = CustomSchedule(256)
optimizer = tf.keras.optimizers.Adam(learning_rate, beta_1=0.9, beta_2=0.98, epsilon=1e-9)

fish = FishNChips(d_model=256, num_cnn_blocks=5, max_pool_layer_idx=3, training=False)

x = tf.random.uniform((1,300,1))
y = tf.random.uniform((1, 50))
# y -> [1,2,3,4,0,0,0,0,0,0,...]
outp = fish(x, y)
print(outp)
fish.compile(loss=loss_function, optimizer=optimizer)

print(fish.summary())

#%%

# save_cb = SaveCB(model=fish, val_generator=val_generator)\
#     .withCheckpoints()\
#     .withImageOutput()
# if use_maxpool:
#     save_cb = save_cb.withMaxPool()

# #%%

# for epoch in range(2000):
#     generator.print_status()
#     X,y = next(generator.get_batch())
#     fish.fit(X, y, initial_epoch=epoch, epochs=epoch+1, callbacks=[save_cb])