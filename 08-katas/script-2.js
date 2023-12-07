/**********************************************************/
// Josephus Survivor //
/**********************************************************/

function josephusSurvivor(n, k) {
  let n2arr = [];
  for (let i = 1; i <= n; i++) {
    n2arr.push(i);
  }
  //this whole shit up here is just because your parameter is only an integer and not an array.//
  //you have to convert the n into an array of numbers from 1-7 first//

  let j = 0;
  while (n2arr.length > 1) {
    j = (j + k - 1) % n2arr.length;
    n2arr.splice(j, 1);
  }
  return parseInt(n2arr);
  //and then you have array values but need integers. so you need to parse your last number to integer.//
}
