//write constructor function that makes objects with 3 properties: type, hitpoints and defense
//write function that allows us to choose a random enemy



var Enemy = function (){
    this.type = this.getRandomType();
    this.hitPoints = this.genHitPoints;
    this.worldSeriesRings = this.getWorldSeriesRings;
}

Enemy.prototype.getRandomType = function() {
    var enemyTypes = ["Ancient Dragon", "Prowler", "MightyGrunt"];
    var randIndex = Math.floor(Math.random() * enemyTypes.length);
    return enemyTypes(randIndex);
}

Enemy.prototype.genHitPoints = function () {
    switch(this.type){
        case "Ancient Dragon": 
            return Math.floor(Math.random() * 21 + 80);
        case "Prowler":
            return Math.floor(Math.random() * 30 + 50);
        case "MightyGrunt":
            return Math.floor(Math.random() * 30 + 20);
    }
}
function printEnemies(){
    for (var i = 0; i <= 100; i++) {
        console.log(new Enemy());
    }
}
    

