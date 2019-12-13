# Utility to copy only one bacteria from UMI folders

## Usage
Move copyBacteria.py and umi_ref_link.csv into the `extracted` folder, next to the `fast5` folder containing all data

`python copyBacteria.py [bacteria]`

it gives all existing bacteria:

`python copyBacteria.py`

optional arg [bacteria]: finds first bacteria that matches string, asks for confirmation, then copies all folders to a separate folder

example:

`python copyBacteria.py esch`

## TODO (not worth the time probably)

* show a list of possible bacteria with choice maybe
* allow multiple moves
