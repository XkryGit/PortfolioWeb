import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.styles.scss";

const logo = require("../images/LogoA.png");

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="header">
        <img id="logo" onClick={() => handleClick("/")} src={logo} />
        <ul id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Link to={"/proyects"}>Projects</Link>
          <Link id="click" to={"/contact"}>
            Contact
          </Link>
        </ul>
        <span id="codeBy">© Code by Adolfo Zambrana - 2023</span>
      </div>
    </>
  );
};
