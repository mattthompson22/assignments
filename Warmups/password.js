

//write function that returns a string of randomly generated characters 
//with a length of whatever is provided as an argument
function genPwd(pwdLength){
    //store string of potential characters
    var characterList = "12345asdfASDF$%^"
    
    //return a new string of randomly generated 
    var password = "";
    //do the following pwdLength amount of times
    for (var i = 0; i<pwdLength; i++) {
        //randomly select and store an index from the list
        var randomIndex = Math.floor(Math.random() * characterList.length);
        //add the chosen character from the index to the password
        password += characterList.charAt(randomIndex);
    }
    return password;
    //store the chosen character
    //return the new string
}
console.log(genPwd(10));