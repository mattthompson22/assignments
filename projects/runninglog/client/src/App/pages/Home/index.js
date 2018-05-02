import React from "react";
import {Link} from "react-router-dom";

function Home(props){
    return(
        <div className = "homeWrapper">
            <div className = "activityChooser">
                <h1>What do you want to do today?</h1>
                <nav>
                    <Link to = "/running" className = "running"></Link>
                    <h1 className = "labelRun">RUN</h1>
                    <Link to = "/weightlifting" className = "weightlifting"></Link>
                    <h1 className = "labelLift">LIFT</h1>
                    <Link to = "/cycling" className = "cycling"></Link>
                    <h1 className = "labelRide">RIDE</h1>
                    <Link to = "/swimming" className = "swimming"></Link>
                    <h1 className = "labelSwim">SWIM</h1>
                    <div className = "spacer"></div>

                </nav>
            </div>
        </div>
    )
}


export default Home;