#%%

import numpy as np
import matplotlib.pyplot as plt


#%%

obtained_data = np.load("analysis.npy", allow_pickle=True)

print(f"{len(obtained_data)} data points")

algos = ['simple', 'compli', 'window', 'wjlcs']



# %%

for algo in algos:
    print(f"{algo}: {sum([a[algo]['ed'] for a in obtained_data])/len(obtained_data)}, {sum([a[algo]['cigar_acc']>0 for a in obtained_data])}")

# %%

