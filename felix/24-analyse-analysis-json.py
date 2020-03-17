#%%

import matplotlib
import matplotlib.pyplot as plt
import scipy.stats as stats
import random
import json

with open("eval_output.json", "r") as f:
    data = json.load(f)

#%%

algos = list(data.keys())
algos.remove("read_ids")
algos.remove("read_ids_pad0")
print(algos)

for k in data.keys():
    print(f"{k}: {len(data[k])}")

# %%

colours = ["tab:blue","tab:orange","tab:green","tab:red", "tab:cyan"]

fig, ax = plt.subplots(1, 1, figsize=(20, 10))
ax.set_xticks(range(0, 100, 2))
ax.set_ylabel("# reads")
ax.set_xlabel("% accuracy")
for algo, colour in zip(algos, colours):
    allaccs = [a['cigacc']*100 for a in data[algo]]
    avg_cig_acc = sum(allaccs)/len(allaccs)
    count_not_found = sum([x==0 for x in allaccs])
    perc_not_found = count_not_found*100/len(allaccs)
    print(f"Avg acc for {algo}: {avg_cig_acc:.2f}%, not found: {perc_not_found:.2f}%({count_not_found})")
    n, x, b = ax.hist(allaccs, label=algo, bins=range(100), alpha=0.7, density=True, color=colour)
    density = stats.gaussian_kde(allaccs)
    ax.plot(x, density(x), color=colour)
plt.legend()

# %%
