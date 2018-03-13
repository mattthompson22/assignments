// var anticaps = function(""){
//     if (character == character.toUpperCase()){
//         return character.toLowerCase();
//     }
// }
// console.log(anticaps("ASs"));

// var string = "";
// var character = "";
// function anticaps(string){
//     if (character == character.toUpperCase()){
//         return character.toLowerCase;
//     } else {
//         return character.toUpperCase;
//     }
// }
// console.log(anticaps("AsS"));

// test if character is capital
//change capital to lowercase
//test if character is lowercase
//change character to uppercase

// var string = "";
// var newString = "";
// function anticaps(string){
//     for(i=0; i<string.length; i++){
//         if (string[i] == string.toUpperCase()){
//             return string.toLowerCase();
//         }
//     }
//     return newString;
// }
// console.log(anticaps("AsS"));

function reverseCaps(str){
    var newString = "";
    for (var i = 0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newString += str[i].toLowerCase();
        } else {
            newString += str[i].toUpperCase();
        }
    }
    return newString;
}
console.log(reverseCaps("DKLSl;kadfs"));