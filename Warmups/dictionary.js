//enter word/definition
//check to see if word is already present
//if not present, add it
//if present, display definition


var dictionary = {};

var entry = function(word, definition){
    if (dictionary.word === "word"){
        return dictionary.definition;
    } if (dictionary.word !== "word"){

    }
}

//create dictionary object
//function should either add or find a given word
    //adding: 
    // set the word as a property on the object
    //set the definition as a value to that property

//searching:
    //check if dictionary has a property of the word you're looking for

//if i'm adding a word, i need to provide a definition

var dictionary = {};
function lookItUp(word, def) {
    if (dictionary.hasOwnProperty(word)) {
        return dictionary[word];
    } else {
        dictionary[word] = def;
        return true;
    }
}
console.log(lookItUp("absquatulate", dictionary, "verb: to leave abruptly"));
console.log(dictionary.absquatulate);

var Dictionary = function (language) {
    this.language = language;
    this.content = {}
}

Dictionary.prototype.addWord = function(word, def){
    word = word.toLowerCase();
    if(this.content.hasOwnProperty(word)){
        throw "that word already exists";
    } else {
        this.content[word] = def;
    }
}