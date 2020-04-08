import sys
import numpy as np
import matplotlib.pyplot as plt

file = "train_res_256_0CNN-8H.npy"
prefix = "/".join(sys.argv[0].split("/")[:-1])
if len(prefix)>0:
    prefix += "/"
if len(sys.argv) > 1:
    file = sys.argv[1]

data = np.load(f"{prefix}{file}")
plt.plot(data[:,0], label="loss")
plt.plot(data[:,1], label="acc")
plt.xlabel("batches")
plt.legend()
plt.show()