var ape = "supercalifragilistic";
var banana = "expealidocious";

// var balls = function() {
//     if (ape.length > banana.length) { 
//     return ape.concat(banana) 
//     } else if (banana.length > ape.length){
//         return ape.toLowerCase();
//     } else {
//         return banana.toUpperCase();
//     }
// }

// console.log(balls());

// var balls = function() {
//     if (ape.indexOf("a") > 6) {
//         return ape.lastIndexOf("a")
//     } else if (ape.indexOf("a") <6) {
//         return banana.slice(6, 9);
//     } else {
//         return ape.substr(3, 5)
//     }
// }
// console.log(balls());

var blackHole = "black hole";
var assHat = "ass hat";
var jim = "i have no idea what's going on";


// var balls = function() {
//     if (blackHole.concat(assHat).length > 4) {
//         return assHat.replace("hat", "hole")
//     } else {
//         return jim.split(" ")
//     } 
// }
// console.log(balls());
// .match()

var balls = function(){
    var ong = "bong tong gong kong long";
    var big = ong.match(/ong/gi);
    console.log(balls(ong));
}

