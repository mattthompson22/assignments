//input a string
//loop through string to find what letters appear
//for each letter add to its count
//print number of times each letter appears to console

// var string = "slimy smelly solution";
// var output = {};

// var charCount = function (string, character) {
//     count = 0;
//     for (var i = 0; i < string.length; i++) {
//         if (string[i] === character)
//         output[i] = 1;
//     } else {
//         output[i] = count++;
//     }
//     return output;
// }
// console.log(charCount(string));

function letterFreq(str) {
    var ouptut = {};
    for (var i = 0; i < str.length; i++) {
        if (output.hasOwnProperty(str[i])) {
            output[str[i]]++;
        } else {
            output[str[i]] = 1
        }
    }
    return output;
}
