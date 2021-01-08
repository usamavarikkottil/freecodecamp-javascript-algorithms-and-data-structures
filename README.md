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

1. [Match a Literal String with Different Possibilities](solutions/Match-a-Literal-String-with-Different-Possibilities.js)

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

4. [Find More Than the First Match](#)

```javascript
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);
```

5. [Match Anything with Wildcard Period](#)

```javascript
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
let result = unRegex.test(exampleStr);
```

6. [Match Single Character with Multiple Possibilities](#)

```javascript
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null
```

- Use a character class with vowels (a, e, i, o, u) in your regex `vowelRegex` to find all the vowels in the string `quoteSample`.
  Note:
  Be sure to match both upper- and lowercase vowels.

```javascript
let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result = quoteSample.match(vowelRegex);
```

7. [Match Letters of the Alphabet](#)

```javascript
let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRegex = /[a-e]at/;
catStr.match(bgRegex); // Returns ["cat"]
batStr.match(bgRegex); // Returns ["bat"]
matStr.match(bgRegex); // Returns null
```

8. [Match Numbers and Letters of the Alphabet](#)

```javascript
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/gi;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);
```

- Create a single regex that matches a range of letters between `h` and `s`, and a range of numbers between `2` and `6`. Remember to include the appropriate flags in the regex.

```javascript
let quoteSample = "Blueberry 3.141592653s are delicious.";
let myRegex = /[h-s2-6]/gi;
let result = quoteSample.match(myRegex);
```

9. [Match Single Characters Not Specified](#)

`/[^aeiou]/gi` matches all characters that are not a vowel. Note that characters like `.`, `!`, `[`, `@`, `/` and white space are matched - the negated vowel character set only excludes the vowel characters.

- Create a single regex that matches all characters that are not a number or a vowel. Remember to include the appropriate flags in the regex.

```javascript
let quoteSample = "3 blind mice.";
let myRegex = /[^0-9aeiou]/gi;
let result = quoteSample.match(myRegex);
```

10. [Match Characters that Occur One or More Times](#)

You want to find matches when the letter `s` occurs one or more times in `Mississippi`. Write a regex that uses the `+` sign.

```javascript
let difficultSpelling = "Mississippi";
let myRegex = /s+/g;
let result = difficultSpelling.match(myRegex);
```

11. [Match Characters that Occur Zero or More Times](#)

```javascript
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null
```

12. [Match Beginning String Patterns](#)

In an earlier challenge, you used the caret character (`^`) inside a character set to create a negated character set in the form `[^thingsThatWillNotBeMatched]`. Outside of a character set, the caret is used to search for patterns at the beginning of strings.

```javascript
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);
// Returns false
```

13. [Match Ending String Patterns](#)
    You can search the end of strings using the dollar sign character `$` at the end of the regex.

```javascript
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
// Returns false
```

14. [Match All Letters and Numbers](#)

The closest character class in JavaScript to match the alphabet is `\w`. This shortcut is equal to `[A-Za-z0-9_]`. This character class matches upper and lowercase letters plus numbers. Note, this character class also includes the underscore character `_`.
These shortcut character classes are also known as shorthand character classes.

```javascript
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true
```

15. [Match Everything But Letters and Numbers](#)
    You can search for the opposite of the `\w` with `\W`. Note, the opposite pattern uses a capital letter. This shortcut is the same as `[^A-Za-z0-9_]`

```javascript
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]
```

16. [Match All Numbers](#)
    The shortcut to look for digit characters is `\d`, with a lowercase `d`. This is equal to the character class `[0-9]`, which looks for a single character of any number between zero and nine.

- Use the shorthand character class `\d` to count how many digits are in movie titles. Written out numbers ("six" instead of 6) do not count.

```javascript
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;
```

17. [Match All Non-Numbers](#)

The shortcut to look for non-digit characters is `\D`. This is equal to the character class `[^0-9]`, which looks for a single character that is not a number between zero and nine.

18. [Restrict Possible Usernames](#)
    You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

- Usernames can only use alpha-numeric characters.
- The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
- Username letters can be lowercase and uppercase.
- Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

```javascript
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
let result = userCheck.test(username);
```

19. [Match Whitespace](#)
    You can search for whitespace using `\s`, which is a lowercase `s`. This pattern not only matches whitespace, but also `carriage return`, `tab`, `form feed`, and `new line` characters. You can think of it as similar to the character class `[ \r\t\f\n\v]`.

```javascript
let whiteSpace = "Whitespace. Whitespace everywhere!";
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);
// Returns [" ", " "]
```

20. [Specify Upper and Lower Number of Matches](#)

You can specify the lower and upper number of patterns with quantity specifiers. Quantity specifiers are used with curly brackets (`{` and `}`). You put two numbers between the curly brackets - for the lower and upper number of patterns.

For example, to match only the letter `a` appearing between `3` and `5` times in the string "`ah`", your regex would be `/a{3,5}h/`.

```javascript
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
```

- Change the regex `ohRegex` to match the entire phrase "`Oh no`" only when it has `3` to `6` letter `h`'s.

```javascript
let ohStr = "Ohhh no";
let ohRegex = /oh{3,6}\sno/gi;
let result = ohRegex.test(ohStr);
```

21. [Specify Only the Lower Number of Matches](#)

To only specify the lower number of patterns, keep the first number followed by a comma.

For example, to match only the string "`hah`" with the letter `a` appearing at least 3 times, your regex would be `/ha{3,}h/`.

22. [Specify Exact Number of Matches](#)

To specify a certain number of patterns, just have that one number between the curly brackets.
For example, to match only the word "`hah`" with the letter `a` 3 times, your regex would be `/ha{3}h/`.

23. [Check for All or None](#)

Sometimes the patterns you want to search for may have parts of it that may or may not exist. However, it may be important to check for them nonetheless.
You can specify the possible existence of an element with a question mark, ?. This checks for zero or one of the preceding element. You can think of this symbol as saying the previous element is optional.

For example, there are slight differences in American and British English and you can use the question mark to match both spellings.

```javascript
let american = "color";
let british = "colour";
let rainbowRegex = /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true
```

24. [Positive and Negative Lookahead](#)

A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it. A positive lookahead is used as (`?=`...) where the ... is the required part that is not matched.

On the other hand, a negative lookahead will look to make sure the element in the search pattern is not there. A negative lookahead is used as (`?!`...) where the ... is the pattern that you do not want to be there. The rest of the pattern is returned if the negative lookahead part is not present.

```javascript
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true
```

Use lookaheads in the `pwRegex` to match passwords that are greater than `5` characters long, do not begin with numbers, and have two consecutive digits.

```javascript
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);
```

25. [Check For Mixed Grouping of Characters](#)

- Fix the regex so that it checks for the names of `Franklin Roosevelt` or `Eleanor Roosevelt` in a case sensitive manner and it should make concessions for middle names.
  Then fix the code so that the regex that you have created is checked against `myString` and either `true` or `false` is returned depending on whether the regex matches.

```javascript
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);
```

26. [Reuse Patterns Using Capture Groups](#)

Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.

You can search for repeat substrings using capture groups. Parentheses, `(` and `)`, are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.

To specify where that repeat string will appear, you use a backslash (`\`) and then a number. This number starts at `1` and increases with each additional capture group you use. An example would be `\1` to match the first group.
The example below matches any word that occurs twice separated by a space:

```javascript
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
```

Using the .match() method on a string will return an array with the string it matches, along with its capture group.

- Use capture groups in `reRegex` to match numbers that are repeated only `three` times in a string, each separated by a space.

```javascript
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);
```

27. [Use Capture Groups to Search and Replace](#)

You can search and replace text in a string using `.replace()` on a string. The inputs for `.replace()` is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.

```javascript
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Returns "The sky is blue."
```

You can also access capture groups in the replacement string with dollar signs (`$`).

```javascript
"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// Returns "Camp Code"
```

- Write a regex `fixRegex` using three capture groups that will search for each word in the string "`one two three`". Then update the replaceText variable to replace "`one two three`" with the string "`three two one`" and assign the result to the `result` variable. Make sure you are utilizing capture groups in the replacement string using the dollar sign (`$`) syntax.

```javascript
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
let result = str.replace(fixRegex, replaceText);
```

28. [Remove Whitespace from Start and End](#)

Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

Note: The `String.prototype.trim()` method would work here, but you'll need to complete this challenge using regular expressions.

```javascript
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g;
let result = hello.replace(wsRegex, "");
```

## Basic Data Structures:

1. [Add Items Using `splice()`](#)

```javascript
const numbers = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numbers.splice(startIndex, amountToDelete, 13, 14);
// the second entry of 12 is removed, and we add 13 and 14 at the same index
console.log(numbers);
// returns [ 10, 11, 12, 13, 14, 15 ]
```

2. [Copy Array Items Using `slice()`](#)

The next method we will cover is `slice()`. Rather than modifying an array, `slice()` copies or extracts a given number of elements to a new array, leaving the array it is called upon untouched. `slice()` takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). Consider this:

```javascript
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];

let todaysWeather = weatherConditions.slice(1, 3);
// todaysWeather equals ['snow', 'sleet'];
// weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']
```

3. [Copy an Array with the Spread Operator](#)

While `slice()` allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new spread operator allows us to easily copy all of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: `...`

```javascript
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
```

- We have defined a function, `copyMachine` which takes `arr` (an array) and `num` (a number) as arguments. The function is supposed to return a new array made up of `num` copies of `arr`. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).

```javascript
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    newArr.unshift([...arr]);
    num--;
  }
  return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

4. [Check For The Presence of an Element With `indexOf()`](#)

JavaScript provides us with another built-in method, `indexOf()`, that allows us to quickly and easily check for the presence of an element on an array. `indexOf()` takes an element as a parameter, and when called, it returns the position, or index, of that element, or `-1` if the element does not exist on the array.

- We have defined a function, `quickCheck`, that takes an array and an element as arguments. Modify the function using `indexOf()` so that it returns `true` if the passed element exists on the array, and `false` if it does not.

```javascript
function quickCheck(arr, elem) {
  // Only change code below this line
  return arr.indexOf(elem) >= 0;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "squash"));
```

5. [Iterate Through All an Array's Items Using For Loops](#)

- We have defined a function, `filteredArray`, which takes `arr`, a nested array, and `elem` as arguments, and returns a new array. `elem` represents an element that may or may not be present on one or more of the arrays nested within `arr`. Modify the function, using a `for` loop, to return a filtered version of the passed array such that any array nested within `arr` containing `elem` has been removed.

```javascript
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    arr[i].indexOf(elem) < 0 && newArr.push(arr[i]);
  }
  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);
```

6. [Check if an Object has a PropertyPassed](#)

If we have an object `users` with a property of `Alan`, we could check for its presence in either of the following ways:

```javascript
users.hasOwnProperty("Alan");
"Alan" in users;
// both return true
```

We've created an object, `users`, with some `users` in it and a function `isEveryoneHere`, which we pass the `users` object to as an argument. Finish writing this function so that it returns `true` only if the users object contains all four names, `Alan`, `Jeff`, `Sarah`, and `Ryan`, as keys, and `false` otherwise.

```javascript
let users = {
  Alan: {
    age: 27,
    online: true,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: true,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function isEveryoneHere(obj) {
  // Only change code below this line
  return ["Alan", "Jeff", "Sarah", "Ryan"].every((name) =>
    obj.hasOwnProperty(name)
  );
  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

7. [Iterate Through the Keys of an Object with a for...in Statement](#)

Sometimes you may need to iterate through all the keys within an object. This requires a specific syntax in JavaScript called a `for...in` statement. For our `users` object, this could look like:

```javascript
for (let user in users) {
  console.log(user);
}

// logs:
Alan;
Jeff;
Sarah;
Ryan;
```

In this statement, we defined a variable `user`, and as you can see, this variable was reset during each iteration to each of the object's keys as the statement looped through the object, resulting in each user's name being printed to the console. NOTE: Objects do not maintain an ordering to stored keys like arrays do; thus a key's position on an object, or the relative order in which it appears, is irrelevant when referencing or accessing that key.

- We've defined a function `countOnline` which accepts one argument (a users object). Use a `for...in` statement within this function to loop through the `users` object passed into the function and return the number of `users` whose `online` property is set to `true`. An example of a `users` object which could be passed to `countOnline` is shown below. Each user will have an `online` property with either a `true` or `false` value.
- Example:

```javascript
{
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

```

- Solution:

```javascript
function countOnline(usersObj) {
  // Only change code below this line
  let count = 0;
  for (let user in usersObj) {
    usersObj[user].online && count++;
  }
  return count;
  // Only change code above this line
}
```

8. [Generate an Array of All Object Keys with `Object.keys()`](#)

We can also generate an array which contains all the keys stored in an object using the `Object.keys()` method and passing in an object as the argument. This will return an array with strings representing each property in the object. Again, there will be no specific order to the entries in the array.

- Finish writing the `getArrayOfUsers` function so that it returns an array containing all the properties in the object it receives as an argument.

```javascript
let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(users);
  // Only change code above this line
}
console.log(getArrayOfUsers(users));
```

## Basic Algorithm Scripting:

1. [Reverse a String](#)

```javascript
function reverseString(str) {
  return str.split("").reverse().join("");
}

reverseString("hello");
```

2. [Factorialize a Number](#)

Return the factorial of the provided integer.

If the integer is represented with the letter `n`, a factorial is the product of all positive integers less than or equal to `n`.

Factorials are often represented with the shorthand notation `n!`

For example: `5! = 120`

Only integers greater than or equal to zero will be supplied to the function.

```javascript
function factorialize(num) {
  if (num == 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

factorialize(5);
```

3. [Find the Longest Word in a String](#)
