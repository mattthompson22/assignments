import React from "react";

function Hero(props){
    // console.log(props);
    return (
        
        <div>
            <h2 onClick = {() => props.monkeyTalk(props.monkey.catchPhrase)}>{props.monkey.name}</h2>
            <img onClick = {() => props.monkeyTalk(props.monkey.catchPhrase)} style = {{maxWidth: "200px", maxHeight: "300px"}} src={props.monkey.pic} />
        </div>
    )
}

export default Hero;