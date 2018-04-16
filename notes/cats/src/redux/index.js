import {createStore, combineReducers} from "redux";

import catReducer from "./cats";

const store = createStore(combineReducers({ cats: catReducer}));

store.subscribe(() =>  {
    console.log(store.getState());
})

export default store; 

//gather together all reducers and cram them together into one store, then export it

 