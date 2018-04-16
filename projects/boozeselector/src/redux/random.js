import axios from "axios";

const initialState = {
    data: [],
    loading: true,
    errMsg: ""
}

const randomReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RANDOM":
            return {
                ...state,
                data: action.random,
                loading: false
            }
        case "ERR_MSG":
            return {
                ...state,
                loading: false,
                errMsg: action.errMsg
            }
        default:
            return state;
    }
}

const randomUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

export const getRandom = () => {
    return dispatch => {
        axios.get(randomUrl)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: "GET_RANDOM",
                    random: response.data.drinks
                })
            })
            .catch(err => {
                dispatch({
                    type: "ERR_MSG",
                    errMsg: "Sorry, you've had too much. I have to cut you off"
                })
            })
    }
}

export default randomReducer;