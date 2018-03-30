
//normal way
// function addTwoNumbers(a, b){
//     return a + b;
// }

// const addTwoNumbers = (a, b) => a + b //if you get rid of the curly braces, you don't need to add 'return'

// function Vehicle(mk, mdl, wheelCount) {
//     this.make = mk;
//     this.model = mdl;
//     this.numWheels = wheelCount;
// }
// Vehicle.prototype.go = function(){
//     console.log("vroom");
// }

// const car = new Vehicle("toyota", "camry", 4, "sedan")
// car.go();

// class Vehicle{
//     constructor(make, model, numWheels){
//         this.make = make;
//         this.model = model;
//         this.numWheels = numWheels;
//     }
//     goFast(){
//         console.log(`I'm a ${this.make} with ${this.numWheels} wheels`);
//     }
// }
// const car = new Vehicle("toyota", "camry", 4)
// car.goFast();

// class Truck extends Vehicle{
//     constructor(make, model, numWheels){
//         super(make, model, numWheels)
//         this.wheelSize = this.wheelSize;
//     }
// }

// const truck = new Truck("Mack", "Pinnacle", 18, "22.5 in");
// truck.goFast();

const nums = [12, 23, 34,42, 56, 67];
console.log(Math.max(12, 23, 34, 56, 67))
//OR//
console.log(Math.max(...nums));

// to make a copy
const numsCopy = [...nums];

const [num1, num2, , num3] = 