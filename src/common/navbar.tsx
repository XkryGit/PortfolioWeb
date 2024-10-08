import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.styles.scss";
import logo from "../archives/LogoA.png";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  useEffect(() => {
    console.log(
      "Hello, this is the first version of my personal portfolio, where I have tried to show part of my potential. Everything you can see on this website is created and developed by me without help, for that reason I may have some errors that I am still working on. Greetings and I hope you like it."
    );
  }, []);


const [currentPath, setCurrentPath] = useState(window.location.hash);

useEffect(() => {
  setCurrentPath(window.location.hash);
}, [window.location.hash]);

  return (
    <>
      <div id="header">
        <img id="logo" onClick={() => handleClick("/")} src={logo} />
        <ul id="navbar">
          <Link id={currentPath=== "#/" || currentPath===""? "click" : "" }  to={"/"}>
            Home
          </Link>
          <Link id={currentPath=== "#/about"? "click" : "" } to={"/about"}>About</Link>
          <Link id={currentPath=== "#/projects"? "click" : "" } to={"/projects"}>Projects</Link>
          <Link id={currentPath=== "#/contact"? "click" : "" } to={"/contact"}>Contact</Link>
        </ul>
        <span id="codeBy">© Code by Adolfo Zambrana - 2024</span>
      </div>
    </>
  );
};
