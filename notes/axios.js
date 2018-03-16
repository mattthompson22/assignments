var axios =require("axios");

axios.get("https://swapi.co/api/people").then(function(response) {
    var people = response.data;
    console.log(people);
});

var todoList = document.getElementById("todos");
todoList.innerHTML += "<li>" + response.data[0].title + "</li>";

axios.post("url", {title: "string"}).then (function(response) {
    console.log(response.data);
});



