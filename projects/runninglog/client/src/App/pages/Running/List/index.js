import React from "react";
import { connect } from "react-redux";
import Item from "./item/";
import { removeRun, getRun, addRun, editRun } from "../../../../redux/run";

class List extends React.Component {
    constructor(props) {
        super(props);

    }
    componentDidMount() {
        const { getRun } = this.props;
        getRun();
    }
    render() {
        const { data, loading, errMsg, removeRun, editRun } = this.props;
        const runComponents = data.map((run, i) => <Item key={run._id + i} 
        idRun={run._id} {...run} removeRun={removeRun} 
        editRun = {editRun} index={i}></Item>);

        // console.log(this.props);
        if (loading) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)" }}>... loading Runs</div>
            )
        } else if (errMsg) {
            return (
                <div style={{ color: "rgba(218, 238, 253, 0.95)" }}>{errMsg}</div>
            )
        } else {

            return (
                <div className="runWrapper">
                    {runComponents}
                </div>
            )
        }
        
        
    }



}

const mapStateToProps = state => {
    return state.runResults;
}

export default connect(mapStateToProps, { removeRun, addRun, editRun, getRun })(List);
