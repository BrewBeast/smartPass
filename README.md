# smartPass
This project aims to test the viability of a given password. *ultranauts prompt

Contains a javascript file that will determine wheither a given password meets strength standards. 

Returns an object stating if and what tests it passes.

Currently is able to test for:
    - length
    - contains at least one letter
    - contains at least one number
    - contains at least a number of special characters

Function also takes in a secondary parameter now to differentiate between "admin" and "normal" users so as to apply more stringent stantards.