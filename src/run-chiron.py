#!/usr/bin/env python3
# coding: utf-8

# In[ ]:

from utils.DataPrepper import PrepData
from utils.ChironModel import Chiron, SaveCB
from utils.Utils import labelBaseMap, get_valid_taiyaki_filename, set_gpu_growth

set_gpu_growth()

filename = get_valid_taiyaki_filename()


# In[ ]:


prepData = PrepData(filename, RNN_LEN=300)
chiron = Chiron(prepData.get_max_label_len())
save_cb = SaveCB("models", "images", chiron, prepData)


# In[ ]:


for idx in range(prepData.get_len()):
    print(f"Epoch {idx}/{prepData.get_len()}")
    try:
        a = next(prepData.train_gen())
        chiron.fit(a[0], a[1], initial_epoch=idx, epochs=idx+1, callbacks=[save_cb])
    except Exception as e:
        print(f"Error {e}, continuing...")



# %%
