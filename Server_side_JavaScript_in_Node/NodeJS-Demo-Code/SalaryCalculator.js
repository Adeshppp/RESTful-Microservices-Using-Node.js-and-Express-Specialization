// Write a JavaScript program that accepts name, age, base salary of an employee from the user, validate the age and salary while taking the input and then calculate
// 1. The HRA
// 2. Special Allowances
// 3. Provident fund and
// 4. Gross Monthly pay
// 5. Display the name and annual gross earnings of the employee.




var name = process.argv[2]
var age= parseInt(process.argv[3])
var basicSalary = parseFloat(process.argv[4])

if(age<=0) console.log("Invalid age. enter the valid age")
else if(basicSalary<=0) console.log("Invalid Salary, Enter the valid salary")
else{
    const hra = (50*basicSalary)/100
    const specialAllowance= (30*basicSalary)/100
    const pf = (12*basicSalary)/100
    
    let grossSalary = basicSalary + hra + specialAllowance - pf
    let annualGrossSalary = 12* grossSalary
    
    console.log("the annual gross income of ",name," is ",annualGrossSalary)
    
    // console.log('the annual gross salary of ${name} is ${annualGrossSalary}.')
}
