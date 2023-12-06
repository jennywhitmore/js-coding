function zipStrings(strA, strB) {
  let indexA = 0;
  let indexB = 0;
  let result = "";

  while (indexA < strA.length || indexB < strB.length) {
    if (indexA < strA.length) {
      result += strA[indexA];
      indexA++;
    }
    if (indexB < strB.length) {
      result += strB[indexB];
      indexB++;
    }
  }
  return result;
}

/**************= The Plan: *****************/
// 1.) Declare Variable: Need indexA and indexB to keep track of the position of a char within strA and strB//
// 2.) Declare Variable: Need result to store merged string and make it returnable in the end//
// 3.) While Loop: Need loop to run through all chars of strA and strB//
//   a. Handle chars of srtA: check for a chars within the while loop by going through all indexes.//
/*******If char is found at an index: append that char from that index to result*/
/*******Count index up by one to get the next char in the next round.*/
//   b. Do the same for strB//
// 4.) Return the result//
