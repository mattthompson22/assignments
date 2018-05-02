import React from "react";
import {Link} from "react-router-dom";

function Footer (props){
    return (
        <footer>
            <Link to = "/" className = "title">Track Yo Self</Link>
        </footer>
    )
}

export default Footer;