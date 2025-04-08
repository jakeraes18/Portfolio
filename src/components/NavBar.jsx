import React from "react";
import reactLogo from "../assets/react.svg";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="NavBar">
        <img src={reactLogo} alt="React Logo" className="react__" />
        <div className="nav">
            <a href="">Inicio</a>
            <a href="">Sobre mi</a>
            <a href="">Proyectos</a>
            <a href="">Contactame</a>
        </div>
        <div className="socials">
            <a href="https://github.com/jakeraes18"><img src="https://brin29.github.io/Portafolios-Breiner/github.svg" alt="" /></a>
            <a href="www.linkedin.com/in/jason-ramirez-72b255158"><img src="https://brin29.github.io/Portafolios-Breiner/linkedin.svg" alt="" /></a>
        </div>
    </div>
  );
};

export default NavBar;