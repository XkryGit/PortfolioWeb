import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const port1 = require("../../../../images/pro4.png");
const portfolio1 = require("../../../../images/portfolio1.png");
const portfolio2 = require("../../../../images/portfolio2.png");
const portfolio3 = require("../../../../images/portfolio3.png");
const portfolio4 = require("../../../../images/portfolio4.png");
const portfolio5 = require("../../../../images/portfolio5.png");
const portfolio6 = require("../../../../images/portfolio6.png");
const bannermarket = require("../../../../images/bannermarket.png");

export const ProyectPortfolioComponent: React.FC = () => {
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
              <h2>Proyect Web App</h2>
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
            onClick={() => handleClick("/proyects/marketplace")}
            src={bannermarket}
          />
        </div>
      </div>
    </>
  );
};
