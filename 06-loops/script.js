/***********************************1********************************************/
/* Implement a oddNumbers function.

 The function has two parameters, both are numbers.
 Iterate over all numbers between first number and the second number.
 Store all oddNumbers in string, seperated by a comma and return the string.
 Allowed are only positive numbers, add a check. 

// TODO: Implement the oddNumbers function

console.log(oddNumbers(0, 4));
// result should be: 1,3

console.log(oddNumbers(10, 33));
// result should be: 11,13,15,17,19,21,23,25,27,29,31,33

console.log(oddNumbers(9, 12));
// result should be: 9,11 */

//_______________________________________________________________________________//

function oddNumbers(num1, num2) {
  if (num1 < 0 || num2 < 0) {
    //check for possible negative numbers
    return "Invalid input. Please enter positive numbers only.";
  }

  let startNum = Math.min(num1, num2); //sets the smaller number between num1 und num2 here
  let endNum = Math.max(num1, num2); //sets the larger number here
  let oddNumbersList = ""; //creates an empty list

  for (let index = startNum; index <= endNum; index++) {
    // start with startNum; as long as number is smaller or same as endNum,; continue counting in steps of 1
    if (index % 2 !== 0) {
      // if the number has a rest when devided by 2, it is an odd number
      oddNumbersList += index + ","; //then add it to the list
    }
  }
  return oddNumbersList;
}

console.log("-------Task 1 Results:");
console.log(oddNumbers(0, 4));
console.log(oddNumbers(10, 33));
console.log(oddNumbers(9, 12));
console.log(oddNumbers(47, 11)); // testing if math.min/max worked out
console.log(oddNumbers(9, -836)); // testing if beginning if condition works

/***********************************2********************************************/

/* Implement a charCount function.

 The function has a first parameter for a word which is a string.
 The function has a second parameter which contains the character to search for which is a string.
 Check if the second parameter consists of only one character, if not, quit the function.
 The function returns the number of times the character from the second parameter is present in the word.
 The function should be case insensitive. 

// TODO: Implement the charCount function

console.log(charCount("hello", "l"));
// result should be: 2

console.log(charCount("mama", "m"));
// result should be: 2

console.log(charCount("Resümee", "e"));
// result should be: 3 */

//_______________________________________________________________________________//

function charCount(word, char) {
  if (char.lenght > 1) {
    // does not work. with the !== it does not work either. I have no clue.
    //check if char longer than 1 character
    return "Invalid input. Please only enter one char.";
  }
  const lowercaseWord = word.toLowerCase();
  const lowercaseChar = char.toLowerCase();
  let countChar = 0;

  for (let index = 0; index < lowercaseWord.length; index++) {
    const currentChar = lowercaseWord[index];
    if (currentChar === lowercaseChar) {
      countChar += 1;
    }
  }
  return countChar;
}

console.log("-------Task 2 Results:");
console.log(charCount("heLlo", "l")); //testing if lowercasing word works
console.log(charCount("mama", "M")); //testing if lowercasing char works
console.log(charCount("Resümee", "e"));
console.log(charCount("Resümee", "xxx")); //testing if beginning if condition works!!!!!DOES NOT!!!
