import pandas as pd
from matplotlib import pyplot as plt
import h5py
import numpy as np
import statistics

# API


def get_reads(f1, f2=None):
    if(f2 is not None):
        mapped_reads = get_reads_dict(f1)
        unmapped_reads = get_reads_dict(f2)
        return find_matches(
            mapped_reads, unmapped_reads)
    else:
        return get_reads_dict(f1)

# API


def get_matching_reads(f1, f2):
    return get_reads(f1, f2)['matched']

# API


def get_outlying_reads(f1, f2):
    return get_reads(f1, f2)['outliers']


def get_reads_dict(filename):
    file = h5py.File(filename, "r")
    file = file['Reads']
    reads = []
    for r in file.keys():
        elem = {}
        elem['UUID'] = r
        for k in file[r].keys():
            elem[k] = file[r][k][()]
        reads.append(elem)
    return reads


def normalise_list(lst):
    mmin = min(lst)
    mmax = max(lst)
    lst = (lst - mmin)/(mmax - mmin)
    return lst


def are_signals_equal(s1, s2):
    if(len(s1) != len(s2)):
        return False

    for idx, _ in enumerate(s1):
        if(s1[idx] != s2[idx]):
            return False
    return True


def find_matches(mapped_reads, unmapped_reads):
    matched = []
    outliers = []

    for r1 in unmapped_reads:
        s1 = r1['Dacs']
        found = None
        for r2 in mapped_reads:
            s2 = r2['Dacs']
            if(are_signals_equal(s1, s2)):
                found = r2
        if(found != None):
            matched.append([found, r1])
        else:
            outliers.append(r1)

    return {"matched": matched, "outliers": outliers}
