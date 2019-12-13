from utilities.load_controller import get_reads
from utilities.load_controller import get_matching_reads

# API


def vizualize_ohe_labels(matched_reads, with_barcode_prefix=False, with_signal_barcode_prefix=False):

    labelled_data = []
    for read in matched_reads:
        dna_mapped = make_dna_list(read[1])
        dna_unmapped = make_dna_list(read[0])

        DNA_labels = make_labels(
            dna_mapped, dna_unmapped)

        uid, signal, _, _ = get_read_attributes(read[0])

        filtered_signal, filtered_labels = filter_labels(signal, DNA_labels, with_barcode_prefix,
                                                         with_signal_barcode_prefix)

        labelled_data.append(
            {"uid": uid, "measurements": filtered_signal, "labels": filtered_labels})

    return labelled_data

# API


def get_labelled_data_with_reads(reads, with_prefix=True):
    read_label_data = []

    for read in reads:
        uid, signal, points, labels = get_read_attributes(read)

        label_data = []
        for i in range(len(points)):
            if(with_prefix and i == 0):
                label = {
                    'base': -1, 'measurements': signal[0:points[i]], 'measurements_size': points[i]}
                label_data.append(label)
                continue

            label = {'base': labels[i-1],
                     'measurements': signal[points[i-1]:points[i]],
                     'measurements_size': points[i] - points[i-1]}
            label_data.append(label)

        read_label = {'uid': uid, 'data': label_data}
        read_label_data.append(read_label)

    return read_label_data

# API


def get_labelled_data_with_matched_reads(reads, with_signal_barcode_prefix=True, with_barcode_prefix=True):
    read_label_data = []

    for read in reads:
        read_mapped = read[0]
        read_unmapped = read[1]

        uid1, signal1, points1, labels1 = get_read_attributes(read_mapped)
        _, _, points2, _ = get_read_attributes(read_unmapped)

        signal = signal1  # signal1 == signal2
        label_data = []

        # add -2 at the begining - not mapped signal must start before maped signal
        signal_barcode_prefix_point = 0
        if(points1[0] > points2[0] and with_signal_barcode_prefix):
            label = {
                'base': -2,
                'measurements': signal[0:points2[0]],
                'measurements_size': points2[0]
            }
            label_data.append(label)
            signal_barcode_prefix_point = points2[0]

        for i in range(len(points1)):
            # add -1 prefix
            if(with_barcode_prefix and i == 0):
                label = {
                    'base': -1, 'measurements': signal[signal_barcode_prefix_point:points1[i]], 'measurements_size': points1[i]}
                label_data.append(label)
                continue

            label = {'base': labels1[i-1],
                     'measurements': signal[points1[i-1]:points1[i]],
                     'measurements_size': points1[i] - points1[i-1]}
            label_data.append(label)

        read_label = {'uid': uid1, 'data': label_data}
        read_label_data.append(read_label)

    return read_label_data

# API


def get_labelled_data(path1, path2=None, with_signal_barcode_prefix=True, with_barcode_prefix=True):

    if(path2 != None):
        reads = get_matching_reads(path1, path2)
        return get_labelled_data_with_matched_reads(reads)

    reads = get_reads(path1)
    return get_labelled_data_with_reads(reads)


def filter_labels(signal, labels, with_barcode_prefix, with_signal_barcode_prefix):

    if(with_signal_barcode_prefix):
        # remove nothing - keep -2 and -1
        return signal, labels

    if(with_barcode_prefix):
        # remove only -2, keep -1
        for i in range(len(labels)):
            if(labels[i] == -2):
                continue
            return signal[i:], labels[i:]
    # remove -2 and -1 keep nothing
    for i in range(len(labels)):
        if(labels[i] == -2 or labels[i] == -1):
            continue
        return signal[i:], labels[i:]


def make_dna_list(read):
    dnalist = []
    signalrefs = list(read['Ref_to_signal'])
    dnaref = list(read['Reference'])
    for idx in range(len(signalrefs)):
        if idx == 0:
            dnalist.extend([-1]*signalrefs[idx])
        else:
            for _ in range(signalrefs[idx]-signalrefs[idx-1]):
                dnalist.append(dnaref[idx-1])
    return dnalist


def make_labels(dna_unmapped, dna_mapped):
    DNA = []

    i = 0
    while(i < len(dna_mapped)):

        # mapped have readins
        if(dna_mapped[i] != -1):
            DNA.append(dna_mapped[i])
        # mapped dont yet have readings
        else:
            # unmapped have readings
            if(dna_unmapped[i] != -1):
                DNA.append(-1)
            # unmapped have no readings
            else:
                DNA.append(-2)
        i += 1

    return DNA


def normalise_list(lst):
    mmin = min(lst)
    mmax = max(lst)
    lst = (lst - mmin)/(mmax - mmin)
    return lst


def get_read_attributes(read):
    # id, signal, points, labels
    return read['UUID'], normalise_list(read['Dacs']), read['Ref_to_signal'], read['Reference']
