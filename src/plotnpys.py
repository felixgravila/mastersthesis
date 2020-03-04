import numpy as np
import matplotlib.pyplot as plt
import sys
from subprocess import Popen, PIPE


npys = []
p = Popen(['find', 'outputs', '-name', '*.npy'], stdin=PIPE, stdout=PIPE, stderr=PIPE)
output, err = p.communicate(b"input data that is passed to subprocess' stdin")
output = output.decode("utf-8")
for line in output.split("\n"):
    if len(line)>0:
        print(f"Plotting {line}")
        n = np.load(line)
        modelname = line.split("/")[1]
        plt.plot(n[0], label=modelname)
plt.xlabel("Epochs of 10000 windows")
plt.ylabel("AED over 500 windows")
plt.legend()
plt.show()
