/***********************************1********************************************/
/* Copy the following complete code block to your script.js file and try to spot and fix the errors.*/

//_______________________________________________________________________________//

let userName = "Brad";
userName = "Jenna";

function getUserNameLength(userName) {
  let result = userName.length;
  return result;
}

console.log("-------Task 1 Results:");
console.log(getUserNameLength(userName) > 4);

// ^______________ Should log true

/************************************2*******************************************/

/* Implement a isString function.

 The function has one parameter which could be any kind of data type
 The function is written as a function expression
 The function returns a boolean. It returns only true, when the data type is a string otherwise it will return false */

// TODO: Implement the isString function
/*
console.log(isString("Hello"));
// result should be true

console.log(isString(3));
// result should be false

console.log(isString(undefined));
// result should be false

console.log(isString(""));
// result should be true

console.log(isString("John" + "Doe"));
// result should be true */

//_______________________________________________________________________________//

const isString = function (userInput) {
  return typeof userInput === "string";
};

console.log("-------Task 2 Results:");
console.log(isString("Hello"));
console.log(isString(3));
console.log(isString(undefined));
console.log(isString(""));
console.log(isString("John" + "Doe"));
