

const calculateWeightLostInAMonth = (cycling,running,swimming,extraCalorieInTake) =>{
let weightLostInAMonth = 0;
console.log(cycling," ",running," ",swimming," ",extraCalorieInTake)

   // write logic here 
   if(cycling<=0 || running<=0 || swimming <= 0 || extraCalorieInTake<=0) weightLostInAMonth=-1;
   else{
      let weeklyCalories=4*(((cycling*20)/30)+((running*20)/30)+((swimming*20)/30))
      let perDayCalories =  (34*extraCalorieInTake)
      weightLostInAMonth= (weeklyCalories+perDayCalories)/1000;
   }
   return weightLostInAMonth;
}

module.exports = calculateWeightLostInAMonth






