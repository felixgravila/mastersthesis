import sys
sys.path.insert(0,'./src')

from models.Chiron import Chiron
from models.Custom_LSTM_Chiron import Cstom_LSTM_Chiron
from models.Callback import SaveCB
from utils.DataPrepper import PrepData
from utils.Other import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

filename = get_valid_taiyaki_filename()

prepData = PrepData(filename, RNN_LEN=300)
#chiron = Chiron(prepData.get_max_label_len())
custom_chiron = Cstom_LSTM_Chiron(prepData.get_max_label_len())

save_cb = SaveCB(custom_chiron, prepData)\
    .withCheckpoints("models")\
    .withImageOutput("images")

for idx in range(prepData.get_len()):
    print(f"Epoch {idx}/{prepData.get_len()}")
    try:
        a = next(prepData.train_gen())
        custom_chiron.fit(a[0], a[1], initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])
    except Exception as e:
        print(f"Error {e}, continuing...")