import numpy as np
from collections import deque

from utils.DataLoader import DataLoader

class DataBuffer():

    def __init__(self, read_ids, size=5):
        
        self._read_ids = read_ids
        self._position = 0
        self._loader = DataLoader()

        self._size = size
        self._signal_windows = []
        self._label_windows = []
        
    def get_windows_in_batch(self, batch_size, window_size, window_stride, min_labels_per_window):
        while (len(self._label_windows) < batch_size):
            self._fetch(window_size, window_stride, min_labels_per_window)
            self._shuffle()

        x = np.array(self._signal_windows[:batch_size])
        y = np.array(self._label_windows[:batch_size])
        
        self._drop(batch_size)
        return x,y

    def get_read_id_idx(self):
        return self._position

    def _drop(self, amount):
        self._signal_windows = self._signal_windows[amount+1:]
        self._label_windows = self._label_windows[amount+1:]

    def _fetch(self, window_size, window_stride, min_labels_per_window):
        for i in range(self._size):
            read_id_idx = self._position + i
            read_id = self._read_ids[read_id_idx]
            read_x, read_y = self._fetch_read(read_id, window_size, window_stride, min_labels_per_window) 

            self._signal_windows.extend(read_x)
            self._label_windows.extend(read_y)
        
        self._position += self._size

    def _shuffle(self):
        x = np.array(self._signal_windows)
        y = np.array(self._label_windows)

        c = np.c_[x.reshape(len(x), -1), y.reshape(len(y), -1)]
        np.random.shuffle(c)
        x_shuffled = c[:, :x.size//len(x)].reshape(x.shape)
        y_shuffled = c[:, x.size//len(x):].reshape(y.shape)
        
        self._signal_windows = x_shuffled.tolist()
        self._label_windows = y_shuffled.tolist()

    def _fetch_read(self, read_id, window_size, window_stride, min_labels_per_window):
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

            if len(labels) >= min_labels_per_window:
                x_read.append(list(curdacs))
                y_read.append(list(labels))
            
        return (x_read,y_read)