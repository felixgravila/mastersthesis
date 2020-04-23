import sys
import json
sys.path.insert(0, './../src')

from utils.cigar_vizualiser import get_comparison, get_miss_matches, print_mismatches

def run(file_name):
    with open(f"./temps/{file_name}",'r') as f:
        data = json.load(f)

    cur_model_name = ""
    count = 0
    for e in data:
        if e['name'] != cur_model_name:
            cur_model_name = e['name']
            count = 0
        
        count += 1
        print(f"MODEL: {cur_model_name}, Example: {count}")
        print(f"ACC: {e['acc']}")
        print(f"DNA:")
        dna_pred, _ = get_comparison(e['dna_pred'])
        print(dna_pred)

if __name__ == "__main__":
    file_name = sys.argv[1]
    run(file_name)