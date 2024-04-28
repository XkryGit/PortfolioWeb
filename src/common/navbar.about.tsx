import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.styles.scss";
import logo from "../archives/LogoA.png";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="header">
        <img id="logo" onClick={() => handleClick("/")} src={logo} />
        <ul id="navbar">
          <Link to={"/"}>Home</Link>
          <Link id="click" to={"/about"}>
            About
          </Link>
          <Link to={"/proyects"}>Projects</Link>
          <Link to={"/contact"}>Contact</Link>
        </ul>
        <span id="codeBy">© Code by Adolfo Zambrana - 2024</span>
      </div>
    </>
  );
};
