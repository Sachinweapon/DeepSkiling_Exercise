Step 1: Understanding recursive algorithm 

-> Recursion is a technique where a method calls itself to solve a smaller subproblem of the original.
-> A recursive function has:
  i) base case: the simplest version of the problem.
  ii) recursive case: the function calls itself with smaller inputs.
-> Recursive algorithms can simplify problems that are naturally defined in terms of previous values, such as:
  i) Compound interest
  ii) Population growth
  iii) Investment forecasting

Step 4: Analysis

Let n be the number of years.
The recursive function makes one call per year, so: Time Complexity: O(n)
-> For Optimization Use Memoization or Iteration
-> To avoid repeated calculations (in more complex recursion), you can Store previously computed values in a cache (memoization) Or use an iterative loop instead of recursion for better efficiency.

