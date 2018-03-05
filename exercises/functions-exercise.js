// var add = function(a, b) {
//     return a + b;
// }
// var sum = add(4, 4);
// //console.log(sum);

// var highestNumber = function(a, b, c) {
//     return Math.max(a, b, c);
// }
// var high = highestNumber(2, 5, 1);
//// console.log(high);

// var oddEven = function(a) {
//     if (a % 2 === 0) {
//         return "is an even number";
//     } else {
//         return "is an odd number";
//     }
// } 
// var oddEvenAnswer = oddEven(20);
//// console.log(oddEvenAnswer);

var lengthWord = function(string) {
    if (string.length <= 20) {
        return string.concat (string);
    } else {
        return string.substr(0, string.length /2);
    }
}
var balls = lengthWord("iliketoeatpizzaandgotosleep");
console.log(balls);
