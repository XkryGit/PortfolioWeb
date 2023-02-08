import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const hepico1 = require("../../../../images/hepico1.png");
const hepico2 = require("../../../../images/hepico2.png");
const hepico3 = require("../../../../images/hepico3.png");
const hepico4 = require("../../../../images/hepico4.png");
const hepico5 = require("../../../../images/hepico5.png");
const hepico6 = require("../../../../images/hepico6.png");
const hepico7 = require("../../../../images/hepico7.png");
const bannernescafe = require("../../../../images/bannernescafe.png");

export const ProyectHepicoComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={hepico1} />
          <div id="text">
            <h1>HÉPICO FEST</h1>
            <div id="subtitle">
              <h2>Proyect Visual Design</h2>
              <h2>-</h2>
              <h2>2019</h2>
            </div>
            <h3>
              this <b>academic project</b> consists of the elaboration of the
              visual identity of the first edition of the{" "}
              <b>Hépico fest festival in Malaga</b> , a music festival scheduled
              for the summer of 2020.
            </h3>
            <h3>
              The event wants to have a <b>strong sustainable approach</b>,
              starting with its own location, the equestrian club of Malaga,
              which is a semi-natural setting.
            </h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator and Photoshop</b>.
            </h3>
          </div>
        </div>

        <div id="imagestri">
          <img id="tri" src={hepico2} />
          <img id="tri" src={hepico3} />
          <img id="tri" src={hepico4} />
          <img id="tri" src={hepico5} />
          <img id="tri" src={hepico6} />
          <img id="tri" src={hepico7} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/nescafe")}
            src={bannernescafe}
          />
        </div>
      </div>
    </>
  );
};
