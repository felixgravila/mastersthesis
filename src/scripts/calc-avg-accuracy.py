import sys
import json
import numpy as np
sys.path.insert(0, './../src')

def run(file_name):
    with open(f"./temps/{file_name}",'r') as f:
        data = json.load(f)

    accs = []
    for e in data:
        accs.append(e['acc'])
    print(f"Average accuracy:{np.mean(accs)}")

if __name__ == "__main__":
    file_name = sys.argv[1]
    run(file_name)