import React from "react";

function Peoplelist(props){
    console.log(props);
    return (
        <ol>
            {/* <h1>{props.monkeys.firstName}</h1> */}
            {/* <h1>{this.state.value}</h1> */}
            <ul>{props.monkeys.firstName}</ul>
        </ol>
    )
}

export default Peoplelist;