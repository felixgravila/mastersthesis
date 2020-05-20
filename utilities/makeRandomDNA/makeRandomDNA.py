#%%

import random
import sys
import uuid

unique = str(uuid.uuid4())

if len(sys.argv) < 3:
    raise Exception("need length of dna and file name")

dna_count = int(sys.argv[1])
out_file = sys.argv[2]

with open(out_file, "w") as f:
    f.write(f">{unique} random {dna_count}\n")
    for i in range(dna_count):
        if i%10000 == 0:
            print(f"{i}/{dna_count}", end="\r")
            f.write("\n")
        f.write(random.choice("ATCG"))
    f.write("\n")
# %%
