#%%
import json
zymo_file = "useful_files/zymo-ref-uniq_2019-03-15.fa"

bact_ref = {}

with open(zymo_file, "r") as f:
    bact = ""
    for line in f:
        line = line[:-1]
        if line[0] == ">":
            bact = line[1:].split(";")[0]
            bact_ref[bact] = ""
        else:
            bact_ref[bact] += line
    
with open("zymo_ref.json", "w") as f:
    json.dump(bact_ref, f, indent=4)

# %%
