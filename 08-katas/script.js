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
    return signatureCopy;
  } else if (turns == -3) {
    return [];
  } else {
    return [1];
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
