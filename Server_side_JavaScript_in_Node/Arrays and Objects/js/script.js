

// Using Array Literals
// let carMaker = ["Nissan", "Ford", "Tata"];



// using constructor
// let carMaker=new Array("Nissan", "Ford", "Tata");

// carMaker.push("BMW");//at the end of a array
// carMaker[0]="Audi";
// carMaker.unshift("Toyota");//at the start of an array
// carMaker.pop();//removes last element
// carMaker.shift();//removes first element
// console.log(carMaker)



//Array of Arrays

let cars=[]

let make="Eagle";
let model="Talon TSI";
let color="Blue";

let car=[];

car.push(make);
car.push(model);
car.push(color);

cars.push(car)
console.log(cars);