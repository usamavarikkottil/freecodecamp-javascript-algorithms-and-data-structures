##### Basic JavaScript:

1. [Use Recursion to Create a Countdown]("solutions/use-recursion-to-create-a-countdown.js")

```javascript
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    return [n, ...countdown(n - 1)];
  }
}
```

2. [Use Recursion to Create a Range of Numbers](solutions/Use%20Recursion%20to%20Create%20a%20Range%20of%20Numbers.js)

```javascript
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    return [startNum, ...rangeOfNumbers(startNum + 1, endNum)];
  }
}
```
