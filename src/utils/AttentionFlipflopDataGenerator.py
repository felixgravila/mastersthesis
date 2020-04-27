import numpy as np

from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.Other import attentionLabelBaseMap

class AttentionFlipflopDataGenerator(AttentionDataGenerator):
    def __init__(self, read_ids, batch_size, stride, pe_encoder_max_length, pe_decoder_max_length):
        super().__init__(read_ids, batch_size, stride, pe_encoder_max_length, pe_decoder_max_length)
        
    def get_batch(self, label_as_bases=False):
        while True:
            self._batch_count += 1
            
            x, y_orig = self._buffer.get_windows_in_batch(self.batch_size, self.input_length, self.stride, min_labels_per_window=1)  
            y = self._to_target_language(y_orig, label_as_bases)    
            y = self._to_flipflop(y, label_as_bases)     
            yield (x,y)
    
    def get_batches(self, number_of_batches, label_as_bases=False):
        while True:
            batches = []
            for _ in range(number_of_batches):
                x,y = next(self.get_batch(), label_as_bases)
                batches.append([x,y])

            #batches = np.array(batches)
            yield batches

    def get_window_batch(self, label_as_bases=False):
        while True:
            self._batch_count += 1
            x_windows, y_orig_windows, ref, raw, read_id = self._buffer.get_raw_and_split_read(
                self.input_length,
                self.stride
            )
            x_windows = np.array(x_windows)
            y_windows = self._to_target_language(y_orig_windows, label_as_bases)
            yield x_windows, y_windows, ref, raw, read_id

    def _to_target_language(self, y_orig, as_bases):
        y_new = []
        for y in y_orig:
            y = [t+1 for t in y] # since 0 is a base
            y.insert(0, 9) # add 5 as start token
            y.append(10) # add 6 as end token
            y.extend([0]*(self._pe_decoder_max_length-len(y))) # pad with zeros to pe_decoder_max_length
            if as_bases:
                y = "".join([attentionLabelBaseMap[base_token] if (base_token in [1,2,3,4]) else "" for base_token in y])
            
            y_new.append(y)
        return np.array(y_new)

    def _to_flipflop(self, y_orig, label_as_bases):
        y_new = []
        for y in y_orig:
            if label_as_bases:
                y_prime = ""
                buffer = None
                for base in y:
                    if base == buffer and base in "ATGC":
                        base = base.lower()
                    buffer = base
                    y_prime += base
                y_new.append(y_prime)
            else:
                y_prime = []
                buffer = None
                for base in y:
                    if base == buffer and base in [1,2,3,4]:
                        base += 4
                    buffer = base
                    y_prime.append(base)
                y_new.append(y_prime)
        return y_new
            