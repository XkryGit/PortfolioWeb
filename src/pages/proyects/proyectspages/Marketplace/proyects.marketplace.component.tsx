import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const market1 = require("../../../../images/market1.png");
const market2 = require("../../../../images/market2.png");
const market3 = require("../../../../images/market3.png");
const bannercatch = require("../../../../images/bannercatch.png");

export const ProyectMarketplaceComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={market1} />
          <div id="text">
            <h1>MARKETPLACE DESIGN</h1>
            <div id="subtitle">
              <h2>Project UX-UI</h2>
              <h2>-</h2>
              <h2>2021</h2>
            </div>
            <h3>
              In this <b>real project</b> I had to propose and prototype the
              operation of the client section of a Marketplace intended for{" "}
              <b>small municipalities and companies</b>, where users could
              present the visuals of their applications and their ramifications
              through a <b>navigation tree</b> with the different options that
              the platform allowed.
            </h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator</b> and the prototyping was done with{" "}
              <b>Adobe Xd</b>.
            </h3>
          </div>
        </div>
        <div id="imagesduo">
          <img id="duo" src={market2} />
          <img id="duo" src={market3} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/catchup")}
            src={bannercatch}
          />
        </div>
      </div>
    </>
  );
};
