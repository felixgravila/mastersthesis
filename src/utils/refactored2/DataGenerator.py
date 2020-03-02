import numpy as np

class DataGenerator():
    
    def __init__(self, read_ids, buffer, batch_size=500, input_length=300, label_length=50):

        self.pos = 0
        self._read_ids = read_ids
        self.batch_size = batch_size
        self.input_length = input_length
        self.label_length = label_length

        self._buffer = buffer
          
    def __len__(self):
        return len(self._read_ids)     

    def get_batch(self, window_size, window_stride, ignore_boundary_size=5):
        while self.pos < len(self):

            signal_windows, label_windows = self._buffer.get_windows_in_batch(
                self.batch_size, 
                window_size, 
                window_stride,
                min_labels_per_window=0,
                max_labels_per_window=self.label_length)
            
            x = self._get_x(signal_windows, label_windows, ignore_boundary_size)
            y = self._get_dummy_y(signal_windows)

            yield (x,y)
            
    def _get_x(self, signal_windows, label_windows, ignore_boundary_size):

        return {
            'the_input': signal_windows,
            'the_labels': self.get_y(label_windows),
            'input_length': self._get_x_len(signal_windows, ignore_boundary_size),
            'label_length': self._get_y_lens(label_windows),
            'unpadded_labels' : label_windows
        }

    def get_y(self, label_windows):
        return np.array([r + [5]*(self.label_length-len(r)) for r in label_windows], dtype='float32')

    def _get_x_len(self, signal_windows, ignore_boundary_size):
        return np.array([[self.input_length - ignore_boundary_size] for _ in signal_windows], dtype="float32")

    def _get_y_lens(self, label_windows):
        return np.array([[len(lab)] for lab in label_windows], dtype="float32")

    def _get_dummy_y(self, signal_windows):
        return {'ctc': np.zeros([len(signal_windows)])}