import React from "react";

import EditForm from "./EditForm"; 

function Item(props) {
    const {imgUrl, caption, removeCat, index} = props;
    return (
        <div>
            <img src = {imgUrl} alt = ""/>
            <p>{caption}</p>
            <button onClick = {() => removeCat(index)} >X</button>
            <EditForm index= {index} imgUrl = {imgUrl} caption = {caption}></EditForm>
        </div>
    )
}

export default Item;