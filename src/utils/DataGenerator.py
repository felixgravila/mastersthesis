import numpy as np
import threading

from utils.DataBuffer import DataBuffer


class DataGenerator():
    
    def __init__(self, read_ids, batch_size, stride, input_length, reads_count, rnn_pad_size):

        self._read_ids = read_ids
        self.batch_size = batch_size
        self.input_length = input_length
        self.rnn_pad_size = rnn_pad_size
        self.stride = stride

        self._buffer = DataBuffer(read_ids, reads_count)
        self._batch_count = 0
          
    def __len__(self):
        return len(self._read_ids)  

    def print_status(self):
        print(f"Batch number: {self._batch_count}. Read id index: {self._buffer.get_read_id_idx()} / {len(self)}")   

    def get_batch(self):
        while True:
            self._batch_count += 1
            signal_windows, label_windows = self._buffer.get_windows_in_batch(
                self.batch_size, 
                self.input_length, 
                self.stride,
                min_labels_per_window=1)
            
            x = self._get_x(signal_windows, label_windows)
            y = self._get_dummy_y(signal_windows)

            yield (x,y)
            
    def _get_x(self, signal_windows, label_windows):

        return {
            'the_input': signal_windows,
            'the_labels': self.get_y(label_windows),
            'input_length': self._get_x_len(signal_windows),
            'label_length': self._get_y_lens(label_windows),
            'unpadded_labels' : label_windows
        }

    def get_y(self, label_windows):
        return np.array([r + [5]*(self.input_length-len(r)) for r in label_windows], dtype='float32')

    def _get_x_len(self, signal_windows):
        return np.array([[self.input_length - 2*self.rnn_pad_size] for _ in signal_windows], dtype="float32")

    def _get_y_lens(self, label_windows):
        return np.array([[len(lab)] for lab in label_windows], dtype="float32")

    def _get_dummy_y(self, signal_windows):
        return {'ctc': np.zeros([len(signal_windows)])}