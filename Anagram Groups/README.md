How to run : node index.js

solution step by step
Step 1: Initialization
An empty object anagrams is created to store the groups of anagrams.

Step 2: Iteration for each string in the input array:
1/The string is sorted to get a standardized form. For example, "eat" and "tea" both become "aet" when sorted.
2/If the sorted string is not already a key in the anagrams object, a new array is created for that key.
3/The original string is then pushed into the array corresponding to the sorted string key.

Step3 : Result
Finally, the values of the anagrams object (which are the arrays of anagrams) are returned.
