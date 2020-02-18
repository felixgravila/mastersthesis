#%%

import numpy as np
import matplotlib.pyplot as plt


#%%

obtained_data = np.load("analysis.npy", allow_pickle=True)

print(f"{len(obtained_data)} data points")

algos = ['simple', 'compli', 'window', 'wjlcs']



# %%

for algo in algos:
    print(f"{algo}: {sum([1-a[algo]['ed'] for a in obtained_data])}")


#%%




# %%

eds = [100*(1-a["editdistance"]) for a in obtained_data]
plt.hist(eds, bins=range(0,100, 2))

print(f"Mean: {np.mean(eds)}, sdv: {np.std(eds)}")


# %%

def getCigarAcc(a):
    score = a["bestcig"]["M"]
    for l in "SDI":
        score -= a["bestcig"][l]
    return 100*score/a["len(assembled)"]

cigars = [ getCigarAcc(a) for a in obtained_data if a['bestmatch'] != ""]
plt.hist(cigars, bins=range(0,100,2))


# %%
 np.mean(cigars)

# %%

plt.scatter([a['len(assembled)'] for a in obtained_data],[1-a['editdistance'] for a in obtained_data])

# %%

plt.hist([a['len(assembled)'] for a in obtained_data])

# %%

np.mean([1-a['editdistance'] for a in obtained_data if a['len(assembled)'] > 4000])

# %%
