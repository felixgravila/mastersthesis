import numpy as np
from scipy import signal

from utils.DataBuffer import DataBuffer
from utils.Other import labelBaseMap


class DataGenerator():
    
    def __init__(self, read_ids, batch_size, stride, input_length, reads_count, use_maxpool, rnn_pad_size=0):

        self._read_ids = read_ids
        self.batch_size = batch_size
        self.input_length = input_length
        self.use_maxpool = use_maxpool
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

    def get_batch_spectro(self):
        while True:
            x,y = next(self.get_batch())
            new_inputs = []
            for window in x['the_input']:
                sig = window.reshape(-1,)
                _,_, Sxx = signal.spectrogram(sig, nperseg=10, noverlap=5)
                # for input_length = 300, Sxx.shape = (59, 6)
                new_inputs.append(Sxx.transpose())
            x['the_input'] = np.array(new_inputs)
            out_len_after_pad = new_inputs[0].shape[0] - 2*self.rnn_pad_size
            x['the_labels'] = x['the_labels'][:,:out_len_after_pad]
            x['input_length'] = np.array([len(new_inputs[0])]*len(new_inputs))

            yield (x,y)


    def get_evaluate_batch(self):
        while True:
            self._batch_count += 1
            X, _, ref, raw, read_id = self._buffer.get_raw_and_split_read(
                self.input_length,
                self.stride
            )
            yield np.array(X), "".join([labelBaseMap[r] for r in ref]), raw, read_id

    def get_evaluate_batch_with_labels(self):
        while True:
            self._batch_count += 1
            X, Y, ref, raw, read_id = self._buffer.get_raw_and_split_read(
                self.input_length,
                self.stride
            )
            yield np.array(X), np.array(Y), "".join([labelBaseMap[r] for r in ref]), raw, read_id

            
    def _get_x(self, signal_windows, label_windows):

        return {
            'the_input': signal_windows,
            'the_labels': self.get_y(label_windows),
            'input_length': self._get_x_len(signal_windows),
            'label_length': self._get_y_lens(label_windows),
            'unpadded_labels' : label_windows
        }

    def get_y(self, label_windows):
        return np.array([r + [5]*(self._get_output_len()-len(r)) for r in label_windows], dtype='float32')

    def _get_x_len(self, signal_windows):
        return np.array([[self._get_output_len()] for _ in signal_windows], dtype="float32")

    def _get_y_lens(self, label_windows):
        return np.array([[len(lab)] for lab in label_windows], dtype="float32")

    def _get_dummy_y(self, signal_windows):
        return {'ctc': np.zeros([len(signal_windows)])}

    def _get_output_len(self):
        if(self.use_maxpool):
            return (self.input_length//2)-(2*self.rnn_pad_size)
        return self.input_length-(2*self.rnn_pad_size)