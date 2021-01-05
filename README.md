## Basic JavaScript:

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

## ES6:

1. [Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements](solutions/Use%20Destructuring%20Assignment%20with%20the%20Rest%20Parameter%20to%20Reassign%20Array%20Elements.js)

```javascript
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```

2. [Use Destructuring Assignment to Pass an Object as a Function's Parameters](solutions/Use%20Destructuring%20Assignment%20to%20Pass%20an%20Object%20as%20a%20Function's%20Parameters.js)

[Challenge Link:](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters)

```javascript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};

const half = ({ max, min }) => (max + min) / 2.0; // use function argument destructurung

console.log(stats); // should be object
console.log(half(stats)); // should be 28.015
```

## Regular Expressions:

1. [Match a Literal String with Different Possibilities](solutions/)

```javascript
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);
```

2. [Ignore Case While Matching](#)

```javascript
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);
```

3. [Extract Matches](#)
   Note that the .match syntax is the "opposite" of the .test method you have been using thus far:

```javascript
"string".match(/regex/);
/regex/.test("string");
```

```javascript
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
```
