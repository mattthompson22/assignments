var form = document.getElementById("form")
var input = document.getElementById("input");
var list = document.getElementById("list");


var listAdd = function (event) {
    event.preventDefault();
    var deleteButton = document.createElement("button");
    deleteButton.innerHTML = "x";
    var li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    li.appendChild(deleteButton);
    deleteButton.addEventListener("click", function(){
        list.removeChild(li);
    });
}
form.addEventListener("submit", listAdd);
