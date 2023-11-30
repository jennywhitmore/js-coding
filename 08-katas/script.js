/*
/**********************************************************/
// CONVERT STRING TO NUMBER //
/**********************************************************/

const stringToNumber = function (str) {
  return parseInt(str);
};

/**********************************************************/
// NARCISSISTIC NUMBER //
/**********************************************************/

function narcissistic(value) {
  value = value.toString();
  if (parseInt(value) > 0) {
    let exponent = value.length;
    let sum = 0;

    for (let i = 0; i < value.length; i++) {
      const calcPow = Math.pow(parseInt(value[i]), exponent);
      sum = sum + calcPow;
    }

    if (sum === parseInt(value)) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  } else {
    console.log("false");
    return false;
  }
}

/**********************************************************/
// REMOVE STRING SPACE //
/**********************************************************/

function noSpace(x) {
  return x.replaceAll(" ", "");
}

/**********************************************************/
// STRING REPEAT //
/**********************************************************/

function repeatStr(n, s) {
  return s.repeat(n);
}

/**********************************************************/
// REMOVING ! FROM END OF STRING //
/**********************************************************/

function remove(string) {
  if (string[string.length - 1] === "!") {
    return string.slice(0, -1);
  }
  return string;
}

/**********************************************************/
// ABBREVIATE TWO WORD NAME //
/**********************************************************/

function abbrevName(name) {
  let initials = name[0] + ".";

  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      return name[0] + "." + name[i + 1];
    }
  }
  return initials.toUpperCase();
}

/**********************************************************/
// ABBREVIATE TWO WORD NAME - ALTERNATIVE //
/**********************************************************/

function abbrevName(name) {
  let names = name.split(" ");
  return names[0][0].toUpperCase() + "." + names[1][0].toUpperCase();
}

/**********************************************************/
// Find Lowest Number //
/**********************************************************/

const arr = [34, 15, 88, 2];

function sort(a, b) {
  return a - b;
}

const arrSorted = arr.sort(sort);
return arrSorted[0];

/**********************************************************/
// Tribonacci //
/**********************************************************/

function tribonacci(signature, n) {
  let signatureOriginal = signature;
  let signatureCopy = signature.join(", ");
  let turns = n - 3;

  if (turns > 0) {
    for (let i = 0; i < turns; i++) {
      let sumSig =
        signatureOriginal[0] + signatureOriginal[1] + signatureOriginal[2];
      signatureCopy += ", " + sumSig;
      signatureOriginal.push(sumSig);
      signatureOriginal.shift();
    }
    return signatureCopy.split(", ").map(Number);
  } else if (turns === -3) {
    return [];
  } else {
    let result = [];
    for (let index = 0; index < n; index++) {
      result.push(signature[index]);
    }
    return result;
  }
}

/**********************************************************/
// Sum of differences in array //
/**********************************************************/

function sumOfDifferences(arr) {
  if (arr.length > 1) {
    function sort(a, b) {
      return a - b;
    }
    const arrSorted = arr.sort(sort).reverse();
    const calc = arrSorted[0] - arrSorted[1] + (arrSorted[1] - arrSorted[2]);
    return calc;
  } else {
    return 0 + "(Nothing in Haskell, None in Rust)";
  }
}

/**********************************************************/
// Sum arrays //
/**********************************************************/
function sum(numbers) {
  "use strict";
  let sumUp = 0;
  for (let i = 0; i < numbers.length; i++) {
    sumUp += numbers[i];
  }
  return sumUp;
}

/**********************************************************/
// Merge two sorted arrays into one //
/**********************************************************/

function mergeArrays(arr1, arr2) {
  const arrMerged = arr1.concat(arr2);
  const arr3 = [...new Set(arrMerged)];

  function sortNumbers(a, b) {
    return a - b;
  }

  const arrMergedSorted = arr3.sort(sortNumbers);
  return arr3;
}

/**********************************************************/
// Counting Sheep //
/**********************************************************/

function countSheeps(sheep) {
  let sheepHere = 0;
  for (let i = 0; i < sheep.length; i++) {
    if (sheep[i] === true) {
      sheepHere++;
    }
  }
  return sheepHere;
}

/**********************************************************/
// Opposite number //
/**********************************************************/

function opposite(number) {
  if (number === 0) {
    return number;
  } else {
    let oppNum = number * -1;
    return oppNum;
  }
}

/**********************************************************/
// Sum of positive //
/**********************************************************/

function positiveSum(arr) {
  let sumUp = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sumUp += arr[i];
    }
  }
  return sumUp;
}

/**********************************************************/
// return negative //
/**********************************************************/

function makeNegative(num) {
  if (num <= 0) {
    return num;
  } else {
    let oppNum = num * -1;
    return oppNum;
  }
}

/**********************************************************/
// number of people in the bus //
/**********************************************************/

var number = function (busStops) {
  let hopOn = 0;
  let hopOff = 0;

  for (let i = 0; i < busStops.length; i++) {
    hopOn += busStops[i][0];
  }
  for (let i = 1; i < busStops.length; i++) {
    hopOff += busStops[i][1];
  }
  return hopOn - hopOff;
};
//console.log(number([[10,0],[3,5],[5,8]]),5);

