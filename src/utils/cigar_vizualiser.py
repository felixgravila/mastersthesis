import mappy as mp
import re

reference_file = "../useful_files/zymo-ref-uniq_2019-03-15.fa"

def get_comparison(dna_pred, file_name=None):
    mapped = _map_prediction(dna_pred)
    if mapped == None:
        return dna_pred, ""
    
    dna_true = _get_reference(mapped.ctg)
    dna_pred, dna_true = _compare(dna_pred, dna_true, mapped.r_st, mapped.cigar_str)
    
    if file_name is not None:
        with open(file_name, 'a') as f:
            f.write(f"PRED: {dna_pred} \n")
            f.write(f"TRUE: {dna_true} \n")
            f.write('\n')
    return dna_pred, dna_true

def output_comparison(dna_pred, dna_true, filename):
    with open(filename, 'a') as f:
        f.write(f"PRED: {dna_pred} \n")
        f.write(f"TRUE: {dna_true} \n")
        f.write('\n')

def print_comparison(dna_pred, dna_true):
    incr = 200
    for i in range(0, len(dna_pred), incr):
        print(f"Segments {i}:")
        print(f"PRED:{dna_pred[i:i+incr]}")
        print(f"TRUE:{dna_true[i:i+incr]}")

def _map_prediction(pred):
    try:
        aligner = mp.Aligner(reference_file)
        return next(aligner.map(pred))
    except Exception as e:
        print(e)
        return None

def _get_reference(key):
    with open(reference_file, "r") as f:
        ref_file_str = f.read()
        idx = ref_file_str.find(key)
        if idx == -1:
            raise Exception("Didnt match reference file.")
        start_idx = idx + len(key)
        end_idx = ref_file_str.find(">", start_idx)
        if end_idx == -1:
            end_idx = len(ref_file_str-1)
        return ref_file_str[start_idx:end_idx].replace("\n","")

def _compare(dna_pred, dna_true, true_idx, dna_cigar):
    
    dna_cigar_operations = re.findall(r'[\d]+[SMDI]', dna_cigar)
    dna_result = "" + true_idx * "_"
    pred_idx = 0

    cigar_func_dic = {
        "M": _match_op,
        "D": _delete_op,
        "I": _insert_op,
        "S": _substitute_op
    }

    for o in dna_cigar_operations:
        o_type = o[-1]
        o_amount = int(o[:-1])
        o_func = cigar_func_dic[o_type]
        dna_result, dna_true, dna_pred, true_idx, pred_idx = o_func(o_amount, dna_result, dna_true, dna_pred, true_idx, pred_idx)
        
    return dna_result, dna_true

def _match_op(amount, res, true, pred, true_idx, pred_idx):
    res += pred[pred_idx:pred_idx+amount]
    pred_idx += amount
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

def _delete_op(amount, res, true, pred, true_idx, pred_idx):
    res += amount*"*"
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

def _insert_op(amount, res, true, pred, true_idx, pred_idx):
    res += pred[pred_idx:pred_idx+amount].lower()
    true = true[:true_idx] + amount*"*" + true[true_idx:]
    true_idx += amount
    pred_idx += amount
    return res, true, pred, true_idx, pred_idx

def _substitute_op(amount, res, true, pred, true_idx, pred_idx):
    res += "["
    true = true[:true_idx] + "[" + true[true_idx:]
    true_idx += 1
    for i in range(amount):
        res += pred[pred_idx + i]
    res += "]"
    true = true[:true_idx + amount] + "]" + true[true_idx + amount:]
    true_idx += amount + 1
    pred_idx += amount
    return res, true, pred, true_idx, pred_idx