# %%
from utils.Other import set_gpu_growth
from utils.DataPrepper import DataPrepper
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import build, evaluate_batch, evaluate_window, evaluate_batch
from utils.AttentionDataGenerator import AttentionDataGenerator
import sys
import editdistance
import matplotlib.pyplot as plt
import tensorflow as tf
sys.path.insert(0, './src')

set_gpu_growth()

# %%
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 5
MAXPOOL_BLOCK_IDX = 3
D_MODEL = 256
DFF = 2*D_MODEL
NUM_HEADS = 8
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATE = 0.1
STRIDE = 30

EPOCHS = 2
BATCH_SIZE = 1
AS_BASE_STRING = True

# %%
read_ids = DataPrepper(training=False, validation_split=0.1,
                       test_split=0.1).get_all_read_ids()
generator = AttentionDataGenerator(
    read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH, training=False)
x_batch, y_batch_true = next(
    generator.get_batch(label_as_bases=AS_BASE_STRING))

fish = FishNChips(
    num_cnn_blocks=CNN_BLOCKS,
    max_pool_layer_idx=MAXPOOL_BLOCK_IDX,
    num_layers=ATTENTION_BLOCKS,
    d_model=D_MODEL,
    output_dim=1 + 4 + 1 + 1,  # PAD + ATCG + START + STOP
    num_heads=NUM_HEADS,
    dff=DFF,
    pe_encoder_max_length=ENCODER_MAX_LENGTH,
    pe_decoder_max_length=DECODER_MAX_LENGTH,
    rate=DROPOUT_RATE,
    max_pool_kernel_size=2)

# %%

build(fish)
fish.load_weights(f"./fish_weights_{D_MODEL}.h5")

x_batch, y_batch_true = next(generator.get_batch(label_as_bases=AS_BASE_STRING))

# %%

result, attention_weights = evaluate_window(x_batch[0], fish)
print(f'Predicted translation: {result}')
print(f"Attention layers: {attention_weights.keys()}")

# %%

def plot_block(attention_weights, signal, result, layer):
  attention = tf.squeeze(attention_weights[layer], axis=0)

  if layer[-1] == "2":
    fig, axs = plt.subplots(9, sharex='col', gridspec_kw={'hspace': 0, 'wspace': 0})
    axs[8].plot(signal[::2]) # if using cnn
    fig.set_figheight(15)
    fig.set_figwidth(7)
  else:
    fig, axs = plt.subplots(2, 4, sharex='col', gridspec_kw={'hspace': 0, 'wspace': 0})
    t_a = []
    t_a.extend(axs[0])
    t_a.extend(axs[1])
    axs = t_a
  
    fig.set_figheight(7)
    fig.set_figwidth(15)


  for head in range(attention.shape[0]):
    
    # plot the attention weights
    axs[head].matshow(attention[head][:-1, :], cmap='viridis')

    fontdict = {'fontsize': 10}
    
    # ax.set_xticks(range(len(sentence)+2))
    axs[head].set_yticks(range(len(result)))
    
    axs[head].set_ylim(len(result)-1.5, -0.5)
        
    # ax.set_xticklabels(x_batch[0], fontdict=fontdict, rotation=90)
    
    axs[head].set_yticklabels(result, fontdict=fontdict)
    axs[head].set_xlabel(f'Head {head+1}')

  plt.tight_layout()
  plt.savefig(layer)
  # plt.show()


for k in attention_weights.keys():
  plot_block(attention_weights, x_batch[0], result, k)

# %%
