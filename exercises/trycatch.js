// function sum(x, y) { 
// //check data types first and throw error

//     if(typeof x !== "number" || typeof y !== "number") {
//         throw "input must be a number";  
//     }
//     return x + y;
// }
// console.log(sum(2, 4));
// try {
//     sum(2,4)
// } catch (err){
//     console.log(err);
// }

var user = {username: "sam", password: "123abc"};  
function login(username, password){  
  //check credentials
  if(user.username !== username || user.password != password){
      throw "credentials don't match";
  } else {
      throw "login successful!"
  }
}
try{
    login("sam", "123abc")
} catch (err){
    console.log(err);
}