import sys
sys.path.insert(0,'./src')

import json

def load_json(model_name):
    with open('miro/eval_output.json') as f:
        data = json.load(f)
        return data[model_name], data['read_ids']

def get_modified_dic(trashold, data, read_ids):
    result = []
    for i,val in enumerate(data):
        if(val['cigacc'] > trashold):
            continue
        
        result.append({ 'read_ids' : read_ids[i],
                        'acc' : val['cigacc']
                        # 'ctg' : val['ctg'],
                        # 'r_st': val['r_st'],
                        # 'r_en': val['r_en'],
                        # 'NM' : val['NM'],
                        # 'blen': val['blen'],
                        # 'cig' : val['cig']
                    })
    return result

MODEL_NAME = 'chiron-bn-pad5-maxpool3'
TRASHOLD = 0.7

data, all_read_ids = load_json(MODEL_NAME)
dic = get_modified_dic(TRASHOLD, data, all_read_ids)

with open('./miro/filtered_eval.json', 'w') as jsonfile:
    json.dump(dic, jsonfile)