/***********************************1********************************************/

/*TODO: implement welcomeMsg function
console.log(welcomeMsg("Jane"));
Welcome Jane!

console.log(welcomeMsg("Marc"));
Welcome Marc! */

//_______________________________________________________________________________//

/*function welcomeMsg(name) {
  return "Welcome " + name + "!";
}*/

function welcomeMsg(name) {
  return "Welcome " + name + "!";
}
console.log("-------Task 1 Results:");
console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

/************************************2*******************************************/

/* TODO: implement calcGrossPrice function
console.log(calcGrossPrice(20, 0.19));
result should be 23.8

console.log(calcGrossPrice(40, 0.16));
result should be 46.4 */

//_______________________________________________________________________________//

function calcGrossPrice(netPrice, taxRate) {
  return netPrice + netPrice * taxRate;
}
console.log("-------Task 2 Results:");
console.log(calcGrossPrice(20, 0.19));
console.log(calcGrossPrice(40, 0.16));

/*************************************3*******************************************/

/*TODO: Implement the addPositive function

console.log(addPositive(2, 3));
result1 should be 5

console.log(addPositive(3, -5));
result2 should be 8

console.log(addPositive(-1, -8));
result2 should be 9 */

//_______________________________________________________________________________//

//option 1//
function addPositive(num1, num2) {
  if (num1 < 0) {
    num1 = num1 * -1;
  }
  if (num2 < 0) {
    num2 = num2 * -1;
  }
  let sum = num1 + num2;
  return sum;
}
console.log("-------Task 3 - Option 1 Results:");
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));

/* option 2 - 
using the build-in function math.abs to turn the negative number into an absolute number. 
The absolute value of a number is its value without regard to its sign.*/

function addPositive2(x, y) {
  let xBePositiv = Math.abs(x);
  let yBePositive = Math.abs(y);
  let sum = xBePositiv + yBePositive;
  return sum;
}
console.log("-------Task 3 - Option 2 Results:");
console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
