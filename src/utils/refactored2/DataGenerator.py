from collections import deque
from tensorflow.keras.utils import Sequence
import h5py
import math
import numpy as np

from utils.refactored2.DataBuffer import DataBuffer

class DataGenerator(Sequence):
    
    def __init__(self, read_ids, batch_size =500, input_length=300, label_length=50, window_stride=300,ignore_boundry=5, buffer_size=5):

        self.pos = 0
        self._read_ids = read_ids
        self.batch_size = batch_size
        self.input_length = input_length
        self.label_length = label_length

        self._buffer = DataBuffer(self._read_ids, self.input_length, self.label_length, size=buffer_size)

                    
    def __len__(self):
        return len(self._read_ids)     

    def get_batch(self, ignore_boundary_count=5):
        while self.pos < len(self):
            #signal_windows,label_windows = self._get_windows_in_batch()
            #signal_windows,label_windows = self._suffle_windows_in_batch(signal_windows, label_windows)

            signal_windows,label_windows = self._buffer.get_windows_in_batch(self.batch_size)
            
            x = self._get_x(signal_windows, label_windows, ignore_boundary_count)
            y = self._get_dummy_y(signal_windows)

            yield (x,y)
            
    def _get_x(self, signal_windows, label_windows, ignore_boundary_count):

        return {
            'the_input': signal_windows,
            'the_labels': self.get_y(label_windows),
            'input_length': self._get_x_len(signal_windows, ignore_boundary_count),
            'label_length': self._get_y_lens(label_windows),
            'unpadded_labels' : label_windows
        }

    def get_y(self, label_windows):
        return np.array([r + [5]*(self.label_length-len(r)) for r in label_windows], dtype='float32')

    def _get_x_len(self, signal_windows, ignore_boundary_count):
        return np.array([[self.input_length - ignore_boundary_count] for _ in signal_windows], dtype="float32")

    def _get_y_lens(self, label_windows):
        return np.array([[len(lab)] for lab in label_windows], dtype="float32")

    def _get_dummy_y(self, signal_windows):
        return {'ctc': np.zeros([len(signal_windows)])}