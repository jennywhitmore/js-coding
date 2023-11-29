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
  for (i = 0; i < sheep.length; i++) {
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
