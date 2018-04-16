import {createStore} from "redux";

export function increment(){
    return {
        type: "INCREMENT"
    }
}
export function decrement(){
    return {
        type: "DECREMENT"
    }
}
export function half(){
    return {
        type: "HALF"
    }
}
export function double(){
    return {
        type: "DOUBLE"
    }
}

function reducer(state = 0, action){
    switch(action.type){
        case "INCREMENT":
            return state + 1;
            //returns new version of state
        case "DECREMENT":
            return state - 1;
        case "HALF":
            return state / 2;
        case "DOUBLE":
            return state * 2;
        default: 
            return state;
    }
}





export default createStore(reducer)

