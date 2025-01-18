import React from "react";
import Navbar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Cards from "./Cards";
import Footer from "./Footer";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<div className="container d-block">
			 <Jumbotron/>
			 <Cards/>
			</div>
			<Footer/>
		</div>

		
		
	);
};

export default Home;