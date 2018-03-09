var readlineSync = require("readline-sync");

// asks for a number
//ask for a second number
//ask which operation
//perform operation

//prompts
//get number
//get other number
//choose operation

//chooser function
    // selects which function to perform and calls it using the numbers as arguments

//arithmetic functions
var num1 = readlineSync.question("Please enter your first number.");
var num2 = readlineSync.question("Please enter you second number.");
var operations = ["add", "subtract", "multiply", "divide"];
var index = readlineSync.keyInSelect(operations, "Choose the operation you want to perform.");


   
if (operations[index] === "add"){
    console.log("The result is: " + (parseInt(+num1 + +num2)));
    } else if (operations[index] === "subtract") {
    console.log("The result is: " + num1 - num2);
    } else if (operations[index] === "multiply") {
    console.log("The result is: " + num1 * num2);
    } else if (operations[index] === "divide") {
    console.log("The result is: " + num1 / num2);
    }
