import React from "react";
import data from "./data.json";
import Hero from "./Hero";

function SuperList(){
    function speak(phrase){
        alert(phrase);
    }
    
    return (
        <div>
            {data.map((objHero, i) => <Hero key = {objHero.name + i} monkey = {objHero} monkeyTalk = {speak}/>)}
        </div>
    )
}

export default SuperList;