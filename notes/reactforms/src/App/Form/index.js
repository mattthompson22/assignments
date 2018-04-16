import React, {Component} from "react";
import Peoplelist from "./Peoplelist";

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputs: {
                firstName: "",
                email: ""
            },
            people: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
 
    handleChange(event){
        //take value from input and set state accordingly
        //target = the event on which the change occurred
        const {value, name} = event.target;
        // console.log(event.target);
        this.setState(prevState => {
            return {
                inputs:{
                    ...prevState.inputs,//makes a copy of prevState.inputs and integrate that here
                    [name]: value,//change the one value we do want to change
                }
            }
        }); 
    }

    handleSubmit(event){
        event.preventDefault();
        this.setState(prevState => {
            return{
                people: [...prevState.people, prevState.inputs]
            }
        })
    }

    render(){
        const {firstName, email} = this.state.inputs;
        const { people } = this.state;
        return (
            <form onSubmit = {this.handleSubmit}> 
                <div>
                    <input name = "firstName" onChange = {this.handleChange} value = {firstName} type = "text" placeholder = "Enter Name"/>
                    <input name = "email" onChange = {this.handleChange} value = {email} type = "email" placeholder = "email"/>
                    <button> Submit</button>
                </div>
                <div>
                    {people.map((inputObj, i) => <Peoplelist monkeys = {inputObj} key = {inputObj.firstName + i} />)}
                </div>
            </form>
        )
    }
}

export default Form;