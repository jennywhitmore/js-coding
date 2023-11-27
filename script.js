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
