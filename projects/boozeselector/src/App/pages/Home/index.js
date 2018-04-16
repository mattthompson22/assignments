import React from "react";

function Home(props){
    return(
        <div className= "homeWrapper">
            <div className="homeBackground">
                <div className = "description">
                    <h1>Let me help you choose your next cocktail!</h1><br />
                    <p>By using the links above, you can have me choose a random cocktail recipe for you to try. Or if you have something more specific in mind, you can search for recipes by a drink's name or just a component (whether it be a type of spirit or just an ingredient).</p>
                </div>
            </div>
        </div>
    )
}
export default Home;