import React from "react";

function RandomDrinkRecipe(props) {
    const {strDrink, strDrinkThumb, strGlass, strInstructions, strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15} = props;
    
    return (  
        <div>
            <div className= "data">
                <h1 className = "drinkName">{strDrink}</h1>
                <img src = {strDrinkThumb} className="pic" alt= "" />
                <p className = "glass">Serve in: {strGlass}</p> 
            </div>
            <div className = "measurementWrapper">
                <div className = "measurements">
                    <p>{strMeasure1} {strIngredient1}</p>
                    <p>{strMeasure2} {strIngredient2}</p>
                    <p>{strMeasure3} {strIngredient3}</p>
                    <p>{strMeasure4} {strIngredient4}</p>
                    <p>{strMeasure5} {strIngredient5}</p>
                    <p>{strMeasure6} {strIngredient6}</p>
                    <p>{strMeasure7} {strIngredient7}</p>
                    <p>{strMeasure8} {strIngredient8}</p>
                    <p>{strMeasure9} {strIngredient9}</p>
                    <p>{strMeasure10} {strIngredient10}</p>
                    <p>{strMeasure11} {strIngredient11}</p>
                    <p>{strMeasure12} {strIngredient12}</p>
                    <p>{strMeasure13} {strIngredient13}</p>
                    <p>{strMeasure14} {strIngredient14}</p>
                    <p>{strMeasure15} {strIngredient15}</p>
                </div>
            </div>
            <div>
            <p className = "instructions">{strInstructions}</p>
            </div>
        </div>
    )
}

export default RandomDrinkRecipe;