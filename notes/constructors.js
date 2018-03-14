//object literal
// var obj= {
//     key: value
// }

// user object literal
// var user1= {
//     name: "ben",
//     email: "bbgrabbag@gmail.com",
//     password: "dfakjdafjk"
// }

//function expression
// var User= function(name, email, password){
//     this.name = name;
//     this.email = email;
//     this.password = password;
// }
//function decaration
// function User(){

// }
//calling the constructor function:
// let ben = new User("ben", "bbgrabbag@gmail.com", "dfakjdafjk");

// var database = [
//     {
//         name: "ben",
//         email: "bbgrabbag@gmail.com",
//         password: "dfakjdafjk"  
//     }
// ]
// function addToDatabase(user) {
//     database.push(user);
// }
// function createNewUser(name, email, password){
//     let newUser = new User(name, email, password);
//     addToDatabase(newUser);
//     displayDatabase();
// }
// createNewUser("laney", "lanesmagoo@gmail.com", "12346")

// User.prototype.changePassword = function (newPwd) {
//     this.password = newPwd;
// }
// ben.changePassword("thisismynewpassword");
// console.log(ben);

function User(name,){
    this.name = name; 
    }

//instantiating a constructor:
var catherine = new User("catherine");
catherine.speak();

user.prototype.speak = function(){
    console.log("my name is " + this.name);
}
catherine.speak();