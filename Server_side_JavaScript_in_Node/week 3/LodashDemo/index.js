const lodash = require('lodash')

const nums = [1,1,2,2,3,4,1,23];

let result = lodash.uniq(nums)
console.log(result);

const data= lodash.concat(nums,[7,8,8])

console.log(data);

const data1=lodash.fill(nums,10);
console.log(data1)

console.log(nums)

lodash.fill(nums,'*',1,5);
console.log(nums)


var countries = [
    {"key":"DE", "name" : "Deutschland"},
    {"key":"SA", "name" : "South Africa"},
    {"key":"IN", "name" : "India"},
    {"key":"US", "name" : "United States of America"}
]

var data2 = lodash.filter(countries,function(country){
    return country.key == "IN";
})

console.log(data2)