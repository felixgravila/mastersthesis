#%%

import os

a = os.listdir("fast5")
a = [x for x in a if "signal" in x]
p = [""] * len(a) 

# %%

for filename in a:
    f = filename.split("_")
    number = int(f[1])
    uid = f[2].split(".")[0]
    p[number] = uid

# %%

with open("sampled_read.fasta") as f:
    ref = f.readlines()

print(len(ref))

with open("read_references.fasta", "w") as f:
    for line in ref:
        if line[0] == ">":
            f.write(f">{p[int(line[1:])]}\n")
        else:
            f.write(f"{line}\n")
# %%
