# Improving Oxford Nanopore Technologies (ONT) MinION base calling Master's Thesis

This was the working repository for our MSc thesis. The working basecallers now reside at 

https://github.com/fishnchips-basecaller/fishnchips

## ChironCopy

```
Avg acc for chiron-bn-pad5: 85.10%, not found: 0.57%(23)
Avg acc for chiron-bn-pad5-maxpool3: 90.79%, not found: 0.12%(5)
Avg acc for chiron-pad5-maxpool3: 92.33%, not found: 0.10%(4)
Avg acc for chiron-bn-pad5-dropout-maxpool3: 70.90%, not found: 3.77%(151)

after assembler fix:
Avg acc for chiron-pad5-maxpool3 (256/250): 93.15%, not found: 0%(0)
Avg acc for chiron-pad5-maxpool3 (512/512): 86.73%, not found: 0%(0)

evaluate whole read (no assembler):
Avg acc for chiron-pad5-maxpool3: 91.35%, not found: 0%(0)
```

## FishNChips

```
256 acc 81.7% (on 25 items)
1024 acc 93.19% (on 22 items (manually removed 3 outliers)) - took ~ 1h20 on a v100 - 84.018.183 params
```

## MISC
Tried beam search with width > 1, didn't work

Tried Dead Fish with alpha 0.4 and CTC looked good, might be that CTC is overpowering the decoder

## BENCHMARKS

### BASECALLS (ALL READS, NO CUTTING)

| Name                                       | Accuracy |
|--------------------------------------------|----------|
| Chiron (DNA_MODEL)                         | 82.25%   |
| Chiron (DNA_MODEL) under 5k                | 84.03%   |
| chiron_pad5_maxpool3                       | 81.44%   |
| chiron_pad5_maxpool3_wholeread             | 86.38%   |
| Guppy (fast  - dna_r9.4.1_450bps_fast.cfg) | 91.10%   |
| Guppy (dna_r9.4.1_450bps_hac.cfg)          | 91.60%   |
| Guppy (dna_r9.4.1_450bps_hac.cfg) < 5k     | 92.83%   |
| fishnchips_250_5CNN_25H_4B                 | 92.62% * |
| fishnchips_250_5CNN_25H_4B_6MPK            | 90.34%   |
| 6MPK bench ( checking bact )               | 95.80%   |
| our_bonito                                 | 45.09%   |
| bonito_941                                 | 92.77% * |
| bonito_941 under 5k                        | 93.46%   |

### BENCHMARKS (TAIYAKI DATA)

| Name                            | CNN Blocks | Filters | Cells | Padding | BN | Maxpool | Dropout | Accuracy   |
|---------------------------------|------------|---------|-------|---------|----|---------|---------|------------|
| Chiron-bn-pad5                  | 5          | 256     | 250   | T       | T  |         |         | 85.10%     |
| Chiron-bn-pad5-maxpool3         | 5          | 256     | 250   | T       | T  | T       |         | 90.79%     |
| Chiron-bn-pad5-dropout-maxpool3 | 5          | 256     | 250   | T       | T  | T       | T       | 70.90%     |
| Chiron-pad5-maxpool3            | 5          | 256     | 250   | T       |    | T       |         | 93.15%     |
| Chiron-pad5-maxpool3 (big)      | 5          | 512     | 512   | T       |    | T       |         | 86.73%     |
| Chiron-pad5-maxpool3 (whole)    | 5          | 256     | 250   | T       |    | T       |         | 91.35%     |

| Name               | Type                    | D_Model | Blocks | Heads | CNN    | MPK | Accuracy |
|--------------------|-------------------------|---------|--------|-------|--------|-----|----------|
| ChironCopy         | Enc + Dec + CTC iter    | 512     |        |       | 5      |     | 89.72%   |
| Fish n Chips CTSea | Enc + [Dec / CTC] α 0.1 | 512     | 4      | 8     |        |     | 82%      |
| Fish n Chips CTSea | Enc + [Dec / CTC] α 0.4 | 256     | 4      | 8     |        |     | Disaster |
| Fish n CTSea       | Enc + CTC               | 512     | 4      | 8     |        |     | 78%      |
| Dead Fish          | Enc + Dec + CTC         | 256     | 4      | 8     |        |     | Disaster |
| Fish n Chips       | Encoder + Decoder       | 256     | 8      | 8     |        |     | 0%       |
| Fish n Chips       | Encoder + Decoder       | 256     | 4      | 8     |        |     | 81%      |
| Fish n Chips       | Encoder + Decoder       | 1024    | 4      | 8     |        |     | 90%      |
| Fish n Chips       | Encoder + Decoder       | 256     | 4      | 4     |        |     | 85%      |
| Fish n Chips       | Encoder + Decoder       | 256     | 4      | 16    |        |     | 88.7%    |
| Fish n Chips       | Encoder + Decoder       | 250     | 4      | 25    |        |     | 93.41%   |
| Fish n Chips       | Encoder + Decoder       | 1000    | 2      | 25    |        |     | 93.86%   |
| Fish n Chips       | Encoder + Decoder       | 1000    | 2      | 50    |        |     | 94.37    |
| Fish n Chips       | Encoder + Decoder       | 256     | 4      | 32    |        |     | 92.62%   |
| Fish n Chips       | Encoder + Decoder       | 256     | 2      | 8     |        |     | 90.74%   |
| Fish n Chips       | Encoder + Decoder       | 256     | 1      | 8     |        |     | 68.54%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 4      | 25    | 5      | 2   | 96.64%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 4      | 25    | 4      | 2   | 95.53%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 4      | 25    | 6      | 2   | 94.82%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 2      | 25    | 5      | 2   | 91.66%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 4      | 25    | 5      | 3   | 96.60%   |
| Fish n Chips       | CNN + Encoder + Decoder | 250     | 4      | 25    | 5      | 6   | 96.98%   |
| Fish n Chips       | CNN + Encoder + Decoder | 1000    | 4      | 50    | 5      | 6   | Queued   |
