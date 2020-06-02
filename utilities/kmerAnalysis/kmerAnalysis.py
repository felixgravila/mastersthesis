
# %%

import json
import math
import matplotlib.pyplot as plt

with open("zymo_ref.json") as f:
    zymo_ref = json.load(f)

# %%

opposites = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"}

kmer_sizes = [5,7,10,15, 25]

fig = plt.figure(figsize=(7, 2*len(kmer_sizes)))

for axi, kmer_size in enumerate(kmer_sizes):
    print(kmer_size, end="...")

    kmer_dict = {}
    allkmer_dict = {}

    for bact,dna in zymo_ref.items():
        bact = bact.split("_")[0]
        if bact not in kmer_dict:
            kmer_dict[bact] = {}
        
        dna_rev = dna[::-1]
        dna_other_strand = "".join([opposites[b] for b in dna])
        dna_other_strand_rev = dna_other_strand[::-1]

        for i in range(len(dna)-kmer_size):
            kmer = dna[i:i+kmer_size]
            if kmer not in kmer_dict[bact]:
                kmer_dict[bact][kmer] = 0
                allkmer_dict[kmer] = 0
            kmer_dict[bact][kmer] += 1 
            allkmer_dict[kmer] += 1


        for i in range(len(dna_rev)-kmer_size):
            kmer = dna_rev[i:i+kmer_size]
            if kmer not in kmer_dict[bact]:
                kmer_dict[bact][kmer] = 0
                allkmer_dict[kmer] = 0
            kmer_dict[bact][kmer] += 1 
            allkmer_dict[kmer] += 1

        for i in range(len(dna_other_strand)-kmer_size):
            kmer = dna_other_strand[i:i+kmer_size]
            if kmer not in kmer_dict[bact]:
                kmer_dict[bact][kmer] = 0
                allkmer_dict[kmer] = 0
            kmer_dict[bact][kmer] += 1 
            allkmer_dict[kmer] += 1


        for i in range(len(dna_other_strand_rev)-kmer_size):
            kmer = dna_other_strand_rev[i:i+kmer_size]
            if kmer not in kmer_dict[bact]:
                kmer_dict[bact][kmer] = 0
                allkmer_dict[kmer] = 0
            kmer_dict[bact][kmer] += 1 
            allkmer_dict[kmer] += 1

    print(f"done computation, plotting {len(allkmer_dict)} ({len(allkmer_dict)*100/math.pow(4, kmer_size)})...")


    # fig.add_subplot(4, 1, axi+1)
    # values = sorted(allkmer_dict.values(), reverse=True)
    # # rest = [0]*round(math.pow(4, kmer_size)-len(values))
    # # values.extend(rest)

    # values = [v/sum(values) for v in values]
    # pops = [p*100/math.pow(4, kmer_size) for p in range(len(values))]
    # plt.plot(pops, values, label=f"k-mer size {kmer_size}")

    # plt.xlabel("% position in all possible k-mers")
    # plt.ylabel("density")

    # plt.legend()

plt.savefig(f"dist_all_mer.png")

# %%

for bact in kmer_dict:
    print(bact, end=" ")
    bact_kmers = kmer_dict[bact].items()
    bact_kmers = sorted(bact_kmers, key=lambda x: x[1], reverse=True)
    print(bact_kmers[0])


# %%
