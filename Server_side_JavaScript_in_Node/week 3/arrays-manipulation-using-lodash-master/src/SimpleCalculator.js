

//Create function addNumbers which will take two parameters add the numbers 
//and return the result
const addNumbers = (a,b)=>a+b;

//Create function subNumbers which will take two parameters subtract the numbers 
//and return the result
const subNumbers=(a,b)=>a-b;

//Create function mulNumbers which will take two parameters multiply the numbers 
//and return the result
const mulNumbers=(a,b)=>a*b;


//Create function divNumbers which will take two parameters divide the numbers 
//and return the result
const divNumbers=(a,b)=>{
  if(a,b) return a/b;
  return "Please provide valid numbers..!";
}


module.exports = {
  addNumbers,
  subNumbers,
  mulNumbers,
  divNumbers
}