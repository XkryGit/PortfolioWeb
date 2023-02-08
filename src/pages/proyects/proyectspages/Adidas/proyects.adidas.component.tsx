import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import adidas2video from "../../../../images/adidas2video.mp4";
import adidas4video from "../../../../images/adidas4video.mp4";
import adidas6video from "../../../../images/adidas6video.mp4";

const adidas1 = require("../../../../images/adidas1.png");
const adidas6 = require("../../../../images/adidas3.png");
const adidas5 = require("../../../../images/adidas5.png");
const adidas7 = require("../../../../images/adidas7.png");
const bannerhepico = require("../../../../images/bannerhepico.png");

export const ProyectAdidasComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={adidas1} />
          <div id="text">
            <h1>HISTÓRICAS ADIDAS</h1>
            <div id="subtitle">
              <h2>Proyect Visual Design</h2>
              <h2>-</h2>
              <h2>2019</h2>
            </div>
            <h3>
              For this
              <b>academic project is a new Adidas Original 2020 campaign</b>, it
              was necessary to create a signage made up of three pieces of one
              of its models. In my case I have selected the{" "}
              <b>Adidas Superstar</b>, because they are an icon of urban fashion
              with a long history of 50 years.
            </h3>
            <h3>
              For the three posters following a single aesthetic line based on a
              neon sign-style "look".
            </h3>
            <h3>
              All the resources were created by myself using
              <b> Adobe Illustrator and Photoshop</b>.
            </h3>
          </div>
        </div>
        <div id="imagestri">
          <video id="tri" muted autoPlay loop src={adidas2video} />
          <video id="tri" muted autoPlay loop src={adidas6video} />
          <video id="tri" muted autoPlay loop src={adidas4video} />
          <img id="tri" src={adidas5} />
          <img id="tri" src={adidas6} />
          <img id="tri" src={adidas7} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/hepico")}
            src={bannerhepico}
          />
        </div>
      </div>
    </>
  );
};
