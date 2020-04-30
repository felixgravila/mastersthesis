import sys
import json
import numpy as np
sys.path.insert(0, './../src')


def run(file_name1, file_name2):
    with open(f"./temps/{file_name1}", 'r') as f:
        data1 = json.load(f)

    with open(f"./temps/{file_name2}", 'r') as f:
        data2 = json.load(f)

    assert len(data1) == len(data2)

    difs = []
    for i in range(len(data1)):
        acc1 = round(float(data1[i]['acc']),4)
        acc2 = round(float(data2[i]['acc']),4)
        dif = round(abs(acc1-acc2),3)
        difs.append(dif)
        #print(f"Cut accuracy: {acc1}%, Raw accuracy:{acc2}%, Dif: {dif}")

    print(np.array(difs).mean())
    print(len(difs))
if __name__ == "__main__":
    file_name1 = sys.argv[1]
    file_name2 = sys.argv[2]
    run(file_name1, file_name2)
