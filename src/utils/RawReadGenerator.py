import h5py
import os
import numpy as np

class RawReadGenerator():
    def __init__(self, root_folder, window_size, stride=30):
        self._root_folder = root_folder
        self._window_size = window_size
        self._stride = stride

    def generator(self):
        dac_gen = self._get_dac()
        for filename, dac in dac_gen:
            windows = []
            for i in range(0, len(dac)-self._window_size, self._stride):
                windows.append(dac[i:i+self._window_size])
            if i+self._window_size != len(dac):
                windows.append(dac[-self._window_size:])
            yield filename, np.array(windows).reshape((-1, self._window_size, 1))

    def _get_next_read_filename(self):
        for d in os.listdir(self._root_folder):
            if "filename_mapping.txt" not in d:
                for f in os.listdir(os.path.join(self._root_folder, d)):
                    cleaned_filename = f.split(".")[0]
                    yield cleaned_filename, os.path.join(self._root_folder, d, f)

    def _get_dac(self):
        filename_gen = self._get_next_read_filename()
        for filename, next_file in filename_gen:
            with h5py.File(next_file, 'r') as h5file:
                reads = h5file['/Raw/Reads/']
                rid = list(reads.keys())[0]
                DAC = reads[f"{rid}/Signal"][()]
                DAC = self._normalize_signal(list(DAC))
            yield filename, DAC


    def _normalize_signal(self, signal):
        signal = np.array(signal)
        mean = np.mean(signal)
        standard_dev = np.std(signal)
        return (signal - mean)/standard_dev