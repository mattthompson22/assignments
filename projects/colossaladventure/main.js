var rs = require("readline-sync");
//villains: cubs, yankees, red sox

//what is wincon and what is losecon?
    //losecon = hitpoints = 0
    //wincon = kill three enemy/collect their items

console.log("Welcome to this fun game!");

var playerName = rs.question("What is your name?");

//while loop continues as long as hp > 1 or wincon not met

var player = {
    name: playerName,
    hp: 100,
    attack: undefined,
    enemiesKilled : 0
}

var Enemy = function(){
    attack: Math.floor(Math.random() * 20)+ 10;
    this.hp = 50;
    //etc.
}

// while(player.hp > 0 && player.enemiesKilled < 3) { 
//     playGame();
// }
// }

// if(//losecon met ...)