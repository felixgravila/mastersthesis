
# %%

import json
import math
import matplotlib.pyplot as plt

with open("zymo_ref.json") as f:
    zymo_ref = json.load(f)

# %%

kmer_size = 20

kmer_dict = {}

for bact,dna in zymo_ref.items():
    bact = bact.split("_")[0]
    if bact not in kmer_dict:
        kmer_dict[bact] = {}
    for i in range(len(dna)-kmer_size):
        kmer = dna[i:i+kmer_size]
        if kmer not in kmer_dict[bact]:
            kmer_dict[bact][kmer] = 0
        kmer_dict[bact][kmer] += 1


# %%

fig = plt.figure(figsize=(20,10))
for i, bact in enumerate(kmer_dict.keys()):

    values = [c[1] for c in bact_kmers]
    rest = [0]*round(math.pow(4, kmer_size)-len(values))
    values.extend(rest)

    plt.plot(values, label=bact)

plt.legend()
plt.savefig("dist.png")

# %%

for bact in kmer_dict:
    print(bact, end=" ")
    bact_kmers = kmer_dict[bact].items()
    bact_kmers = sorted(bact_kmers, key=lambda x: x[1], reverse=True)
    print(bact_kmers[0])
