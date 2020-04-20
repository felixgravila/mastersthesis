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

| Name               | Type                      | D_Model | Blocks | Heads | CNN | Alpha | Accuracy    | Best ED |
|--------------------|---------------------------|---------|--------|-------|-----|-------|-------------|---------|
| Fish n Chips       | Encoder + Decoder         | 256     | 4      | 8     | 0   | None  | 81%         | Unknown |
| Fish n Chips       | Encoder + Decoder         | 1024    | 4      | 8     | 0   | None  | 90%         | Unknown |
| Fish n Chips       | Encoder + Decoder         | 256     | 4      | 4     | 0   | None  | 85%         | Unknown |
| Fish n Chips       | Encoder + Decoder         | 256     | 4      | 16    | 0   | None  | 88.7%       | Unknown |
| Fish n Chips       | Encoder + Decoder         | 256     | 2      | 8     | 0   | None  | 90.74%      | Unknown |
| Fish n Chips       | Encoder + Decoder         | 256     | 1      | 8     | 0   | None  | 68.54%      | Unknown |
| Fish n Chips       | Encoder + Decoder         | 256     | 8      | 8     | 0   | None  | 0%          | Unknown |
| Fish n Chips CTSea | Encoder + [Decoder / CTC] | 512     | 4      | 8     | 0   | .1    | 82%         | Unknown |
| Fish n Chips CTSea | Encoder + [Decoder / CTC] | 256     | 4      | 8     | 0   | .4    | Disaster    | Unknown |
| Fish n CTSea       | Encoder + CTC             | 512     | 4      | 8     | 0   | None  | 78%         | 10      |
| Dead Fish          | Encoder + Decoder + CTC   | 256     | 4      | 8     | 0   | None  | Disaster    | Unknown |
