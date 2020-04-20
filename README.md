# Improving Oxford Nanopore Technologies (ONT) MinION base calling Master's Thesis

## ChironCopy

```
Avg acc for chiron-bn-pad5: 85.10%, not found: 0.57%(23)
Avg acc for chiron-bn-pad5-maxpool3: 90.79%, not found: 0.12%(5)
Avg acc for chiron-pad5-maxpool3: 92.33%, not found: 0.10%(4)
Avg acc for chiron-bn-pad5-dropout-maxpool3: 70.90%, not found: 3.77%(151)

after assembler fix:
Avg acc for chiron-pad5-maxpool3: 93.15%, not found: 0%(0)

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

| Name               | Type                            | D_Model | Blocks | Heads | CNN | Accuracy |
|--------------------|---------------------------------|---------|--------|-------|-----|----------|
| Fish n Chips       | Encoder + Decoder               | 256     | 4      | 8     | 0   | 81%      |
| Fish n Chips       | Encoder + Decoder               | 1024    | 4      | 8     | 0   | 90%      |
| Fish n Chips       | Encoder + Decoder               | 256     | 4      | 4     | 0   | 85%      |
| Fish n Chips       | Encoder + Decoder               | 256     | 4      | 16    | 0   | 88.7%    |
| Fish n Chips       | Encoder + Decoder               | 250     | 4      | 25    | 0   | Progress |
| Fish n Chips       | Encoder + Decoder               | 256     | 4      | 32    | 0   | Progress |
| Fish n Chips       | Encoder + Decoder               | 256     | 2      | 8     | 0   | 90.74%   |
| Fish n Chips       | Encoder + Decoder               | 256     | 1      | 8     | 0   | 68.54%   |
| Fish n Chips       | Encoder + Decoder               | 256     | 8      | 8     | 0   | 0%       |
| Fish n Chips CTSea | Encoder + [Decoder / CTC] α 0.1 | 512     | 4      | 8     | 0   | 82%      |
| Fish n Chips CTSea | Encoder + [Decoder / CTC] α 0.4 | 256     | 4      | 8     | 0   | Disaster |
| Fish n CTSea       | Encoder + CTC                   | 512     | 4      | 8     | 0   | 78%      |
| Fish n CTSea       | Encoder + CTC                   | 2048    | 4      | 8     | 0   | Progress |
| Dead Fish          | Encoder + Decoder + CTC         | 256     | 4      | 8     | 0   | Disaster |
