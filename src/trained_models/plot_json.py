import json
import matplotlib.pyplot as plt
import os
import numpy

files = [
    "trained_models/fish_eval_1024_0CNN_8H.json",
    "trained_models/fishnchips_256_0CNN_4H_4B.json",
    "trained_models/fishnchips_256_0CNN_16H_4B.json",
    "trained_models/fishnchips_256_0CNN_8H_2B.json",
    "trained_models/fishnchips_256_0CNN_8H_8B.json"
]

plt.figure(figsize=(20, 10))
for filepath in files:
    if os.path.isfile(filepath):
        with open(filepath, "r") as f:
            data = json.load(f)
        cigaccs = [x['cigacc']*100 for x in data]

        avg = numpy.mean(cigaccs)
        cleaned_filename = filepath.split("/")[1].split(".")[0]

        plt.hist(cigaccs, density=True, alpha=0.8, bins=range(0,100,2), label=f"{cleaned_filename}: {avg:.2f} ({len(cigaccs)})%")

plt.legend()
plt.show()