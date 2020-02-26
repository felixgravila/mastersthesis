import math
from collections import deque
import random

from utils.DataLoader import DataLoader

class DataPreperVarLen():
    def __init__(self, filename=None, validation_split=0.1, test_split=0.1, window_sizes=[300], window_skip=5):

        self._validation_split = validation_split
        self._test_split = test_split
        self._train_split = self._get_train_split()
        
        self._loader = DataLoader(filename)
        self._window_sizes = window_sizes
        self._window_skip = window_skip

        self._read_ids = []
        self._train_read_ids = []
        self._test_read_ids = []
        self._validate_read_ids = []
        self._set_read_ids()
        self._split_read_ids()

    def get_read_ids(self):
        return self._read_ids

    def _get_train_split(self):
        if(self._validation_split + self._test_split > 1):
            raise AttributeError("Data preper: Invalid train, test and validation split. Split cannot exceed 1.")
        return 1 - self._validation_split - self._test_split

    def _get_window_size(self):
        return random.choice(self._window_sizes)

    def _set_read_ids(self):
        self._read_ids = self._loader.load_read_ids()
        
    def _split_read_ids(self):
        no_ids = len(self._read_ids)
        train_split_end_index = math.floor(no_ids * self._train_split)
        validate_split_start_index = train_split_end_index + 1
        validate_split_end_index = math.floor(no_ids * (self._train_split + self._validation_split))
        test_split_start_index = validate_split_end_index + 1
        
        self._train_read_ids = self._read_ids[:train_split_end_index]
        self._validate_read_ids = self._read_ids[validate_split_start_index:validate_split_end_index]
        self._test_read_ids = self._read_ids[test_split_start_index:]

    def process_read(self, read_id, window_size, window_skip):
        x = []
        y = []       
        DAC, RTS, REF = self._loader.load_read(read_id)

        curdacs  = deque( [[x] for x in DAC[RTS[0]:RTS[0]+window_size-window_skip]], window_size )
        curdacts = RTS[0]+ window_size-window_skip
        labels  = deque([])
        labelts = deque([])
        
        while RTS[0] < curdacts:
            labels.append(REF.popleft())
            labelts.append(RTS.popleft())

        while curdacts+window_skip < RTS[-1]-window_size:
            curdacs.extend([[x] for x in DAC[curdacts:curdacts+window_skip]])
            curdacts += window_skip

            while RTS[0] < curdacts:
                labels.append(REF.popleft())
                labelts.append(RTS.popleft())

            while len(labelts) > 0 and labelts[0] < curdacts - window_size:
                labels.popleft()
                labelts.popleft()

            x.append(list(curdacs))
            y.append(list(labels))
            
        return (x,y) 

    def get_training_data(self):
        x_train = []
        y_train = []

        for i,read_id in enumerate(self._train_read_ids):
            print(f"Processing read id # {i}...")
            window_size = self._get_window_size()
            x, y = self.process_read(read_id, window_size, self._window_skip)
            x_train.append(x)
            y_train.append(y)

        return x_train, y_train
    

    
