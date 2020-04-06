import tensorflow as tf
import os
import re
from datetime import datetime

labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T",
    4: "-"
}

attentionLabelBaseMap = {
    0: 'P',
    1: 'A',
    2: 'C',
    3: 'G',
    4: 'T',
    5: 'S',
    6: 'E'
}

def print_tensor_to_file(value, file="info"):
    tf.print(value, output_stream=f"file://./{file}.out", summarize=1000000)

def set_gpu_limit(limitMB):
    gpus = tf.config.experimental.list_physical_devices('GPU')
    if gpus:
      try:
        tf.config.experimental.set_virtual_device_configuration(
            gpus[0],
            [tf.config.experimental.VirtualDeviceConfiguration(memory_limit=limitMB)])
        logical_gpus = tf.config.experimental.list_logical_devices('GPU')
        print(len(gpus), "Physical GPUs,", len(logical_gpus), "Logical GPUs")
      except RuntimeError as e:
        print(e)

def set_gpu_growth():
    gpus = tf.config.experimental.list_physical_devices('GPU')
    if gpus:
        try:
            for gpu in gpus:
                tf.config.experimental.set_memory_growth(gpu, True)
        except RuntimeError as e:
            print(e)
        
def get_valid_taiyaki_filename():
    possible_filenames = ["/mnt/nvme/taiyaki_aligned/mapped_umi16to9.hdf5",
			  "/user/student.aau.dk/fgravi18/data/mapped_therest.hdf5",
                          "/ssd/mapped_therest.hdf5",
                          "/Users/felix/MsC/DNA/mapped_umi16to9.hdf5",
                          "c:/Users/mirop/OneDrive/Documents/Programming/Data/bdm/umi11to5.hdf5",
                          "c:/Users/mirop/OneDrive/Documents/Programming/Data/bdm/mapped_therest.hdf5",
                          "c:/Users/mirop/OneDrive/Documents/Programming/Data/bdm/mapped_umi16to9.hdf5",
                          "/mnt/c/Users/mirop/OneDrive/Documents/Programming/Data/bdm/mapped_umi16to9.hdf5"]

    for filename in possible_filenames:
        if os.path.isfile(filename):
            print(f"Loading data from file:{filename}")
            return filename
    else:
        raise "Read data file could not be found!"

def get_valid_model_filename(model_name):
    possible_filenames = [
        f"/mnt/c/Users/mirop/OneDrive/Documents/Programming/Data/bdm/outputs/{model_name}/checkpoints/model.h5",
        f"c:/Users/mirop/OneDrive/Documents/Programming/Data/bdm/outputs/{model_name}/checkpoints/model.h5"
    ]

    print(possible_filenames[0])

    for filename in possible_filenames:
        if os.path.isfile(filename):
            return filename
    else:
        raise f"Model file could not be found!"
  
def analyse_cigar(cigar_string):
    res = re.findall(r'[\d]+[SMDI]', cigar_string)
    d = {"S":0,"M":0,"D":0,"I":0}
    for r in res:
        d[r[-1]] += int(r[:-1])
    return d

def with_timer(func):
    def wrapper(*args, **kwargs):
        start_time = datetime.now()
        res = func(*args, **kwargs)
        end_time = datetime.now()
        print(f"Class/function:{func.__qualname__ }, Took: {end_time-start_time}, Start:{start_time}, End:{end_time}")
        return res
    return wrapper
