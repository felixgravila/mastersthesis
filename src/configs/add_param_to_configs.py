#%%

import json
import os

NEW_PARAM="MAX_POOL_KERNEL"
DEFAULT=2

for config in os.listdir("."):
    if config[-5:] == ".json":
        with open(config, "r") as f:
            data = json.load(f)
        if NEW_PARAM not in data.keys():
            data[NEW_PARAM] = DEFAULT
        with open(config, "w") as f:
            json.dump(data, f, indent=4)

# %%
