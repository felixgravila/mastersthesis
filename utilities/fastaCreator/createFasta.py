import h5py, os, multiprocessing, sys

def getIdAndDNA(filename):
    with h5py.File(filename,'r') as file:
        i_path = list(file["Raw/Reads"].keys())[0]
        fid = file[f"Raw/Reads/{i_path}"].attrs.get("read_id").decode('ascii')   
        dna = file['Analyses/Basecall_1D_000/BaseCalled_template/Fastq'][()].decode('ascii').split("\n")[1]
        return (fid, dna)

def doStuff(args):
    if len(args) < 2:
        print("Insufficient args")
    elif not os.path.isdir(args[1]):
        print(f"Nonexistent folder {args[1]}")
    else:
        thedir = args[1]
        files = []
        for d in os.listdir(thedir):
            if os.path.isdir(f"{thedir}/{d}"):
                files.extend([f"{thedir}/{d}/{file}" for file in os.listdir(f"{thedir}/{d}") if ".fast5" in file])

        print(f"{len(files)} files, first is {files[0]}")
        
        with multiprocessing.Pool(multiprocessing.cpu_count()) as pool:
            res = pool.map(getIdAndDNA, files)
            
        filename = f"{thedir}.fasta"
        if os.path.exists(filename):
            os.remove(filename)
        with open(filename,"w+") as file:
            for r in res:
                file.write(f">{r[0]}\n{r[1]}\n")
    
doStuff(sys.argv)