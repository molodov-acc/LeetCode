# Asynchronous Sleep Function

## Description

Given a positive integer `millis`, write an asynchronous function that sleeps for `millis` milliseconds. The function should resolve with any value.

## Example 1:

### Input:

```javascript
millis = 100;
```

### Output:

```javascript
100;
```

### Explanation:

It should return a promise that resolves after `100ms`.

```javascript
let t = Date.now();
sleep(100).then(() => {
  console.log(Date.now() - t); // 100
});
```

## Example 2:

### Input:

```javascript
millis = 200;
```

### Output:

```javascript
200;
```

### Explanation:

It should return a promise that resolves after `200ms`.

## Constraints:

- `1 <= millis <= 1000
