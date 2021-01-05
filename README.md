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
