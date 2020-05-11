import json
import matplotlib.pyplot as plt
import os
import numpy

files = [
    # "trained_models/fish_eval_1024_0CNN_8H.json",
    #"trained_models/fishnchips_256_0CNN_4H_4B.json",
    #"trained_models/fishnchips_256_0CNN_16H_4B.json",
    # "trained_models/fishnchips_256_0CNN_8H_2B.json",
    # "trained_models/fishnchips_256_0CNN_8H_8B.json",
    #"trained_models/fishnctsea_512_0CNN_8H_4B.json",
    #"trained_models/fishnchips_256_0CNN_8H_1B.json",
    # "trained_models/fishnchips_250_0CNN_25H_4B.json",
    # "trained_models/fishnchips_256_0CNN_32H_4B.json",
    # "trained_models/fishnchips_1000_0CNN_25H_2B.json",
    "trained_models/fishnchips_250_5CNN_25H_4B.json",
    # "trained_models/fishnchips_1000_0CNN_50H_2B.json",
    # "trained_models/fishnchips_250_4CNN_25H_4B.json",
    # "trained_models/fishnchips_250_6CNN_25H_4B.json",
    # "trained_models/fishnchips_250_5CNN_25H_2B.json",
    "trained_models/fishnchips_250_5CNN_25H_4B_3MPK.json",
    "trained_models/fishnchips_250_5CNN_25H_4B_6MPK.json",
    "trained_models/fishnchips62_250_5CNN_25H_4B.json",
    "trained_models/fishnchips62_250_5CNN_25H_4B_6MPK.json"
]

plt.figure(figsize=(20, 10))
for filepath in files:
    if os.path.isfile(filepath):
        with open(filepath, "r") as f:
            data = json.load(f)
        cigaccs = [x['cigacc']*100 for x in data]
#        cigaccs = [x['cigacc']*100 for x in data if x['cigacc'] > 0.7]

        avg = numpy.mean(cigaccs)
        cleaned_filename = filepath.split("/")[1].split(".")[0]

        plt.hist(cigaccs, density=True, alpha=0.8, bins=range(0,101,2), label=f"{cleaned_filename}: {avg:.2f}% ({len(cigaccs)})")
        plt.xlabel("% accuracy")
        plt.ylabel("Amount of reads")
        plt.xticks(range(0,101,5))

plt.legend()
plt.show()
