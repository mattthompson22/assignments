// template literals
const person = {
    name: "ben",
    age: 29,
    birthday: "Apr 29, 1988"
}
console.log("hello " + person.name + ", you are " + person.age + "years old");
console.log(`hello ${person.name}, you are ${person.age} years old`)

//spread operator

const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = [1, 2, ...num2, 3, 4, 5]
const num4 = [...num2, ...num1];

const str = "afasdf";
const arr = [...str];

const orig = [1, 2, 3, 4, 5];
const copy = [...orig];

//deconstructing/destructuring
const names = ['ilian', 'danielle', 'will', 'morgan', 'laney', 'matt'];
let [ilian, , , morgan, laney, ] = names;
//same as
// let ilian = names[0], morgan = names.[3], laney = names.[4];

const house = {
    bedrooms: 4,
    bath: 3,
    kitchen: 1.5,
    price: 1000000
}
const {
    bedrooms,
    bath,
    kitchen,
    price
} = house;

// same as

// console.log(`for sale: \nBedrooms: ${house.bedrooms}\nBathrooms: ${house.bath}`);

//default parameters
function exponent(x, y=2){
    return Math.pow(x, y);
}
console.log(exponent(3));

//object literals
let name = "ben";
let age = 20;

let person = {
    name,
    age
}

const expressArr = () => {
    //function body
}
//anonymous
()=>{}

[1, 2, 3, 4, 5].filter((num) => {
    return num % 2;
})

//functions can 
    //have no paramaters
    //one paramater
    // x => {}
    // //more paramaters
    // (param1, param2) => {}
    
    // //have only one line in function body (can omit curly braces)
    // (x, y) => x + y;
    // //more than one expression in function body
    //     //must include curly braces
    //     (x, y) => {
    //         x = y;
    //         console.log(x);
    //     }
    // //return an object
    //     (x, y) => ({
    //         x,
    //         y
    //     })

//this



// function speak(){
//     console.log(`hi, my name is ${this.name}`)
// }
// function introspect(){
//     console.log(this);
// }
// const person = {
//     name: "ben",
//     speak,
//     introspect
// }

// const Person = function(name, age){
//     this.name = name;
// }
// Person.prototype.introspect = introspect;

// const steven = new Person("steven");
// steven.introspect();

// const people = [new Person("ben"), new Person("ilian"), new Person("steven")];

// people.forEach(function(person1, person2){

// });

//sometimes we want to refer to a different 'this' than the one we have available
// const data = this;
// const getData = function(callback){
//     let rawData = "abasdf"
//     callback(rawData);
// }
// getData(function(data) {
//     this.data = data;
// })

//OR

// const getData = cb => {
//     let rawData = "adfl;k";
//     callback(rawData);
// }
// getData(info => {
//     this.info = info;
// })

// const Traveler = function(name){
//     this.name = name;
//     this.message = "blah blah blah";
//     this.translator = {
//         translate: function(){
//             console.log(this.message);//won't work because this.message refers to translator object
//         }
//     }
// }
// const steven = new Traveler("steven");
// steven.translator.translate();

// const Traveler = function(name){
//     this.name = name;
//     this.message = "blah blah blah";
//     this.translator = {
//         translate: ()=>console.log(this.message)//arrow function doesn't 
        
//     }
// }
// const steven = new Traveler("steven");
// steven.translator.translate();

//constructor functions
// const Animal = function(name){
//     this.hasCellWall = false;
// }
// Animal.prototype.makeSound = function(){
//     console.log(this.sound);
// }


// const Mammal = function(sound){
//     Animal.call(this, sound);//call this function, but use the "this" from the Animal property
//     this.hasFur = true;
//     this.liveBirth = true;
// }
// Mammal.prototype = Object.create(Animal.prototype)

// const cow = new Mammal("moooo");
// cow.makeSound();

//how you define methods in a class
class Animal {
    constructor(sound){
        this.hasCellWall = false;
        this.sound = sound;
    }
    makeSound(){
        console.log(this.sound);
    }
}

class Mammal extends Animal {
    constructor(sound){
        super(sound)
        this.hasFur = true;
        this.liveBirth = true;
    }
}
const cow = new Animal("moo");

cow.makeSound()
console.log(cow);
