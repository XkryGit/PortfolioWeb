import React from "react";
import { useNavigate } from "react-router-dom";
import "./sign.styles.scss";
import logo from "../archives/LogoB.png";
import gh from "../archives/gh.png";
import gm from "../archives/gm.png";
import ln from "../archives/ln.png";

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
            alt="gh"
          />
          <img
            onClick={() =>
              handleClickExt(
                "https://www.linkedin.com/in/adolfo-zambrana-gilabert-a37776b5/"
              )
            }
            src={ln}
            alt="ln"
          />
          <img
            onClick={() =>
              handleClickExt("mailto:adolfozambranagilabert@gmail.com")
            }
            src={gm}
            alt="gm"
          ></img>
        </div>
      </div>
    </>
  );
};
