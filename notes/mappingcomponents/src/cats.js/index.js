import React from "react";
import Friend from "./App/Component";

const friends = [
    {name: "Mighty Morphin' Power Rangers", age: 24},
    {name: "Batman", age: 45},
    {name: "Wonder Woman", age: 300},
    {name: "Cat Woman", age: 26},
    {name: "Superman", age: 30},
    {name: "John", age: 21},
    {name: "Quasimodo", age: 530}
];
// const friendsLis =friends.map((person, i) => <li key = {person.name + i}> {person.name} - {person.age}</li>);
const friendsLis = friends.map(function(human, i){
    return <Friend key={person.name + i} human= {person} />;
})


const App = function(){
    return (
        <ul>
            <FriendsLists />
        </ul>
    )
}




export default App;