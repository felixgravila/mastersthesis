# %%
from utils.assembler import assemble
from utils.cigar_vizualiser import get_comparison, output_comparison, print_comparison
from utils.Other import set_gpu_growth
import os
import sys
import json
import mappy as mp
import re
sys.path.insert(0, './src')

set_gpu_growth()

# %%
with open(f"./trained_models/predictions.json", "r") as f:
    predictions = json.load(f)

read_id = predictions['read_id']
values = predictions['values']  # (TRUE, PRED)

y_pred = []
y_true = []
for e in values:
    y_true.append(e[0])
    y_pred.append(e[1])

dna_pred = assemble(y_pred)
dna_pred, dna_true = get_comparison(dna_pred)
output_comparison(dna_pred, dna_true, "./benchmark_comparison.txt")
print_comparison(dna_pred, dna_true)