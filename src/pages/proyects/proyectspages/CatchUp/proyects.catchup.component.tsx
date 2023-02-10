import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import catch2video from "../../../../images/catch2video.mp4";
import catch7video from "../../../../images/catch7video.mp4";

const catch1 = require("../../../../images/catch1.png");
const catch3 = require("../../../../images/catch3.png");
const catch4 = require("../../../../images/catch4.png");
const catch5 = require("../../../../images/catch5.png");
const catch6 = require("../../../../images/catch6.png");
const banneradidas = require("../../../../images/banneradidas.png");

export const ProyectCatchupComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={catch1} />
          <div id="text">
            <h1>CATCHUP MAGAZINE</h1>
            <div id="subtitle">
              <h2>Proyect Visual Design</h2>
              <h2>-</h2>
              <h2>2019</h2>
            </div>
            <h3>
              Catch up is an <b>academic project</b> of a magazine that was born
              with the aim of becoming a reference publication for true
              <b> lovers of travel</b>, its focus being those corners that
              usually escape visitors to a city.
            </h3>
            <h3>
              It will be a deep editorial product with attention to detail, both
              in terms of information and design, with{" "}
              <b>high-quality photography</b>
              being its most important resources.
            </h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator and Photoshop</b>.
            </h3>
          </div>
        </div>
        <div id="imagescolumn">
          <div id="columna">
            <video id="column" autoPlay mutedº loop src={catch2video} />
            <img id="column" src={catch3} />
            <img id="column" src={catch4} />
          </div>
          <div id="columnb">
            <img id="column" src={catch5} />
            <img id="column" src={catch6} />
            <video id="column" autoPlay muted loop src={catch7video} />
          </div>
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/adidas")}
            src={banneradidas}
          />
        </div>
      </div>
    </>
  );
};
