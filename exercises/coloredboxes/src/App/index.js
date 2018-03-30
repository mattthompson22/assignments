import React from "react";
import Component from "./Component";


function App(){
    const input1 = {
        title: "",
        subtitle: "",
        information: "",
        backgroundColor: ""
    }
    return (
        <div>
            <Component {...input1}></Component>


        </div>
    )
}

export default App;