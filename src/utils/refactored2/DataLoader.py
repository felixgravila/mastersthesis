from collections import deque
import h5py

from utils.Other import get_valid_taiyaki_filename

class DataLoader():
    def __init__(self, filename=None):
        self.set_filename(filename)
        
    def set_filename(self, filename):
        if(filename==None):
            self.filename = get_valid_taiyaki_filename()
        else:
            self.filename = filename
    
    def load_read(self, read_id):
        with h5py.File(self.filename, 'r') as h5file:
            read = h5file['Reads'][read_id]
            DAC = list(read['Dacs'][()])
            RTS = deque(read['Ref_to_signal'][()])
            REF = deque(read['Reference'][()])
        return DAC, RTS, REF
    
    def load_read_label_length(self, read_id):
        with h5py.File(self.filename, 'r') as h5file:
            return len(h5file['Reads'][read_id]['Reference'][()])

    def load_read_ids(self):
        with h5py.File(self.filename, 'r') as h5file:
           read_ids = list(h5file['Reads'].keys())
        return read_ids