import React, {Component} from "react";

import {connect} from "react-redux";
import {addRun} from "../../../../redux/run.js";

class Form extends Component {
    constructor(props) {
        super(props);
        this.initialState = {
            inputs: {
                date: "",
                distance: "",
                time: "",
                type: ""
            }
        }
        this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e) {
        const {name, value} = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.addRun(this.state.inputs);
        this.setState(this.initialState);
    }
    render(){
        const {date, distance, time, type} = this.state.inputs;
        return (
            <div className = "formWrapper">
                <div className= "runHeader">
                    <div className = "runIcon"></div>
                </div>
                <form onSubmit = {this.handleSubmit}>
                    <input className = "dateInput" onChange = {this.handleChange} name = "date" value = {date} type = "text" placeholder = "Date"/>
                    <input className = "distanceInput" onChange = {this.handleChange} name = "distance" value = {distance} type = "text" placeholder = "Distance" />
                    <input className = "timeInput" onChange = {this.handleChange} name = "time" value = {time} type = "text" placeholder = "Time" />
                    <input className = "typeInput" onChange = {this.handleChange} name = "type" value = {type} type = "text" placeholder = "Type of Run" />
                    <button className = "runButton">Submit</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {addRun}) (Form);