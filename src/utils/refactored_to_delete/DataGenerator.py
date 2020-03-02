import math
import numpy as np
from collections import deque

from utils.refactored_to_delete.DataLoader import DataLoader
from utils.refactored_to_delete.DataPrepper import DataPrepper

class DataGenerator():
    def __init__(self, read_ids, batch_size):
        self.n = 0
        self.read_ids = read_ids
        self.batch_size = batch_size
        #self.batches_per_epoch = batches_per_epoch

        self._loader = DataLoader()
        
        # TODO: get these in here
        self.label_length = 50
        self.input_length = 300
    
    def __len__(self):
        return len(self.read_ids)

    def batch(self):
        while self.n < len(self):
            signal_windows,label_windows = self._get_windows_in_batch()
            signal_windows,label_windows = self._suffle_windows_in_batch(signal_windows,label_windows)
      
            max_label_length = max([len(r) for r in label_windows])
            if(max_label_length > self.label_length):
                label_windows = [r for r in label_windows if len(r) <= self.label_length]

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
        return np.array([r + [5]*(self.label_length-len(r)) for r in label_windows], dtype='float32')

    def _get_x_len(self, signal_windows):
        return np.array([[self.input_length] for _ in signal_windows], dtype="float32")

    def _get_y_lens(self, label_windows):
        return np.array([[len(lab)] for lab in label_windows], dtype="float32")

    def _get_dummy_y(self, signal_windows):
        return {'ctc': np.zeros([len(signal_windows)])}

    def _get_windows_in_batch(self):
        x,y = [], []
        while len(x) < self.batch_size:
            read_id = self.read_ids[self.n]
            self.n += 1
            read_x, read_y = self._process_read(read_id, window_size=300, window_stride=300)
            x.extend(read_x)
            y.extend(read_y)
        x = np.resize(np.array(x), (self.batch_size, self.input_length, 1))
        y = np.resize(np.array(y), (self.batch_size))
        return x,y

    def _suffle_windows_in_batch(self, x, y):
        c = np.c_[x.reshape(len(x), -1), y.reshape(len(y), -1)]
        np.random.shuffle(c)
        x_shuffled = c[:, :x.size//len(x)].reshape(x.shape)
        y_shuffled = c[:, x.size//len(x):].reshape(y.shape)
        return x_shuffled, y_shuffled

    def _process_read(self, read_id, window_size, window_stride):
        x_read = []
        y_read = []       
        DAC, RTS, REF = self._loader.load_read(read_id)

        curdacs  = deque( [[x] for x in DAC[RTS[0]:RTS[0]+window_size-window_stride]], window_size )
        curdacts = RTS[0]+ window_size-window_stride
        labels  = deque([])
        labelts = deque([])
        
        while RTS[0] < curdacts:
            labels.append(REF.popleft())
            labelts.append(RTS.popleft())

        while curdacts+window_stride < RTS[-1]-window_size:
            curdacs.extend([[x] for x in DAC[curdacts:curdacts+window_stride]])
            curdacts += window_stride

            while RTS[0] < curdacts:
                labels.append(REF.popleft())
                labelts.append(RTS.popleft())

            while len(labelts) > 0 and labelts[0] < curdacts - window_size:
                labels.popleft()
                labelts.popleft()

            x_read.append(list(curdacs))
            y_read.append(list(labels))
            
        return (x_read,y_read)   
