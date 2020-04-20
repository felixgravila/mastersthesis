# %%
from utils.assembler import assemble
from utils.AttentionDataGenerator import AttentionDataGenerator
from utils.attention_evaluation_utils import build, evaluate_batch
from models.FishNChips import FishNChips
from utils.DataPrepper import DataPrepper
from utils.Other import set_gpu_growth, analyse_cigar
import os
import sys
import json
import mappy as mp
import re
sys.path.insert(0, './src')

set_gpu_growth()

# %%
with open(f"./src/trained_models/predictions.json", "r") as f:
    predictions = json.load(f)

read_id = predictions['read_id']
values = predictions['values']  # (TRUE, PRED)

y_pred = []
y_true = []
for e in values:
    y_true.append(e[0])
    y_pred.append(e[1])


ref_file_name = "./useful_files/zymo-ref-uniq_2019-03-15.fa"
aligner = mp.Aligner(ref_file_name)

# %%
def get_dna_reference(ref_file_name, key):
    with open(ref_file_name, "r") as f:
        ref_file_str = f.read()
        idx = ref_file_str.find(key)
        if idx == -1:
            raise Exception("Didnt match reference file.")
        start_idx = idx + len(key)
        end_idx = ref_file_str.find(">", start_idx)
        if end_idx == -1:
            end_idx = len(ref_file_str-1)
        return ref_file_str[start_idx:end_idx]

def match_op(amount, res, true, pred, true_idx, pred_idx):
    res += pred[pred_idx:pred_idx+amount]
    pred_idx += amount
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

def delete_op(amount, res, true, pred, true_idx, pred_idx):
    res += amount*"*"
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

def insert_op(amount, res, true, pred, true_idx, pred_idx):
    res += pred[pred_idx:pred_idx+amount].lower()
    true = true[:true_idx] + amount*"*" + true[true_idx:]
    true_idx += amount
    pred_idx += amount
    return res, true, pred, true_idx, pred_idx

def substitute_op(amount, res, true, pred, true_idx, pred_idx):
    res += "["
    true = true[:true_idx] + "[" + true[true_idx:]
    true_idx += 1
    for i in range(amount):
        res += dna_pred[pred_idx + i]
    res += "]"
    true = true[:true_idx + amount] + "]" + true[true_idx + amount:]
    true_idx += amount + 1
    pred_idx += amount
    return res, true, pred, true_idx, pred_idx

cigar_operations = {
    "M": match_op,
    "D": delete_op,
    "I": insert_op,
    "S": substitute_op
}

COMPARE_IN_FILE = True

dna_pred = assemble(y_pred)
mapped = next(aligner.map(dna_pred))
dna_cigar_str = mapped.cigar_str
dna_cigar_operations = re.findall(r'[\d]+[SMDI]', dna_cigar_str)
dna_true = get_dna_reference(ref_file_name, mapped.ctg).replace("\n","")

res = ""
true_idx = mapped.r_st
res += true_idx * "_"
pred_idx = 0

for o in dna_cigar_operations:
    o_type = o[-1]
    o_amount = int(o[:-1])
    o_func = cigar_operations[o_type]
    res, dna_true, dna_pred, true_idx, pred_idx = o_func(
        o_amount, res, dna_true, dna_pred, true_idx, pred_idx)

if COMPARE_IN_FILE:
    with open("./benchmark_comparison.txt", 'a') as f:
        f.write(f"PRED: {res} \n")
        f.write(f"TRUE: {dna_true} \n")
incr = 200
for i in range(0, len(res), incr):
    print(f"Segments {i}:")
    print(f"PRED:{res[i:i+incr]}")
    print(f"TRUE:{dna_true[i:i+incr]}")