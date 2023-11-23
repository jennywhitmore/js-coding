/***********************************1********************************************/

/*
Implement a removeItem function.

 The first parameter is an array.
 The second parameter is a number. It's the non-zero-based index of the item that should get deleted.
 Remove the item and return an array.
 Ensure that the original array was not mutated.

 // TODO: Implement the removeItem function

const ainmals = ["Dog", "Cat", "Lion"];
console.log(removeItem(ainmals, 1));
// result should be: ["Cat", "Lion"]

console.log(ainmals);
// result should be still: ["Dog", "Cat", "Lion"]

const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]

console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]
*/

//_______________________________________________________________________________//

function removeItem(arr, index) {
  let arrCopy = arr.slice();
  arrCopy.splice(index - 1, 1);
  return arrCopy;
}
const animals = ["Dog", "Cat", "Lion"];
const fruits = ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"];

console.log("-------Task 1 Results:");

console.log(removeItem(animals, 1));
// result should be: ["Cat", "Lion"]
console.log(animals);
// result should be still: ["Dog", "Cat", "Lion"]
console.log(removeItem(fruits, 3));
// result should be: ["Watermelon", "Banana", "Kiwi", "Pineapple", "Apple"]
console.log(fruits);
// result should be still: ["Watermelon", "Banana", "Cherry", "Kiwi", "Pineapple", "Apple"]

/***********************************2********************************************/

/*
implement a sumOfCharacters function.

 The function has one parameter, which is an array.
 Check the type of each array entry. If it's a string then store the count of characters.
 The function returns the total sum of all characters.

 // TODO: Implement the sumOfCharacters function

const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
console.log(sumOfCharacters(arr1));
// result should be: 17

const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];
console.log(sumOfCharacters(arr2));
// result should be: 55
*/

//_______________________________________________________________________________//

function sumOfCharacters(arr) {
  let totalChars = 0;
  for (let i = 0; i < arr.length; i++)
    if (typeof arr[i] === "string") {
      totalChars += arr[i].length;
    }
  return totalChars;
}
const arr1 = ["Luke", "Anakin", true, "Obi Wan", 333];
const arr2 = [
  "Code is",
  "like humor",
  ".",
  "When you have",
  "to explain it, it's bad!",
];

console.log("-------Task 2 Results:");

console.log(sumOfCharacters(arr1));
// result should be: 17

console.log(sumOfCharacters(arr2));
// result should be: 55
