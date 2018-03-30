//show current todos
    //link to API and display todos on page
//can add new todos/price/description to page and API
    //use form inputs
    //submit button
        //appends todo inputs to li
        //adds todo inputs to API    





const newTodoProperty = function (element, text){
    let property = document.createElement(element);
    property.innerHTML = text;
    return property;
} 

const listInfo = function (todo, parent){
    parent.appendChild(newTodoProperty("h2", todo.title));
    parent.appendChild(newTodoProperty("h4", todo.description));
    parent.appendChild(newTodoProperty("h4", todo.price));
}
const toDoList = document.getElementById("toDoList");

const createTodoLi = function (todo){
    const li = document.createElement("li");
    li.id = todo._id;
    createLi(todo, li);
    toDoList.appendChild(li);
}

const form = document.getElementById("form");

axios.get("https://api.vschool.io/mattt/todo").then(function(response){
    var toDos = response.data;
    for (let i = 0; i < toDos.length; i++) {
        let listItem = toDos[i];
        createTodoLi(listItem);
    }
})



form.addEventListener("submit", function(event){
    event.preventDefault();
    const input = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value
    }
    
    axios.post("https://api.vschool.io/mattt/todo/", input).then(function(response){
        form.append(createTodoLi(response.data));
        
    })
})

    // const deleteButton = document.createElement("button");
    // deleteButton.innerHTML = "x";
    // li.appendChild(deleteButton);
    // deleteButton.addEventListener("click", function(event){
    //     axios.delete(toDoUrl + todo._id).then(function(response){
    //         todo
    //     })
    //     list.removeChild(li);
 
