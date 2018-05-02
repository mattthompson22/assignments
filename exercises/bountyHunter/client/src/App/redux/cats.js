import axios from "axios";

const initialCatState = {
    data: [],
    loading: true,
    errMsg: ""
}

const catReducer = (state = initialCatState, action) => {
    switch (action.type) {
        case "GET_CATS": {
            return {
                ...state,
                loading: false,
                data: action.cats
            }
        }
        default:
            return state;
    }
}

export const getCats = ()=> {
    axios.get("/cats")
        .then(response => {
            return {
                type: "GET_CATS",
                cats: response.data
            };
        })
        .catch(err => {
            return {
                type: "ERR_MSG",
                err: "data unavailable"
            }
        })
}

export default catReducer;