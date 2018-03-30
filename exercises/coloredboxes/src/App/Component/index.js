import React from "react";

function Component (props){
    const {title, subtitle, information, backgroundColor} =
        props; 

    return (
        <div className = {backgroundColor}>
            <h1> {title} </h1>
            <h3> {subtitle} </h3>
            <p> {information} </p> 
        </div>
    )
}

export default Component;