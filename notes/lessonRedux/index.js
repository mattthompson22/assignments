const redux = require ("redux");

//set up initial state
const initialState = {
    counter = 0
};
//define reducer, which will spit out a new state based on action and prevState
const reducer = (state = initialState, action) => {
    switch (action.type){
            case "INCREMENT":
                return {
                    counter: state.counter + action.amount
                }
            case "RESET":
                return initialState
        default:
             return state;
    }
}

//actions are OBJECTS that carry info that may potentially be useful for state
const action = {
    type: "INCREMENT",
    amount: 1 //this is the payload or incrementer
}
const reset = {
    type: "RESET"
}
//create store
const store = redux.createStore(reducer);
console.log(store.getState());

//dispatch actions
store.dispatch(action);
console.log(store.getState());
