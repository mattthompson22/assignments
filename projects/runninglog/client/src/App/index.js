import React from "react";
import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Running from "./pages/Running";

function App(props){
    return (
        <div className = "wrapper">
            <Header></Header>
            <div className = "content-wrapper">
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <Route path = "/running" component = {Running}></Route>
                    
                </Switch>  
            </div>
            <Footer></Footer> 
        </div> 
    )
}

export default App;