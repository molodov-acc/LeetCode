# Sort Array by Function Output

Given an array `arr` and a function `fn`, return a sorted array `sortedArr`. You can assume `fn` only returns numbers, and those numbers determine the sort order of `sortedArr`. `sortedArr` must be sorted in ascending order by the `fn` output.

You may assume that `fn` will never duplicate numbers for a given array.

## Examples

### Example 1:

**Input:**

```js
arr = [5, 4, 1, 2, 3], fn = (x) => x
Output:
[1, 2, 3, 4, 5]
Explanation:
fn simply returns the number passed to it, so the array is sorted in ascending order.

Example 2:
arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
Output:
[{"x": -1}, {"x": 0}, {"x": 1}]
Explanation:
fn returns the value for the "x" key. So the array is sorted based on that value.
```
