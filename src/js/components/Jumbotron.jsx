import React from "react";
import Home from "./Home";
import Cards from "./Cards";

function Jumbotron(){
    return(

        <div className="container ">
            <div className="jumbotron text-bg-secondary ">
                <h1 ml-5> A Warm Welcome!</h1>
                <p>Some text to use as content to fill in the spot. This is my jumbotron component that will be imported into my home page. Someu Pedur maro deim rani cuaro magnus ruby kero patron. </p>
                <button type="button" class="btn btn-primary">Call to action</button>
            </div>
            {/* <div><Cards/></div> */}

        </div>
    )
}
export default Jumbotron