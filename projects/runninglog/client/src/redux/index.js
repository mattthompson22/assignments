import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import runReducer from "./run.js";
const store = createStore(combineReducers({runResults: runReducer}), applyMiddleware(thunk));

// store.subscribe(() => console.log(store.getState()));

export default store;