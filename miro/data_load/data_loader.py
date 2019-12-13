import os
from ont_fast5_api.fast5_interface import get_fast5_file
from read import Read
from file import File


class DataLoader:

    def get_data(self, root_path):
        data = []
        fast5_files = self.get_fast5_files(root_path)
        for (fast5_file, fast5_id) in fast5_files:
            reads = self.get_reads(fast5_file)
            file = File(fast5_id, reads)
            data.append(file)
        return data

    def get_fast5_files(self, root_path):
        files = []
        sub_directories = os.listdir(root_path)
        for dir in sub_directories:
            filename = "batch0.fast5"
            path = "{}/{}/{}".format(root_path, dir, filename)
            file = get_fast5_file(path, mode="r")
            files.append((file, dir))
        return files

    def get_reads(self, fast5_file, label_path="Basecall_1D_000/BaseCalled_template", label_file_name="Fastq"):
        reads = []
        read_ids = fast5_file.get_read_ids()
        for read_id in read_ids:
            read = fast5_file.get_read(read_id)
            signal = read.get_raw_data()
            labels = read.get_analysis_dataset(label_path, label_file_name)
            read = Read(read_id, signal, labels)
            reads.append(read)
        return reads
