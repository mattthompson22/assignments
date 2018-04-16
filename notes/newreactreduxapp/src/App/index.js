import React from "react";
import {connect} from "react-redux";
import {increment, decrement, half, double} from "../redux";


function App(props){
    return (
        <div className = "app">
            <button onClick = {props.half}>/2</button>
            <button onClick = {props.decrement}>-</button>
            <h1>{props.counter}</h1>
            <button onClick = {props.increment}>+</button>
            <button onClick = {props.double}>x2</button>
        </div>
    )
}

function mapStateToProps(state){
    return {
        counter: state
    }
}

export default connect(mapStateToProps, {increment, decrement, half, double}) (App);
