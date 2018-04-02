import React from "react";
// import people from "./index";

function Peoplelist(props){
    console.log(props);
    return (
        <ol style={{border: "3px solid blue", width: "50%"}}>
            <h2>{props.monkeys.firstName}</h2>
            <h4>{props.monkeys.email}</h4>
        </ol>
    )
}

export default Peoplelist;