var assertEqual = function(actual, expected) {
    if (actual !== expected) {
        throw {
            type: "fail", 
            details: {
                actual: actual, 
                expected: expected
            } msg: "expected" + actual + " to equal")};
    } else {
        console.log("success", { 
            type: "sucess", 
            details: {
                actual: actual, 
                expected: expected
            }
    })
}

function describe(message, testFunc){
    console.log("Test being run: " + message);
    try{
        testFunc();
    } catch(err){
        console.log(err);
    }
}

function sum(x, y){
    return x + y;
}

describe("sum function", function(){
    assertEqual(sum(6, 4), 10);
})

