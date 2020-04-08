# %%
import sys
import editdistance
import matplotlib.pyplot as plt
sys.path.insert(0, './src')

from utils.Other import set_gpu_growth
from utils.DataPrepper import DataPrepper
from models.FishNChips import FishNChips
from utils.attention_evaluation_utils import build, evaluate_batch
from utils.AttentionDataGenerator import AttentionDataGenerator

set_gpu_growth()

# %%
ATTENTION_BLOCKS = 4
CNN_BLOCKS = 5
MAXPOOL_BLOCK_IDX = 3
D_MODEL = 256
DFF = 512
NUM_HEADS = 8
ENCODER_MAX_LENGTH = 300
DECODER_MAX_LENGTH = 100
DROPOUT_RATR = 0.1
STRIDE = 30

EPOCHS = 10
BATCH_SIZE = 2
AS_BASE_STRING = True

# %%
read_ids = DataPrepper(validation_split=0.1,
                       test_split=0.1).get_train_read_ids()
generator = AttentionDataGenerator(
    read_ids, BATCH_SIZE, STRIDE, ENCODER_MAX_LENGTH, DECODER_MAX_LENGTH)
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
    rate=DROPOUT_RATR)

# %%
if __name__ == "__main__":

    build(fish)
    fish.load_weights("./src/fish_weights_256.h5")

    for epoch in range(EPOCHS):
        x_batch, y_batch_true = next(generator.get_batch(label_as_bases=AS_BASE_STRING))
        y_batch_pred, _ = evaluate_batch(x_batch, fish, BATCH_SIZE, as_bases=AS_BASE_STRING)

        for i, (t, p) in enumerate(zip(y_batch_true, y_batch_pred)):
            ed = editdistance.eval(t, p)
            print(f"ED:{editdistance.eval(t,p)}, True:{t}, Pred:{p}")
