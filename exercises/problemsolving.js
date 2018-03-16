//loop through array
//identify if string contains '!'
//is so, return that string
var array = ["#3", "$$$", "C%4!", "Hey!"]
var arrayNew = [];

var lettersWithStrings = function () {
    for (i = 0; i < array.length; i++)
        if (array.includes("!")) {
            return arrayNew;
        }
}
console.log(lettersWithStrings(array));













// var isDivisible = function (num1, num2) {
//     if (num1 % num2 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isDivisible(15, 4));