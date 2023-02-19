// Define a function to calculate the total marks and return a promise 
// const calculateTotalMarks = (math,english,science,social,language) =>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if(!(math||english||science||social||language)) reject("NUll values for marks")
//             resolve(math+english+science+social+language);
//         },1000)
   
//         }) 
// }






const calculateTotalMarks = (math, english, science, social, language) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (math === null || english === null || science === null || social === null || language === null) {
          reject("Null values for marks");
        } else {
          resolve(Number(math) + Number(english) + Number(science) + Number(social) + Number(language));
        }
      }, 1000);
    });
  }
  
// Define a function to calculate average marks and return a promise
const calculateAverageMarks = (totalMarks) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(!totalMarks) reject("Null values for marks")
            resolve(totalMarks/5)
        },2000)

    }) 
}
// Define a function to calculate grade and return a promise
const calculateGrade = (averageMarks)=>new Promise((resolve,reject)=>{
    setTimeout(()=>{
        if(!averageMarks) reject("Null values for marks")
       else if(averageMarks>=90) resolve("A+")
       else if(averageMarks>=80 && averageMarks<=89) resolve("A")
       else if(averageMarks>=70 && averageMarks<=79) resolve("B")
       else if(averageMarks>=60 && averageMarks<=69) resolve("C")
       else if(averageMarks>=50 && averageMarks<=59) resolve("E")
       else if(averageMarks<50) resolve("F")
    },3000)
       
    })   
const grade = async(math,english,science,social,language)=>{
    const total= await calculateTotalMarks(math,english,science,social,language);
    const avgMarks = await calculateAverageMarks(total)
    const finalGrade = await calculateGrade(avgMarks)
    return finalGrade
}

var math = process.argv[2]
var english = process.argv[3]
var science = process.argv[4]
var social = process.argv[5]
var language = process.argv[6]

grade(math,english,science,social,language).then(result=>{console.log("grade is "+result)}).catch(error=>{console.log(error)})
// module.exports = {
//     calculateAverageMarks,calculateGrade,calculateTotalMarks
// }





  