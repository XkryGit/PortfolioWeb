import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const illus1 = require("../../../../images/illus1.png");
const illus2 = require("../../../../images/illus2.png");
const illus3 = require("../../../../images/illus3.png");
const illus4 = require("../../../../images/illus4.png");
const illus5 = require("../../../../images/illus5.png");
const illus6 = require("../../../../images/illus6.png");
const illus7 = require("../../../../images/illus7.png");
const bannertou = require("../../../../images/bannertou.png");

export const ProyectIllustrationComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={illus1} />
          <div id="text">
            <h1>ILLUSTRATING WORDS</h1>
            <div id="subtitle">
              <h2>Project Visual Design</h2>
              <h2>-</h2>
              <h2>2019</h2>
            </div>
            <h3>
              For this <b>academic project</b> we had to make an{" "}
              <b>illustration</b> using a single word as a reference.
            </h3>
            <h3>Here I show you the result of some of them.</h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator</b> and a <b>graphics tablet.</b>
            </h3>
          </div>
        </div>
        <div id="imagestri">
          <img id="tri" src={illus2} />
          <img id="tri" src={illus3} />
          <img id="tri" src={illus4} />
          <img id="tri" src={illus5} />
          <img id="tri" src={illus6} />
          <img id="tri" src={illus7} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/tourism")}
            src={bannertou}
          />
        </div>
      </div>
    </>
  );
};
