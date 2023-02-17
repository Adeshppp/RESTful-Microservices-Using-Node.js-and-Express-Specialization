

function Engine(cylinders, size) {
  this.cylinders = cylinders;
  this.size = size;
}

function Car(make, model, color, cylinders, size) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.engine = new Engine(cylinders, size);
}

let AdeshCar= new Car('Eagle','Talon TSI', 'Silver', 4,2.5);
console.log(AdeshCar)
console.log(AdeshCar['make'])