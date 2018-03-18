var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];  
var alphabet = "abcdefghijklmnopqrstuvwxyz"; 
var array = [];
//extract index 0 from people []
//add it to array 
//split alphabet into array


var forception = function (){
    for (var i=0; i<people.length; i++) {
        array.push(people[0]);
        for (var j=0; j < alphabet.length; j++) {
            array[j].push(alphabet.split([j]));
        }
    }
}
console.log(forception(array));

