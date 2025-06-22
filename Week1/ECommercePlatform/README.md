Step 1. Understanding Asymptotic Notation

  -> Big O notation is a way to describe how the running time or space requirements of an algorithm grow relative to the input size (n).
  -> It focuses on upper bound performance and helps estimate scalability.
  -> It ignores constants and low-order terms — we're interested in the trend as data grows large.

  | Search Type   | Best Case          | Average Case  | Worst Case                 |
  | --------------| ------------------ | ------------- | -------------------------- |
  | Linear Search | O(1) — first match | O(n/2) ≈ O(n) | O(n) — last item/not found |
  | Binary Search | O(1) — middle item | O(log n)      | O(log n)                   |
  
  -> Linear Search goes item by item — no optimization.
  -> Binary Search divides the search space — requires sorted data.

Step 4. 

| Algorithm     | Time Complexity | When to Use                   |
| ------------- | --------------- | ----------------------------- |
| Linear Search | O(n)            | Unsorted data, small datasets |
| Binary Search | O(log n)        | Sorted data, large datasets   |

For our Platform Binary Search is faster and scalable — but it requires data to be sorted.