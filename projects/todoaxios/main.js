var axios = require("axios");

axios.get("https://api.vschool.io/mattt/todo").then(function(response) {
    var list = response.data;
});

var todoList = document.getElementById("todos");
todoList.innerHTML += "<li> " + response.data[0].title + "</li>";