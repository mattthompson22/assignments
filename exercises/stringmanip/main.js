var readlineSync = require("readline-sync");

var firstName = readlineSync.question("What is your first name?");
console.log("Hello, " + firstName.toUpperCase() + "!");
var lastName = readlineSync.question("What is your last name?");
console.log("Your last name contains " + lastName.length + " letters. Good for you!")

var animal = readlineSync.question("What is your favorite animal?");

var color = readlineSync.question("What is your favorite color?");
console.log("Your new nickname is " + color.concat(animal));

var day = readlineSync.question("Please tell me everything about your day, honey, and please use more than 20 characters.");
console.log("Sorry, I got bored and only heard the first half. I think you said " + day.slice(0, day.length / 2));

var mad = readlineSync.keyInYN("Are you mad at me?")

var rest = readlineSync.question("Wait, I think I remember the rest. Did you say " + day.slice(day.length / 2) + "?");

var choose = readlineSync.question("Please choose a number between 1 and " + day.length + ".");

var point = readlineSync.question(day.slice(choose, day.length));


