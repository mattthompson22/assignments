import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const runReducer = (state = initialState, action) => {
    switch(action.type) {

        case "GET_RUN":
            return {
                ...state,
                data:action.run,
                loading: false
            }
        
        case "ADD_RUN":
            return {
                ...state,
                data: [...state.data, action.run],
                loading: false
            }
        case "REMOVE_RUN":
            return {
                data: state.data.filter(run => run._id !== action.id),
                loading: false
            }
        case "EDIT_RUN":
            return {
                ...state,
                data: state.data.map(run => {
                    if(run._id === action.id){
                        return {...run, ...action.editedRun};
                    } else {
                        return run;
                    }
                }),
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                errMsg: action.errMsg,
                loading: false
            }
        default:
            return state;
    }
}
export const getRun = () => {
    return dispatch => {
        axios.get(`/run/`)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: "GET_RUN",
                run: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, data unavailable!"
            });
        });
    }
}

export const addRun = run => {
    return dispatch => {
        axios.post(`/run/`, run )
        .then(response => {
            dispatch({
                type: "ADD_RUN",
                run: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, records unavailable"
            });
        });
    }
}
export const removeRun = id => {
    return dispatch => {
        axios.delete(`/run/${id}`)
        .then(response => {
            dispatch({
                type: "REMOVE_RUN",
                id
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, records unavailable"
            });
        });
        
    }
}
export const editRun = (id, editedRun) => {
    return dispatch => {
        axios.put(`/run/${id}`, editedRun)
        .then(response => {
            dispatch({
                type: "EDIT_RUN",
                id,
                editedRun: response.data
            });
        }).catch(err => {
            dispatch({
                type: "ERR_MSG",
                errMsg: "Sorry, records unavailable"
            });
        });
    }
}

export default runReducer;