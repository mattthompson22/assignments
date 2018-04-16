import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return (
        <div>
            <h1>Welcome to Whatever.com!</h1>
            <nav>
                <Link to = "/home">Home</Link>
                <Link to = "/about">About</Link>
                <Link to = "/content">Content</Link>
            </nav>
        </div>
    )
}
export default Header;