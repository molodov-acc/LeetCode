# Array .last() Method

## Description

Enhance all arrays so that you can call the `array.last()` method on any array, which will return the last element. If there are no elements in the array, it should return `-1`.

You may assume the array is the output of `JSON.parse`.

## Example

### Input:

```javascript
const nums = [null, {}, 3];
console.log(nums.last());
```

### Output:

```javascript
3;
```

#### Explanation:

Calling `nums.last()` should return the last element: `3`.

### Input:

```javascript
const nums = [];
console.log(nums.last());
```

### Output:

```javascript
-1;
```

#### Explanation:

Because there are no elements, return `-1`.

## Constraints:

- `arr` is a valid JSON array.
- `0 <= arr.length <= 1000`.
