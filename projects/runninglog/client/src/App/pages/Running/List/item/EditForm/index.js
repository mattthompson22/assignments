import React, {Component} from "react";
// import {connect} from "react-redux";
// import {editRun} from "../../../../../../redux/run";

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: {
                date: props.date,
                distance: props.distance,
                time: props.time,
                type: props.type
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {value, name} = event.target;
        this.setState(prevState => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: value
                }
            }
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const {idRun, editRun, toggleEdit} =this.props;
        editRun(idRun, this.state.inputs);
        toggleEdit();
    }
    render(){
        const {date, distance, time, type} = this.state.inputs;
        return (
            <form className = "editForm" onSubmit = {this.handleSubmit}>
                <input value={date} required className = "editDateInput" onChange = {this.handleChange} name = "date" type = "text" placeholder = "Edit Date" />
                <input value={distance} className = "editDistanceInput" onChange = {this.handleChange} name = "distance" type = "text" placeholder = "Edit Distance" />
                <input value={time} className = "editTimeInput" onChange = {this.handleChange} name = "time" type = "text" placeholder = "Edit Time" />
                <input value={type} className = "editTypeInput" onChange = {this.handleChange} name = "type" type = "text" placeholder = "Edit Type" />
                <button className = "editSubmitButton">Submit</button>
            </form>
        )
    }
}

export default EditForm;
// export default connect(null, {editRun}) (EditForm);