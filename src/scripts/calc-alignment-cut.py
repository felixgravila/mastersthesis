import sys
import json
sys.path.insert(0, './../src')

from utils.cigar_vizualiser import get_mapping,get_reference

def run(file_name):
    with open(f"./temps/{file_name}",'r') as f:
        data = json.load(f)

    for e in data:
        dna_pred = e['dna_pred']
        map_obj = get_mapping(dna_pred)
        true = get_reference(map_obj.ctg)
        print(f"Model name:{e['name']}")
        print(f"Predictions: Length- {len(dna_pred)}, Cut- [{map_obj.q_st}:{map_obj.q_en}]")
        print(f"Reference: Length- {len(true)}, Cut- [{map_obj.r_st}:{map_obj.r_en}]")
        print()

if __name__ == "__main__":
    file_name = sys.argv[1]
    run(file_name)