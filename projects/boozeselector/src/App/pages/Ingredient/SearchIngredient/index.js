// import React, {Component} from "react";

// import {connect} from "react-redux";
// import {getIngredient} from "../../../../redux/ingredient.js";

// import SearchIngredientRecipe from "./SearchIngredientRecipe";

// class SearchIngredient extends Component {
//     componentDidMount(){ 
//         this.props.getIngredient();
//     }
//     constructor(props){
//         super(props);
//         this.state = {
//             input: {
//                 ingredientInput: ""
//             },
//             drinks:[]
//         }
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event){
//         const {value, name} = event.target;
//         this.setState(prevState => {
//         return {
//             input: {
//                 ...prevState.input
//             }
//         }
//     })

//     this.handleSubmit(event) {
//         event.preventDefault();
//         this.setState(prevState => {
//             return {
//                 drinks: [...prevState.drinks, prevState.input]
//             }
//         })
//     };

//     render() {
//         const {ingredientInput} = this.state.input;
//         const { drinks } = this.state;
//         return (
//             <form onSubmit = {this.handleSubmit}>
//                 <div>
//                     <input name = "ingredientInput" onChange = {this.handleChange} value = {ingredientInput} type = "text" placeholder = "Enter Ingredient"/>
//                     <button> Submit </button>
//                 </div>
//             </form>
//         )

//         const {data, loading, errMsg} = this.props;
//         const ingredientIngredients = data.map((ingredient, i) => <SearchIngredientRecipe key = {ingredient.strDrink + i} {...ingredient}></SearchIngredientRecipe>);
//         if (loading){
//             return (
//                 <div>...Pouring</div>
//             )
//         } else if (errMsg){
//             return (
//                 <div>{errMsg}</div>
//             )
//         } else {
//             return (
//                 <div>
//                     {ingredientIngredients}
//                 </div>
//             )
//         }
//     }
// };

// const mapStateToProps = state =>{
//     return state.ingredientDrinks;
// };

// export default connect(mapStateToProps, {getIngredient}) (SearchIngredient);