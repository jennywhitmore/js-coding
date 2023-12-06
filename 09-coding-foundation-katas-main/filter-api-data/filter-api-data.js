function filterApiData(apiData, mandatoryKeys) {
  const filter_apiData = apiData.filter(function (object) {
    return mandatoryKeys.every(function (key) {
      return object.hasOwnProperty(key);
    });
  });
  return filter_apiData;
}

/*****************The Plan:***************/

//1. Call filter() method on array parameter (apiData) -> iterate it through each object and create new array with data that meets filter//
//2. Use every() method on mandatoryKeys to check if every mandatoryKey ...//
//3. ...has the property with the given key. To check, use hasOwnProperty() method (will return true)//
//4. filter method then creates new array with all the objects that have met the criteria//
//5. return the objects that match the criterias//

/*resources used to solve this kata:
-> https://pythontutor.com/javascript.html#mode=edit :loveIt:
-> https://builtin.com/software-engineering-perspectives/javascript-filter
-> https://www.javascripttutorial.net/javascript-every/
-> a lot of typing, changing things and brute force testing if it works ;)
*/
