// var noDuplicates = function(string) {
//     var unique = " ";
//     var duplicate = " ";
//     for (var i = 0; i < string.length; i++) {
//         if (unique.indexOf(string[i])==-1){
//             unique += string[i];
//         }
//     }
//     return unique;
//     return duplicate;
// }

// console.log(noDuplicates("barabbas"));


function removeDuplicateCharacters(str) {
    let output = {
        noDupes: "",
        extras: ""
    }
    for (var i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === i) {
            output.noDupes += str[i];
        } else {
            output.extras += str[i];
        }
    }
    return output;
}
console.log(removeDuplicateCharacters("bookkeeper larry"));