//Alternative solution (clever)

var number = function (busStops) {
  var totalPeople = 0;
  for (var i = 0; i < busStops.length; i++) {
    totalPeople += busStops[i][0];
    totalPeople -= busStops[i][1];
  }
  return totalPeople;
};

/**********************************************************/
// reversed strings //
/**********************************************************/

function solution(str) {
  return str.split("").reverse().join("");
}

/**********************************************************/
// even numbers in an array //
/**********************************************************/

function evenNumbers(array, number) {
  let lastEvens = [];
  for (let i = array.length - 1; i >= 0; i--) {
    if (array[i] % 2 === 0 && lastEvens.length < number) {
      lastEvens.unshift(array[i]);
    }
  }
  return lastEvens;
}

//console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]);

/**********************************************************/
// Get the Middle Character //
/**********************************************************/

function getMiddle(s) {
  let split = Math.floor(s.length / 2);

  if (s.length % 2 === 0) {
    return s[split - 1] + s[split];
  } else if (s.length % 2 !== 0) {
    return s[split];
  } else if (s.lenght === 1) {
    return s;
  }
}

/**********************************************************/
// Isograms //
/**********************************************************/

function isIsogram(str) {
  for (let i = 0; i < str.length - 1; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i].toLowerCase() === str[j].toLowerCase()) {
        return false;
      }
    }
  }
  return true;
}

/**********************************************************/
// Vowel Count //
/**********************************************************/

function getCount(str) {
  const strCopy = str.toLowerCase().split("");
  let count = 0;
  for (let i = 0; i < strCopy.length; i++) {
    if (
      strCopy[i] === "a" ||
      strCopy[i] === "e" ||
      strCopy[i] === "i" ||
      strCopy[i] === "o" ||
      strCopy[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

//alternative solution:

function getCount(str) {
  var vowelsCount = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < vowels.length; j++) {
      if (str[i] === vowels[j]) {
        vowelsCount++;
      }
    }
  }

  return vowelsCount;
}

/**********************************************************/
// Friend or Foe? //
/**********************************************************/

function friend(friends) {
  let myFriend = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      myFriend.push(friends[i]);
    }
  }
  return myFriend;
}
//console.log(friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"])

/**********************************************************/
// String repeat //
/**********************************************************/

function repeatStr(n, s) {
  return s.repeat(n);
}

/**********************************************************/
// Descending Order //
/**********************************************************/

function descendingOrder(n) {
  return parseInt(n.toString().split("").sort().reverse().join(""));
}

/*
  1. Convert number n to string --> toString()
  2. Convert and split into an array of digits --> split('')
  3. Sort the array in Ascending order --> sort()
  4. Change the sorting order to Descending --> reverse()
  5. Convert the array back to a string --> join("")
  */

/**********************************************************/
// Mumbling //
/**********************************************************/

function accum(s) {
  let sUp = s.toUpperCase().split("");
  let sLow = s.toLowerCase().split("");

  let index = 1;
  let result = "";

  for (let i = 0; i < sUp.length; i++) {
    let firstChar = sUp[i];
    let charsXi = sLow[i].repeat(index - 1);
    result += firstChar + charsXi + "-";
    index++;
  }
  return result.slice(0, -1);
}

/**********************************************************/
// Credit Card Mask //
/**********************************************************/

// return masked string
function maskify(cc) {
  const mask = "#";
  let maskedString = mask.repeat(cc.length - 4) + cc.slice(-4);
  return maskedString;
}

/**********************************************************/
// Remove First and Last Character //
/**********************************************************/
function removeChar(str) {
  return str.slice(1, -1);
}

/**********************************************************/
// Alphabet war//
/**********************************************************/

function alphabetWar(fight) {
  const leftSidePower = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightSidePower = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftScore = 0;
  let rightScore = 0;

  for (let i = 0; i < fight.length; i++) {
    let letter = fight[i];
    if (leftSidePower[letter]) {
      leftScore += leftSidePower[letter];
    } else if (rightSidePower[letter]) {
      rightScore += rightSidePower[letter];
    }
  }
  if (leftScore > rightScore) {
    return "Left side wins!";
  } else if (leftScore < rightScore) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

//Alternative Solution

function alphabetWar(fight) {
  var right = {};
  right["m"] = 4;
  right["q"] = 3;
  right["d"] = 2;
  right["z"] = 1;
  var left = {};
  left["w"] = 4;
  left["p"] = 3;
  left["b"] = 2;
  left["s"] = 1;

  var sumRight = 0;
  var sumLeft = 0;

  for (i in fight) {
    if (right[fight[i]]) {
      sumRight += right[fight[i]];
    }
    if (left[fight[i]]) {
      sumLeft += left[fight[i]];
    }
  }
  if (sumRight > sumLeft) {
    return "Right side wins!";
  }
  if (sumRight < sumLeft) {
    return "Left side wins!";
  }
  return "Let's fight again!";
}
