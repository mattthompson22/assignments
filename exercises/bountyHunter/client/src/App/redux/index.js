import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import catReducer from "./cats";

const globalState = {
    cats: catReducer
}

const store = createStore(combineReducers(globalState), applyMiddleware(thunk));

store.subscribe(() => console.log(store.getState()));

export default store;