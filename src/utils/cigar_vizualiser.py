import mappy as mp
import re

reference_file = "../useful_files/zymo-ref-uniq_2019-03-15.fa"

def get_comparison(dna_pred, use_color=True):
    mapped = _map_prediction(dna_pred)
    if mapped == None:
        return dna_pred, ""
    
    dna_true = _get_reference(mapped.ctg)
    dna_true = dna_true[mapped.r_st:mapped.r_en]
    dna_pred = dna_pred[mapped.q_st:mapped.q_en]

    return _compare(dna_pred, dna_true, mapped.cigar_str, use_color)

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

def _with_color(color):
    colors = {
        'red': "\033[1;31m",  
        'blue': "\033[1;34m",
        'green': "\033[0;32m",
        'cyan':"\033[1;36m",
        'reset': "\033[0;0m"
    }
    def inner_decorator(func):

        def wrapper(o_amount, dna_result, dna_true, dna_pred, true_idx, pred_idx, use_color):
            if use_color:
                dna_result += colors[color]
                dna_result, dna_true, dna_pred, true_idx, pred_idx = func(o_amount, dna_result, dna_true, dna_pred, true_idx, pred_idx, use_color)
                dna_result += colors['reset']
                return dna_result, dna_true, dna_pred, true_idx, pred_idx
            return func(o_amount, dna_result, dna_true, dna_pred, true_idx, pred_idx)
        return wrapper
    return inner_decorator

def _compare(dna_pred, dna_true, dna_cigar, use_color):
    
    dna_cigar_operations = re.findall(r'[\d]+[SMDI]', dna_cigar)
    dna_result = ""
    pred_idx = 0
    true_idx = 0

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
        dna_result, dna_true, dna_pred, true_idx, pred_idx = o_func(o_amount, dna_result, dna_true, dna_pred, true_idx, pred_idx, use_color)

    return dna_result, dna_true

@_with_color(color="green")
def _match_op(amount, res, true, pred, true_idx, pred_idx, use_color):
    res += pred[pred_idx:pred_idx+amount]
    pred_idx += amount
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

@_with_color(color="red")
def _delete_op(amount, res, true, pred, true_idx, pred_idx, use_color):
    #res += amount*"*"
    res += true[true_idx:true_idx+amount].lower()
    true_idx += amount
    return res, true, pred, true_idx, pred_idx

@_with_color(color="blue")
def _insert_op(amount, res, true, pred, true_idx, pred_idx, use_color):
    res += pred[pred_idx:pred_idx+amount].lower()
    true = true[:true_idx] + amount*"*" + true[true_idx:]
    true_idx += amount
    pred_idx += amount
    return res, true, pred, true_idx, pred_idx

@_with_color(color="cyan")
def _substitute_op(amount, res, true, pred, true_idx, pred_idx, use_color):
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