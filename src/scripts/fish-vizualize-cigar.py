import json

with open("./temps/cigar_analysis.json",'r') as f:
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
    print(f"{e['cig_viz']}")
    print()