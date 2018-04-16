// const factorial = num => {
//     if (num === 1)
//         return 1;
//     else 
//         return num * factorial(num-1);
// }
// console.log(factorial(6));

//GAME OF THREES

const gameOf3 = (n, counter = 0) => {
    if (n === 1)
        return counter;
    else if (n % 3 === 0)
        return gameOf3 (n/3, counter + 1)
    else if ((n + 1) % 3 === 0)
        return gameOf3 ((n + 1)/3, counter + 1)
    else    
        return gameOf3(n/3, counter + 1)
}
console.log(gameOf3(2));