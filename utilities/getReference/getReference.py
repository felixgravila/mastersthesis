import sys

def makeDict():
    rawlines = ""
    with open("zymo-ref-uniq_2019-03-15.fa", "r") as file:
        for w in file:
            rawlines += w
    rawlines = rawlines.split("\n")
    
    d = {}
    curline = ""
    for line in rawlines:
        if ">" in line:
            smline = line[1:].split(";")[0].lower()
            d[smline] = f"{line}\n"
            curline = smline
        else:
            d[curline] += line
    return d

def doStuff(args):
    d = makeDict()
    dkeys = list(d.keys())
    dkeys.sort()
    if len(args) <= 1:
        for bact in dkeys:
            print(bact)
    elif len(args) == 2:
        klist = list(filter(lambda x: args[1].lower() in x, dkeys))
        if len(klist) > 0:
            print(d[klist[0]])
        else:
            print("No key found")
    elif len(args) == 3:
        klist1 = filter(lambda x: args[1].lower() in x, dkeys)
        klist2 = list(filter(lambda x: args[2].lower() in x, klist1))
        if len(klist2) > 0:
            print(d[klist2[0]])
        else:
            print("No key found")
    
doStuff(sys.argv)
