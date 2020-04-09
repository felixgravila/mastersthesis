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
1024 acc 93.19% (on 22 items (manually removed 3 outliers)) - took ~ 1h20 on a v100
```
