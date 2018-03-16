data = [  
    {
      firstName: "Sarah",
      lastName: "Palin",
      age: 47
    },{
      firstName: "Frank",
      lastName: "Zappa",
      age: 12
    },{
      firstName: "Rick",
      lastName: "Sanchez",
      age: 78
    },{
      firstName: "Morty",
      lastName: "Smith",
      age: 13
    },{
      firstName: "Kyle",
      lastName: "Mooney",
      age: 27
    }
  ];



function isOldEnough(person){
    return person.age >= 18
}
function byAlpha(person1, person2){
    var ln1 = person1.lastName;
    var ln2 = person2.lastName;
    return ln1.localeCompare(ln2);
    //negative number means switch order, 0 stays same, positive means stay the same
}

function sortedOfAge(arr){
    return arr.filter(isOldEnough).sort(byAlpha);
}

console.log(sortedOfAge(data));

//arrange by age first using sort
//transform each member of the sorted array into an li string
function byAge(person1, person2) {
    var age1 = person1.age;
    var age2 = person2.age;
    return age2 - age1;
}
function toLi(person) {
    return "<li>" + person.firstName + " " + person.lastName + " is " + person.age + "</li";
}

function ageSortLi (arr){
    return arr.sort(byAge).map(toLi);
}

console.log(ageSortLi(data));