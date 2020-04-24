import sys
import json
sys.path.insert(0, './../src')

from utils.cigar_vizualiser import get_comparison, get_miss_matches, print_mismatches

def run(file_name):
    with open(f"./temps/{file_name}",'r') as f:
        data = json.load(f)

    for e in data:
        dna_pred = e['dna_pred']
        dna_pred, dna_true, num_mismatches = get_miss_matches(dna_pred)
        print(f"{e['name']} ||| mismatches: {num_mismatches} ||| acc:{e['acc']}")
        print_mismatches(dna_pred, dna_true, 100)


if __name__ == "__main__":
    file_name = sys.argv[1]
    run(file_name)