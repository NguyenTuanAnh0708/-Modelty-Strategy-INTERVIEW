How to run : node index.js

solution step by step
Step 1: Function Definition
We define a function printNumbersWithFooBar that takes two parameters, x and y. These parameters represent the multiples for which we will print "Foo" and "Bar", respectively.

Step 2: Loop Through Numbers 1 to 100
Inside the function, we use a for loop to iterate through numbers from 1 to 100.

Step 3: Check Multiples and Print
Within the loop, we use conditional statements to check if the current number i is a multiple of x, y, or both.

1/Multiple of Both x and y:
If i is divisible by both x and y (i.e., i % x === 0 && i % y === 0), we print "FooBar".

2/Multiple of x:
If i is divisible by x only (i.e., i % x === 0), we print "Foo".

3/Multiple of y:
If i is divisible by y only (i.e., i % y === 0), we print "Bar".

4/Neither:
If i is not divisible by either x or y, we simply print the number i.
