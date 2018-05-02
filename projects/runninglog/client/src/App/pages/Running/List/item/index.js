import React, {Component} from "react";

import EditForm from "./EditForm/index.js";

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,

        }
        this.toggleEdit = this.toggleEdit.bind(this)
    }
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    render () {
        const {date, distance, time, type, editRun, idRun, removeRun, index} = this.props;
        const {isEditing} = this.state;
        console.log(idRun);
        return (
            <div className = "runHistory">
                <div className = "runDisplay">
                    <h3 className = "dateWord">DATE</h3>
                    <h3 className = "dateDisplay">{date}</h3>
                    <h3 className = "distanceWord">DISTANCE</h3>
                    <h3 className = "distanceDisplay">{distance}</h3>
                    <h3 className = "timeWord">TIME</h3>
                    <h3 className = "timeDisplay">{time}</h3>
                    <h3 className = "typeWord">TYPE</h3>
                    <h3 className = "typeDisplay">{type}</h3>
                    <button className = "deleteButton" onClick = {() => removeRun(idRun)}>Delete</button>
                    <button className = "editButton" onClick = {this.toggleEdit}>Edit</button>
                <div className = "editWrapper">
                        {isEditing ? 
                    
                        <EditForm toggleEdit={this.toggleEdit} editRun={editRun} idRun = {idRun} date = {date} distance = {distance} time = {time} type = {type}> </EditForm>
                        :""} 
                </div>
                </div>
            </div>
        )
    }
}


export default Item;