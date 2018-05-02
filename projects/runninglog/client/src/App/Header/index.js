import React from "react";
import {Link} from "react-router-dom";

function Header(props){
    return (
        <div className = "header">
            <div className = "welcome">Welcome, matt!</div>
            <div className = "logOut">
                <Link to = "/" className = "signOut">Sign Out</Link>
            </div>
        </div>
            
    )
}

export default Header;