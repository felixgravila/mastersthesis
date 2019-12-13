# Utility to get reference from the zymo file

## Usage
Both getReference.py and zymo-ref-uniq_2019-03-15.fa need to be in the same folder

`python getReference.py [term1] [term2]`

it gives all existing bacteria:

`python getReference.py`

optional term args [term1] [term2]: finds first bacteria that matches string, then gives ref

example:

`python getReference.py esch`

`python getReference.py Escherichia 5`

To save it to a file:

`python getReference.py Escherichia 5 > ref.fa`
