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
