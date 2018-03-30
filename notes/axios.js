var todoUrl = "https://api.vschool.io/ben/todo/";
+
+function createTodoProperty(elem, text) {
+    var prop = document.createElement(elem);
+    prop.innerHTML = text;
+    return prop;
+}
+
+function createTodoInfo(todo, parent) {
+    parent.appendChild(createTodoProperty("h3", todo.title));
+    parent.appendChild(createTodoProperty("p", todo.description));
+    parent.appendChild(createTodoProperty("p", todo.price));
+}
+
+function addToDOM(todo) {
+
+    let li = document.createElement("li");
+    li.id = todo._id;
+
+    // append todo info to the list item
+    createTodoInfo(todo, li);
+
+    
+    // append label/input to li
+    li.appendChild(label);
+
+    //finally append the li element to the DOM
+    todoList.appendChild(li);
+}
+
+var todoList = document.getElementById("todo-list");
+
+axios.get(todoUrl).then(function (response) {
+    var todos = response.data;
+    for (var i = 0; i < todos.length; i++) {
+        // create li element
+        let todo = todos[i];
+        addToDOM(todo);
+    }
+})
+
+// posting
+var form = document.getElementById("form");
+var inputData = {};
+
+form.addEventListener("submit", function (e) {
+    e.preventDefault();
+    // set the values of my inputs onto inputdata obj
+    inputData.title = e.target.title.value;
+    inputData.description = e.target.description.value;
+    inputData.price = e.target.price.valueAsNumber;
+    inputData.imgUrl = e.target.imgUrl.value;
+    //post to server:
+    axios.post(todoUrl, inputData).then(function (response) {
+        var todo = response.data;
+        addToDOM(todo);
+    });
+}); 


