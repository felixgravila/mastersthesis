#%%

import matplotlib.pyplot as plt
import numpy as np

results = np.load("/mnt/nvme/JupyterWorkroot/mastersthesis/felix/models/2020-02-24_14:03:25.npy", allow_pickle=True)

plt.figure(figsize=(20, 10))
plt.plot(results[0])
plt.plot(results[1])
# %%

