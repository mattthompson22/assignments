var ask = require("readline-sync");

var options = ['pick flowers', 'shoot guns', 'fight bears'];
var option = 'undecided';

while(options !== 'fight bears'){
  ask.keyInSelect(options, "What would you like to do today?: ");
  if(options === 'pick flowers'){
    console.log("You pick some flowers. You make a bouquet.");
  } else {
    console.log("You shoot guns.");
  }
}

console.log("You fought a bear and got beat up!");
