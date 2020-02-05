import tensorflow as tf
import os

labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

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

        
        
def get_valid_taiyaki_filename():
    possible_filenames = ["/mnt/sdb/taiyaki_mapped/mapped_umi16to9.hdf5",
                          "/mnt/nvme/taiyaki_aligned/mapped_umi16to9.hdf5",
                          "/Users/felix/MsC/DNA/mapped_umi16to9.hdf5"]

    for filename in possible_filenames:
        if os.path.isfile(filename):
            return filename
    else:
        raise "No filename valid!"