#%%
import matplotlib.pyplot as plt
import numpy as np
import scipy.fftpack
from utils.DataPrepper import DataPrepper
from utils.DataGenerator import DataGenerator

N = 500
T = 1.0 / 1000.0

data_preper = DataPrepper(validation_split=0.1, test_split=0.1)
read_ids = data_preper.get_train_read_ids()
generator = DataGenerator(read_ids,\
        batch_size=None,\
        input_length=N,\
        stride=20, reads_count=None,\
        rnn_pad_size=None,\
        use_maxpool=None).get_evaluate_batch()

# %%

X, _, _, _ = next(generator)
S = X[0].reshape(-1,)

# %%

xf = np.linspace(0.0, 1.0/(2.0*T), N//2)
yf = scipy.fftpack.ifft(S)
plt.plot(xf, 2.0*N * np.abs(yf[0:N//2]))


# %%

avgsig = [(a+b+c)/3 for (a,b,c) in zip(*[S, S[1:], S[2:]])]

# %%

avgsig.extend([0,0])
xf = np.linspace(0.0, 1.0/(2.0*T), N//2)
yf = scipy.fftpack.ifft(avgsig)
plt.plot(xf, 2.0*N * np.abs(yf[0:N//2]))

# %%

plt.plot(avgsig)

# %%
