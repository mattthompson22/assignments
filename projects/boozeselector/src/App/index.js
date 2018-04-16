import React from "react";

import {Switch, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./pages/Home";
import Ingredient from "./pages/Ingredient";
import Name from "./pages/Name";
import Random from "./pages/Random";

function App(props){
    return (
        <div className = "wrapper">
            <Header></Header>
            <div className = "content-wrapper">
                <Switch>
                    <Route exact path = "/" component = {Home}></Route>
                    <Route path = "/ingredient" component = {Ingredient}></Route>
                    <Route path = "/name" component = {Name}></Route>
                    <Route path = "/random" component = {Random}></Route>
                </Switch>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default App;