var goombaCount = 0;
var goombaInput = document.getElementById("numberGoombas");

var countGoombas = function(){
    goombaCount= parseInt(goombaInput.value) *5;
    total.innerHTML = Number(goombaCount);
}

goombaInput.addEventListener("input", countGoombas);

var boBombCount = 0;
var boBombInput = document.getElementById("numberBoBombs");

var countBoBombs = function(){
    boBombCount= parseInt(boBombInput.value) * 7;
    total.innerHTML = Number(boBombCount);
}

boBombInput.addEventListener("input", countBoBombs);

var cheepCheepCount = 0;
var cheepInput = document.getElementById("numberCheepCheeps");

var countCheepCheep = function(){
    cheepCheepCount= parseInt(cheepInput.value) * 11;
    total.innerHTML = Number(cheepCheepCount);
}

cheepInput.addEventListener("input", countCheepCheep);

// var result = function() {
//     return Number(countCheepCheep() * 11);
//     console.log(Number(countCheepCheep() * 11));
// }

var total = document.getElementById("totalCost");

// total.innerHTML = Number(countGoombas()) + Number(countBoBombs()) + Number(countCheepCheep());

// document.getElementById("killButton").addEventListener("click", function() {
//     document.getElementById("totalCost").innerHTML= (goombaInput * 5) + (boBombInput * 7) + (cheepInput * 11)
// })


