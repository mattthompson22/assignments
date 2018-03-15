var todoList = document.getElementById("todo list");

var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {  
    if (xhr.readyState == 4 && xhr.status == 200) {
        var jsonData = xhr.responseText;
        var data = JSON.parse(jsonData);
        for(var i=0; i<data.length; i++) {
            var todoObj = data[i];
            var li= document.createElement("li");
            li.innerHTML = todoObj.title;
            todoList.appendChild(li);
        }
    }
}


        // var name = data.name;
        // document.getElementById("demo1").innerHTML = "JSON results: " + jsonData;
        // document.getElementById("demo2").innerHTML = "Parsed JSON's 'name' property: " + data.name;
        // spaceshipurl = data.starships[0];
        // console.log(spaceshipurl);
    


xhr.open("GET", "https://swapi.co/api/people/1/", true);  
xhr.send();

//when page loads, send request for data
//with data, convert to javascript
//create necessary html elements which will display html data

