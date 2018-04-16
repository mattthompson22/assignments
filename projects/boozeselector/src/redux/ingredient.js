import axios from "axios";
// import

// const initialState = {
//     data: [],
//     loading: true,
//     errMsg: ""
// }

// const ingredientReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "GET_INGREDIENT":
//             return {
//                 ...state,
//                 data: action.ingredient,
//                 loading: false
//             }
//         case "ERR_MSG":
//             return {
//                 ...state,
//                 loading: false,
//                 errMsg: action.errMsg
//             }
//         default:
//             return state;
//     }
// }

// const ingredientUrl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="{input};

// export const getIngredient = () => {
//     return dispatch => {
//         axios.get(ingredientUrl)
//             .then(response => {
//                 console.log(response.data);
//                 dispatch({
//                     type: "GET_INGREDIENT",
//                     random: response.data.drinks
//                 })
//             })
//             .catch(err => {
//                 dispatch({
//                     type: "ERR_MSG",
//                     errMsg: "Sorry, you've had too much. I have to cut you off"
//                 })
//             })
//     }
// }

// export default ingredientReducer;