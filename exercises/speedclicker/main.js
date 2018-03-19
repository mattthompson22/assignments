var total = document.getElementById("total");
var count = 0;
var button = document.getElementById("button");
button.addEventListener("click", function (){
    // for each button click, add to click count
        count++;
        total.innerHTML = count;
        localStorage.setItem("count", count);
    // display count for user
    //make it so number stays on screen after site refresh
});
total.innerHTML = localStorage.getItem("count");