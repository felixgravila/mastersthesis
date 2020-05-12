#%%

import json
import h5py
import mappy as mp

labelBaseMap = {
    0: "A",
    1: "C",
    2: "G",
    3: "T"
}

taiyakifile = "/mnt/nvme/bio/taiyaki_aligned/mapped_umi11to5.hdf5"
umibactdictfile = "/mnt/nvme/bio/mastersthesis/utilities/umiToBactDict/uids.json"
aligner = mp.Aligner("/mnt/nvme/bio/mastersthesis/useful_files/zymo-ref-uniq_2019-03-15.fa")

taiy = h5py.File(taiyakifile, "r")
taiyr = taiy['Reads']

with open(umibactdictfile) as f:
    umibactdict = json.load(f)

readlist = list(taiyr.keys())

correct = 0
wrong = []
not_found = 0

for i, read in enumerate(readlist[:10000]):
    if read not in umibactdict:
        not_found += 1
        continue
    
    ref = taiyr[f'{read}/Reference'][()]
    ref = "".join([labelBaseMap[r] for r in ref])
    a = next(aligner.map(ref))
    if umibactdict[read] in a.ctg:
        correct += 1
    else:
        wrong.append((umibactdict[read], a.ctg))

    print(f"{i+1:06d}/{len(readlist)} corr: {correct:06d} wrong:{len(wrong):06d} nf:{not_found:06d}", end="\r")


taiy.close()


# %%
