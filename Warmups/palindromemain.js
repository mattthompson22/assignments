function isPalindrome(str) {
    //lowercase all letters
    var alphabet = "abcdefghijklmnopqrstuvwxyz"

    str = str.toLowerCase();
    //remove symbols
    var normlized = '';
    for (var i=0; i<str.length; i++) {
        if (alphabet.indexOf(str[i]) !== -1) {
            normalized += str[i];
        }
    }

    var reverseStr = "";
    for (var j =normalized.length -1; j>=0; j--){
        reverseStr += normalized[j];
    }

    return normalized === reverseStr;
    // str = str.replace(/\W+/g, "");
    // console.log(str);

    //remove spaces
    //reverse original string
    //check if reveresed string is equal to old string
        //if so, true
        //if not, false
}
//or
var reverseStr = normalized.split("").reverse().join("");

