var arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function multiples(arr) {
    var output = [];
    for (var i = 0; i < arr.length; i+=3) {
        output.push(i);
    }
    return output;
}

function multiples(arr) {
    var output = [];
    for (var i = 100; i > 0; i--) {
        output.push(i);
    }
    return output;
}

//create an array
//fill the array with 3 arrays
//each inner array will have 3 "x"
//inject the arrays with 'x's into the bigger array
//return bigger array

function chessBoardGen(num) {
    var output = [];
    for (var i = 0; i < num; i++){
        output.push([])
        for (var j = 0; j < num; j++){
            output[i][j] = "X"
        } 
    }
    return output;
}
console.log(chessBoardGen(8));

// while (true) {
    //do the thing
// }

var rs = require("readline-sync");
var playerLife = 3;

var playTheGame = function(){
    var playerName = readline-sync.question("What's your name?");
    console.log ("thanks " + playerName)
    if (playerName === "ben") {
        console.log("you're stealing my life");
        playerLife--;
        console.log(playerLife);
    } else if (playerName === "jamie"){
        console.log("more life for you")
        playerLife++;
        console.log(playerLife);
    }
}
while (playerLife > 0) {
    playTheGame();
}

console.log("you lose");

if (playerOneWins) {
    alert("congrats player one")
} else if (playerTwoWins) {
    alert("congrats player two")
} else {
    alert("how did that happen?")
}