import React from "react";
import Home from "./Home";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg text-bg-dark">
      <div className="container-fluid">
        <div className="start" style={{width:50}} >
         <a className="navbar-brand" href="#" >
          Start Bootstrap
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        </div>
        <div className="text-right">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <a className="nav-link " href="home">
                Home
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link " href="about">
                About
              </a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="services">
                Services
              </a>
              
            </li>
            <li className="nav-item">
            <a className="nav-link" href="contact">
              Contact
              </a>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

    


