# Utility to create .fasta file from a folder of fast5 files

## Usage
Move createFasta.py next to the folder containing the data
The data is expected to be the output of multi_to_single_fast5, aka the following structure:

```
o_escherichia_1/
├── 0
│   ├── 05e1b8f1-a261-4aeb-b58f-adacef0a5146.fast5
│   ├── 0eeebc7a-9754-408d-9884-136de4d219d0.fast5
│   ├── 11a7cd37-5780-4304-a2f6-7ab9d486716c.fast5
│   ├── 12022872-0b83-43ed-aad9-7d4c991492f1.fast5
│   ├── 12659775-e457-489b-b29c-ab6e1638561f.fast5
(...)
├── 99
│   ├── 04290175-d75c-420e-aba6-f66e96881a71.fast5
│   ├── 04df36ac-7c38-425b-a861-23034f7739c1.fast5
│   ├── 1c8721ed-023a-4e01-bef8-11cbc10917dd.fast5
│   ├── 22590c61-8c7f-4b4d-95d0-9e4c113ca2fb.fast5
```

The usage is:

`python createFasta.py foldername`

so, in the above example:

`python createFasta.py o_escherichia_1`

It then creates the corresponding fasta file, in this case `o_escherichia_1.fasta`

## TODO (not worth the time probably)

* show progress bar
