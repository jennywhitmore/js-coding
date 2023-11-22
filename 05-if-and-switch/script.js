/***********************************1********************************************/
/* Copy the following complete code block to your script.js file and try to spot and fix the errors.
const size = 25;
let result;

if (size > 10) {
  result = "Greater than 10";
} else if (size > 20) {
  result = "Greater than 20";
} else {
  result = "Lower than 10";
}

console.log(result);
// Returns Greater than 10 but should return Greater than 20 */

//_______________________________________________________________________________//

//Option 1
const size = 25;
let result;

if (size > 10) {
  if (size > 20) {
    result = "Greater than 20";
  } else {
    result = "Greater than 10";
  }
} else {
  result = "Lower than 10";
}

console.log("-------Task 1 -Option 1 - Results:");
console.log(result);

//Option 2
/*const size = 25;
let result;*/

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}
console.log("-------Task 1 -Option 2 - Results:");
console.log(result);

/***********************************2********************************************/

/* Implement a oddEven function.

 The function has one parameter which is a number
 If the number is an even number, the function returns the string even
 If the number is an od number, the function returns the string odd */

// TODO: Implement the oddEven function
/*

console.log(oddEven(4));
// result should be even

console.log(oddEven(3));
// result should be odd

console.log(oddEven(-1));
// result should be odd

console.log(oddEven(10));
// result should be even*/

//_______________________________________________________________________________//

function oddEven(number) {
  if (number % 2 === 0) {
    /* here I used the modulo operator (%) */
    return "even";
  } else {
    return "odd";
  }
}

console.log("-------Task 2 Results:");
console.log(oddEven(4));
console.log(oddEven(3));
console.log(oddEven(-1));
console.log(oddEven(10));

/***********************************3********************************************/

/* Implement a oldYoung function.

 The function has one parameter which is a number
 If the number is less than 16, return "children"
 If the number is less than 50, return "young person"
 Otherwise return "elder person"
 If the number is not a number or a negative number a string invalid parameter */

// TODO: Implement the oldYoung function
/*

console.log(oldYoung(27));
// result should be young person

console.log(oldYoung(6));
// result should be children

console.log(oldYoung(-1));
// result should be invalid parameter

console.log(oldYoung(86));
// result should be elder person */

//_______________________________________________________________________________//

function oldYoung(number) {
  if (typeof number !== "number" || number < 0) {
    return "invalid parameter";
  }
  switch (true) {
    case number < 16:
      result = "children";
      break;
    case number < 50:
      result = "young person";
      break;
    default:
      result = "elder person";
  }
  return result;
}

console.log("-------Task 3 Results:");
console.log(oldYoung(27));
console.log(oldYoung(6));
console.log(oldYoung(-1));
console.log(oldYoung(86));
