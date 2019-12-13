# Unique Molecular Identifier dataset1
# Raw signal data is in the fast5 format and found in the folder named fast5/
#    This folder contains directories for 24633 read groups (Unique Molecular Identifiers (UMIs))
#    The name of the subdirectories e.g. umi10000bins is the identifier linking the raw data signal data within the folder to a reference DNA sequence
# The link between identifiers and reference DNA sequence is found in in the file umi_ref_link.csv 
#     In this file "umi10000bins,Bacillus_8" means that the raw data in fast5/umi10000bins/ is matching the reference sequence named "Bacillus_8" in the file zymo-ref-uniq_2019-03-15.fa