const util = require('./util')

var myStringArray = ['John','Jenny','Ben','Johnson','ADESH','Mike']



function getCapital(myStringArray){
    return util.getInUpperCase(myStringArray);
}

console.log(getCapital(myStringArray))


function getInSmaller(myStringArray){
    return util.getInLowerCase(myStringArray);
}
console.log(getInSmaller(myStringArray))


function getIndex(myStringArray,element){
    return util.getIndexPosition(myStringArray,element);
}

console.log(getIndex(myStringArray,"ADESH"))
