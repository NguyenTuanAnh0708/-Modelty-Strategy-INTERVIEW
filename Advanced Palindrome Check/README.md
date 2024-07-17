How to run : node index.js

solution step by step
Step 1: Normalization
1/Convert the string to lowercase using toLowerCase().
2/Remove all non-alphanumeric characters using a regular expression: /[^a-z0-9]/gi.

Step 2 : Palindrome Check:
1/Use two pointers: left starting at the beginning of the string and right starting at the end.
2/Move the pointers towards each other, comparing characters. If characters don't match, return false.
3/If the loop completes without mismatches, return true.
