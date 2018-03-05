var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop();
fruit.shift();
fruit.push(1);
vegetables.push(3);

var food = fruit.concat(vegetables);

food.splice(4, 2);

food.reverse();


// console.log("fruit: ", fruit);  
// console.log("vegetables: ", vegetables); 
// console.log(fruit.length);
console.log(food);