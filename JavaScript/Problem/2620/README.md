# Counter Function

## Description

Given an integer `n`, return a counter function. This counter function initially returns `n` and then returns `1` more than the previous value every subsequent time it is called (`n, n + 1, n + 2, etc`).

## Example 1:

### Input:

```javascript
n = 10;
const counter = createCounter(n);
["call", "call", "call"].map(() => counter());
```

### Output:

```javascript
[10, 11, 12];
```

### Explanation:

- `counter()` returns `10` the first time it is called.
- `counter()` returns `11`, one more than the previous call.
- `counter()` returns `12`, one more than the previous call.

## Example 2:

### Input:

```javascript
n = -2;
const counter = createCounter(n);
["call", "call", "call", "call", "call"].map(() => counter());
```

### Output:

```javascript
[-2, -1, 0, 1, 2];
```

### Explanation:

- `counter()` initially returns `-2`.
- Each subsequent call increases the value by `1`.

## Constraints:

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`
