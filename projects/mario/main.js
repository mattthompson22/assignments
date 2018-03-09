// prices
var goombaPrice = 5;
var boBombPrice = 7;
var cheepCheepPrice = 11;

var goombaInput = document.getElementById("numberGoombas");
var boBombInput = document.getElementById("numberBoBombs");
var cheepInput = document.getElementById("numberCheepCheeps");

var totalCost = document.getElementById("totalCost");


// any change in one input, changes the total

    // put an event listener on each input box
    // calls the total() function

// total is made up of each input value multiplied by its corresponding cost

var total = function(){
    var numberGoomba = Number(goombaInput.value);
    var numberBoBombs = Number(boBombInput.value);
    var numberCheepCheeps= Number(cheepInput.value);

    var goombaCost = numberGoomba * 5;
    var boBombCost = numberBoBombs * 7;
    var cheepCheepCost = numberCheepCheeps * 11;

    totalCost.innerHTML = goombaCost + boBombCost + cheepCheepCost;

}

goombaInput.addEventListener("input", total);
boBombInput.addEventListener("input", total);
cheepInput.addEventListener("input", total);
    // find the values in each input field
    // multiply each value by x cost
    // add the result together
    // print it to the page


