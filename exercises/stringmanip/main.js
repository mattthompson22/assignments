var readlineSync = require("readline-sync");

var firstName = readlineSync.question("What is your first name?\n");
console.log("Hello, " + firstName.toUpperCase() + "!");
var lastName = readlineSync.question("What is your last name?\n");
console.log("Your last name contains " + lastName.length + " letters. Good for you!")

var animal = readlineSync.question("What is your favorite animal?\n");

var color = readlineSync.question("What is your favorite color?\n");
console.log("Your new nickname is " + color.concat(animal));

var day = readlineSync.question("Please tell me everything about your day, honey, and please use more than 20 characters.\n");
console.log("Sorry, I got bored and only heard the first half. I think you said " + day.slice(0, day.length / 2));

var mad = readlineSync.keyInYN("Are you mad at me?\n")

var rest = readlineSync.keyInYN("Wait, I think I remember the rest. Did you say " + day.slice(day.length / 2) + "?\n")

var choose = readlineSync.question("Please choose a number between 1 and " + day.length + ".\n");

var point = readlineSync.question(day.slice(choose, day.length));


