import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return (
        <div className= "header">
            <div className= "title">Your Personal Bartender...</div>
                <nav>
                    <Link to = "/" className= "home"> Home </Link>
                    <Link to = "/random" className = "random">  Random <br />Drink </Link>
                    <h3 className= "search"> Search by: </h3>
                    <Link to = "/name" className= "name"> Drink Name </Link>
                    <Link to = "/ingredient" className= "ingredient"> Ingredient </Link>   
                </nav>
        </div>
    )
}
export default Header;