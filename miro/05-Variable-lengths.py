import sys
sys.path.insert(0,'./src')

from models.Callback import SaveCB
from utils.DataPreperVarLen import DataPreperVarLen
from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

def main():
    data_preper = DataPreperVarLen()
    x_train, y_train = data_preper.get_training_data()
    print()
main()