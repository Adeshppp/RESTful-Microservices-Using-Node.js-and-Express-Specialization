
//import the lodash module
const lodash = require('lodash');


//Create a function to find a maximum value from number array.
const findMaxValue = numbers=>lodash.max(numbers);


//Create a function to return all values from numbers array 
//which are greater than the second parameter.​
const filterValues =(numbers, threshold)=> lodash.filter(numbers,number=>number>threshold);

//Create a function to return all values of employeeName array in capital letters.
const nameInCapital = employeeNames => lodash.map(name => name.toUpperCase());



module.exports = {
  findMaxValue,
  filterValues,
  nameInCapital,
  
}


