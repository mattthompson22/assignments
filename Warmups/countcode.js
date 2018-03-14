//loop through string to see if it contains 'co_e'
//if it does, count each instance
//return count
// var string = "";
// var substring = "code";
// var results = ""
// function countCode(string) {
//     for (var i = 0; i < string.length; i++)
//         count = 0;
//         if (string.includes(substring)) {
//             count++;
//         } 
// }
// console.log(countCode("codexxcode"));

//find "code" in string

var countCode = function (string) {
    var count = 0;
    for(var i = 0; i < string.length; i++) {
        if (string[i] === "c") {
            if (string[i+1] === "o"){
                if (string[i+3]==="e"){
                    count++;
                }
            }
        }
    }
    return count;
}

//OR

console.log(countCode("codexxcope"));

var countCode = function (string) {
    var count = 0;
    for(var i = 0; i < string.length -3; i++) {
        if (string[i] +  string[i+1] + string[i+3]==="coe"){
            count++;
        }
    }
    return count;
}
console.log(countCode("codexxcope"));

//OR regex

function countCode(string) {
    var count = 0;
    var regEx = /co/we/g;//var __ = /expression, /w = any word character, g=global
    //we know the index is tracked with every regex.exec call
    //we know that if there is no match, it returns 'null'
    while(regEx.exec()){
        count++;
    }
    return count;
}
console.log(countCode("code"));

