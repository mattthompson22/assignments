import React, {Component} from "react";

import {connect} from "react-redux";
import {addCat} from "../../redux/cats.js";

class Form extends Component {
    constructor(props){
        super(props);
        this.initialState = {
            inputs: {
            imgUrl: "", 
            caption: ""
            }
        }
        this.state =this.initialState;
        this.handleChange =this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const {name, value } = e.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }

    handleSubmit(e){
        e.preventDefault(); 
        this.props.addCat(this.state.inputs);
        this.setState(this.initialState);
        
        //dispatch action which contains a type "ADD CAT" and the actual input data
    }
    render () {

        const { imgUrl, caption } = this.state.inputs;
        return (
            <form onSubmit = {this.handleSubmit}> 
                <input onChange = {this.handleChange} name ="imgUrl" value = {imgUrl} type = "text" placeholder = "image URL" />
                <input onChange = {this.handleChange} name = "caption" value = {caption} type = "text" placeholder = "enter caption" />
                <button>Submit</button>

            </form>
        )
    }
}

export default connect(null, {addCat}) (Form);//null is because the function 2 arguments, but there is nothing from state that we need here