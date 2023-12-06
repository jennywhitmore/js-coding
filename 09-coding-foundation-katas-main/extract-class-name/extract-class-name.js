function extractClassName(sessionTitle) {
  const numericIndex = [
    "01",
    "02",
    "03",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];

  const regex =
    /(Class) (\d{4}) (Januar|Februar|März|Maerz|April|Mai|Juni|Juli|August|September|Oktober|November|Dezember)/;
  const match = sessionTitle.match(regex);
  if (match) {
    const [, , year, monthName] = match;
    const months = [
      "Januar",
      "Februar",
      "März",
      "Maerz",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ].indexOf(monthName);
    if (months !== -1) {
      const numericMonth = numericIndex[months];
      return year + "-" + numericMonth;
    }
  }
  return null;
}
//console.log(extractClassName("Live-Session Class 2022 März"));

/***************** The Plan *****************************/
/*1.) Define array: numbers of all existing months numerical (as strings). 
------If there are different ways of writing a month, declare the eqvivalent number as often as 
------ways of writing exists. (-> maerz and märz means, we need "03" twice)*/
//2.) Define Regex: should match pattern of session title (-> Class, , four-digit-year, month-name)//
//3.) Match: check if given parameter matches regex (match method stored in a variable)
//4.) If condition: if there is a match, proceed. If no match found, return null.
//----a.) if match, get year and month from parameter
//____a.) define all months in a list the way they can be written
//5.) indexOf: find index of the matched month and store it in a variable (numericMonth)
//6.) if condition: check if the month exists in the months list. if it does not, return null. else, continue
//7.) switch names: get same index for numerical month as retreived from months. Store index as numericMonth variable
//8.) return what needs to be returned
