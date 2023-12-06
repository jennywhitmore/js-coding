/******My approach after some travelling through google***************/

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

/******Here comes a more basic approach to solve this kata***************/

function filterApiData(apiData, mandatoryKeys) {
  // Create an empty array to store the filtered objects
  let filteredData = [];

  // Iterate through each object in the apiData array
  for (let i = 0; i < apiData.length; i++) {
    let obj = apiData[i];
    let hasAllKeys = true;

    // Iterate through each mandatory key
    for (let j = 0; j < mandatoryKeys.length; j++) {
      let key = mandatoryKeys[j];
      // Check if the current object has the mandatory key
      if (!obj.hasOwnProperty(key)) {
        // If any mandatory key is missing, set hasAllKeys to false and break out of the loop
        hasAllKeys = false;
        break;
      }
    }

    // If the object has all the mandatory keys, add it to the filteredData array
    if (hasAllKeys) {
      filteredData.push(obj);
    }
  }

  // Return the array of filtered objects
  return filteredData;
}

/*****************The Plan:***************/
//1. Create an empty array to store the objects that meet the mandatory keys condition//
//2. Use for-loop to iterate through each object in the `apiData` array.//
//3. Inside the outer loop, use another for-loop to iterate through each mandatory key in the mandatoryKeys array, and for each key…//
//4. …use the hasOwnProperty method to check if the current object contains that key.//
//4. If not all mandatory key are found in the current object, set the hasAllKeys variable to false and break out of the inner loop.//
//5. If the object has all the mandatory keys, add it to the filteredData array.//
//6. Return the filteredData array containing the filtered objects.//
