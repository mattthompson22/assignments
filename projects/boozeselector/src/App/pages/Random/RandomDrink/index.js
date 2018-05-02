import React, {Component} from "react";

import {connect} from "react-redux"; 
import {getRandom} from "../../../../redux/random.js";

import RandomDrinkRecipe from "./RandomDrinkRecipe";

class RandomDrink extends Component {
    componentDidMount(){ 
        this.props.getRandom();
    }
    render(){
        const {data, loading, errMsg} = this.props;
        const randomIngredients = data.map((random, i) => <RandomDrinkRecipe key = {random.strDrink + i} {...random}></RandomDrinkRecipe>);
        if (loading){
            return (
                <div>...Pouring</div>
            )
        } else if (errMsg){
            return (
                <div>{errMsg}</div>
            )
        } else {
            return (
                <div>
                    {randomIngredients}
                </div>
            )
        }
    }
}

const mapStateToProps = state => {
    return state.randomDrinks;
}

export default connect(mapStateToProps, {getRandom}) (RandomDrink);