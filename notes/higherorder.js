//takes any function as an argument and calls it

// function higherOrder(callback) {
//     callback();
// }

// var wooooo = function(){
//     console.log("WOOOOOOOO");
// }
// higherOrder(wooooo);

function doubleNumbers(numbers) {
    return numbers.map(function(number){
        return number * 2;
    });
}

function doubleNum(number, i){
    if (i % 2 === 0) {
        return number * 2;
    } else {
        return number;
    }
}


function map(arr, callback) {
    var output = [];
    for (var i = 0; i < arr.length; i++){
    //push into the output array the return value of callback with the current item as an argument
        output.push(callback(arr[i], i));
    }
    return output;
}
console.log(map([1,2,3,4,5], doubleNum));


//FILTER
function fiveAndGreater(numbers){
    return numbers.filter(function(num) {
        return num >= 5;
    })
}
console.log(fiveAndGreater([1, 2, 3, 4, 5, 6, 7]))

//reduce-goes through an array and spits out a single value
//under the hood
function reduce(arr, callback){
    var total = initialVal || arr[0];
    for (var i = 0; i < arr.length; i++) {
        total = callback(total, arr[i]);
    }
    return total;
}

function addTogether(total, val) {
    return total + val;
}

var numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, addTogether));

// actual  reduce

numbers.reduce(addTogether);

