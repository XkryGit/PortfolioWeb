import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign.styles.scss";

const logo = require("../images/LogoB.png");
const gh = require("../images/gh.png");
const gm = require("../images/gm.png");
const ln = require("../images/ln.png");

export const Sign: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  const handleClickExt = (x) => {
    window.open(x, "_blank");
  };

  return (
    <>
      <div id="sign">
        <img id="logo" onClick={() => handleClick("/")} src={logo} />
        <h3>
          “Choose a job you love, and you will never have to work a day in your
          life”{" "}
        </h3>
        <h3 id="sign">Confucio.</h3>
        <div id="links">
          <img
            onClick={() => handleClickExt("https://github.com/XkryGit")}
            src={gh}
          />
          <img
            onClick={() =>
              handleClickExt(
                "https://www.linkedin.com/in/adolfo-zambrana-gilabert-a37776b5/"
              )
            }
            src={ln}
          />
          <img
            onClick={() =>
              handleClickExt("mailto:adolfozambranagilabert@gmail.com")
            }
            src={gm}
          ></img>
        </div>
      </div>
    </>
  );
};
