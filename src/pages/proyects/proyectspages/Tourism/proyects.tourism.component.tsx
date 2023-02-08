import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const tourism1 = require("../../../../images/tourism1.png");
const tou2 = require("../../../../images/tou2.png");
const tou3 = require("../../../../images/tou3.png");
const tou4 = require("../../../../images/tou4.png");
const tou5 = require("../../../../images/tou5.png");
const tou6 = require("../../../../images/tou6.png");
const tou7 = require("../../../../images/tou7.png");
const bannerportfolio = require("../../../../images/bannerportfolio.png");

export const ProyectTourismComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={tourism1} />
          <div id="text">
            <h1>TOURISM PLATAFORM</h1>
            <div id="subtitle">
              <h2>Proyect UX-UI</h2>
              <h2>-</h2>
              <h2>2022</h2>
            </div>
            <h3>
              In this <b>real project</b> I had to propose and prototype the
              operation for the{" "}
              <b>
                application and the manager of a multi-device tourism platform
              </b>
              , designed for municipalities, where they could return all their
              tourist offer and services in different languages, put their
              points of tourist and cultural interest, and much more.
            </h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator</b> and the prototyping was done with{" "}
              <b>Adobe Xd</b>.
            </h3>
          </div>
        </div>
        <div id="imagestri">
          <img id="tri" src={tou2} />
          <img id="tri" src={tou3} />
          <img id="tri" src={tou4} />
          <img id="tri" src={tou5} />
          <img id="tri" src={tou6} />
          <img id="tri" src={tou7} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/portfolio")}
            src={bannerportfolio}
          />
        </div>
      </div>
    </>
  );
};
