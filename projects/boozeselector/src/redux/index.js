import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";

import randomReducer from "./random.js";
// import ingredientReducer from "./ingredient.js";
const store = createStore(combineReducers({randomDrinks: randomReducer}, /*{ingredientDrinks: ingredientReducer}*/), applyMiddleware(thunk));

store.subscribe(()=> console.log(store.getState()));

export default store;