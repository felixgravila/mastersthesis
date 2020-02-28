import math
import numpy as np

from collections import deque
from tensorflow.keras.utils import Sequence

from utils.refactored_to_delete.DataLoader import DataLoader
from utils.Other import get_valid_taiyaki_filename

class DataGenerator(Sequence):

    def __init__(self, read_ids, batch_size, max_label_len = math.ceil(300*0.2), input_length = 290):
        self._batch_size = batch_size
        self._read_ids = read_ids

        # TODO: get these in here
        self.max_label_len = max_label_len
        self.input_length = input_length


        self._loader = DataLoader()
    
    def __len__(self):
        return self._get_no_batches()

    def _get_no_batches(self):
        no_read_ids = len(self._read_ids)
        batch_size = float(self._batch_size)
        no_batches = math.ceil(no_read_ids/batch_size)
        return int(no_batches)

    def __getitem__(self, batch_index):
        x = []
        y = []
        batch_ids = self._read_ids[batch_index * self._batch_size:(batch_index + 1) * self._batch_size]

        for idx in batch_ids:
            x_read, y_read = self.process_read(idx, window_size=300, window_stride=50)
            x.extend(x_read)
            y.extend(y_read)

        x = np.array(x)
        y = np.array(y)

        train_y_padded = np.array([r + [5]*(self.max_label_len-len(r)) for r in y], dtype='float32')

        train_X_lens = np.array([[self.input_length] for _ in x], dtype="float32")
        train_y_lens = np.array([[len(lab)] for lab in y], dtype="float32")

        x_res = {'the_input': x,
                'the_labels': train_y_padded,
                'input_length': train_X_lens,
                'label_length': train_y_lens,
                'unpadded_labels' : y
            }
        y_res = {'ctc': np.zeros([len(x)])}
        return (x_res, y_res)

    def process_read(self, read_id, window_size, window_stride):
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