//i've logged into a website
//server sent me a token to use authorization
//store token in local storage to save for later
//local storage:
// var token = "J:SDFJL";
//must be key and value
// localStorage.setItem(("token", token));

//you don't want to log in every time you go to a website

// function login (){
//     if (localStorage.getItem("token")){
//     alert("Welcome! You have been logged in automatically!");
//     } else {
//         alert("sorry, you must log in");
//     }
// }

// var cart = [
//     {
//         type: "transistor radio",
//         price: 2
//     }
//     {
//         type: "vinyl record",
//         price: 15,
//     }
//     {
//         type: "iphone",
//         price: 1000,
//     }
// ]
// localStorage.setItem("cart", JSON.stringify(cart));
// console.log(JSON.parse(localStorage.getItem("cart")));

var str = "im a string";
localStorage.setItem("str", str);
var num = 10;
localStorage.setItem("num", num);

var bool = true;
sessionStorage.setItem("bool", bool);

var obj = {
    key: "value",
    method: function(){
        console.log("im a method");
    }
}
localStorage.setItem("obj", JSON.stringify(obj));
console.log(JSON.parse(localStorage.getItem("obj")));

var arr = [4, true, "yellow"];

localStorage.setItem("arr", arr);
console.log(JSON.parse(localStorage.getItem("arr")));


