import numpy as np

from utils.DataGenerator import DataGenerator

class AttentionDataGenerator(DataGenerator):
    def __init__(self, read_ids, batch_size, stride, pe_encoder_max_length, pe_decoder_max_length):
        super().__init__(read_ids, batch_size, stride, pe_encoder_max_length, reads_count=5, use_maxpool=False, rnn_pad_size=0)
        
        self._pe_decoder_max_length = pe_decoder_max_length
        self._batch_count = 0

    def get_batch(self):
        while True:
            self._batch_count += 1
            
            x, y_orig = self._buffer.get_windows_in_batch(self.batch_size, self.input_length, self.stride, min_labels_per_window=1)
            
            y_new = []
            for y in y_orig:
                y = [t+1 for t in y] # since 0 is a base
                y.insert(0, 5) # add 5 as start token
                y.append(6) # add 6 as end token
                y.extend([0]*(self._pe_decoder_max_length-len(y))) # pad with zeros to pe_decoder_max_length
                y_new.append(y)
            y_new = np.array(y_new)          

            yield (x,y_new)
    
    def get_batches(self, number_of_batches):
        while True:
            batches = []
            for _ in range(number_of_batches):
                x,y = next(self.get_batch())
                batches.append([x,y])

            #batches = np.array(batches)
            yield batches
