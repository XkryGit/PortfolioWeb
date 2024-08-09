import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import port1 from "../../../../archives/pro4.png";
import portfolio1 from "../../../../archives/portfolio1.png";
import portfolio2 from "../../../../archives/portfolio2.png";
import portfolio3 from "../../../../archives/portfolio3.png";
import portfolio4 from "../../../../archives/portfolio4.png";
import portfolio5 from "../../../../archives/portfolio5.png";
import portfolio6 from "../../../../archives/portfolio6.png";
import bannermarket from "../../../../archives/bannermarket.png";

export const ProjectPortfolioComponent: React.FC = () => {
  const handleClickExt = (x) => {
    window.open(x, "_blank");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={port1} />
          <div id="text">
            <h1>PORTFOLIO WEB DESIGN</h1>
            <div id="subtitle">
              <h2>Project Web App</h2>
              <h2>-</h2>
              <h2>2023</h2>
            </div>
            <h3>
              In this real project i designed and programmed a web application
              from scratch with <b>my portfolio and personal works.</b>
            </h3>
            <h3>
              To do this, use the technologies of{" "}
              <b>Webpack, React, typescript, and SASS,</b> among others.
            </h3>
            <h3>All the resources were created by myself.</h3>
            <div id="button">
              <button
                id="gitbutton"
                onClick={() =>
                  handleClickExt("https://github.com/XkryGit/PortfolioWeb")
                }
              >
                view the project in git
              </button>
            </div>
          </div>
        </div>
        <div id="imagesduo">
          <img id="duoport" src={portfolio1} />
          <img id="duoport" src={portfolio2} />
          <img id="duoport" src={portfolio3} />
          <img id="duoport" src={portfolio4} />
          <img id="duoport" src={portfolio5} />
          <img id="duoport" src={portfolio6} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/projects/marketplace")}
            src={bannermarket}
          />
        </div>
      </div>
    </>
  );
};
