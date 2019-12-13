import sys
import pandas as pd
import os
import shutil

df = pd.read_csv('umi_ref_link.csv', header=None)
df[1] = df[1].str.lower()
unique = list(df[1].unique())
unique.sort()

def copyDirectory(src, dest):
    try:
        shutil.copytree(src, dest)
    # Directories are the same
    except shutil.Error as e:
        print('Directory not copied. Error: %s' % e)
    # Any error saying that the directory doesn't exist
    except OSError as e:
        print('Directory not copied. Error: %s' % e)

def getAllBacteria():
    return unique



def doStuff(args):
    if len(args) == 1:
        for b in getAllBacteria():
            print(b)
    else:
        bacteria = args[1].lower()
        bct = [b for b in unique if bacteria in b]
        if len(bct) > 0:
            bct = bct[0]
            if os.path.exists(bct):
                print("Folder already exists. Please remove it if you want to copy again.")
                return
            answer = "x"
            while answer not in ["y","n",""]:
                answer = input(f"Copy {bct} [[Y]/N]? ").lower()
                if answer in ["y", ""]:
                    if not os.path.exists(bct):
                        os.mkdir(bct)
                    fdf = df[df[1] == bct]
                    print(f"Copying {len(fdf)}...")
                    i = 0
                    for _, row in fdf.iterrows():
                        i += 1
                        copyDirectory(f"fast5/{row[0]}",f"{row[1]}/{row[0]}")
                        print(f"Copied {i} out of {len(fdf)}", end="\r")
                elif answer == "n":
                    print("No? Ok... just waste my time then")
                    return
        else:
            print(f"No bacteria found containing {bacteria}")

doStuff(sys.argv)