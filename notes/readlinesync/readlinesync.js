var readlineSync = require("readline-sync");
//require is a built-in function
//imports a module, which is an interface
// creates an object called 'rs'
// var myName = readlineSync.question("what is your name?");
// console.log("Welcome, " + myName + "!");

var isAdmin = readlineSync.keyInYN("are you the administrator?")

if (isAdmin) {
    readlineSync.question("what is the password?")
} else {
    console.log("welcome to this useless app!");
    var options = ["menu", "tools", "help"];
    var index = readlineSync.keyInSelect(options, "What would you like to do next?")
    console.log()
}


