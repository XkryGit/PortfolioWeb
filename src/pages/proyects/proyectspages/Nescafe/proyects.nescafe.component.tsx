import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const nescafe1 = require("../../../../images/nescafe1.png");
const nescafe2 = require("../../../../images/nescafe2.png");
const nescafe3 = require("../../../../images/nescafe3.png");
const nescafe4 = require("../../../../images/nescafe4.png");
const nescafe5 = require("../../../../images/nescafe5.png");
const bannerillus = require("../../../../images/bannerillus.png");

export const ProyectNescafeComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={nescafe1} />
          <div id="text">
            <h1>NESCAFÉ PACKAGING</h1>
            <div id="subtitle">
              <h2>Project Visual Design</h2>
              <h2>-</h2>
              <h2>2019</h2>
            </div>
            <h3>
              This academic <b>project</b> consists of preparing the packaging
              for the new line that <b>Nescafé</b> will launch soon, creating
              three containers (which may be sold separately) and a container
              packaging for the pack of three.
            </h3>
            <h3>
              The project contains three coffees: <b>Tesoro de Kenya</b> (with
              floral notes from Kirinyaga), <b>Joya de Jamaica</b> (with acid
              touches from Kignston) and <b>Oro de Colombia</b> (decaffeinated
              with hints of fruit from Cauca).
            </h3>
            <h3>
              All the resources were created by myself using{" "}
              <b>Adobe Illustrator and Photoshop</b>.
            </h3>
          </div>
        </div>
        <div id="imagesduo">
          <img id="duo" src={nescafe2} />
          <img id="duo" src={nescafe3} />
          <img id="duo" src={nescafe4} />
          <img id="duo" src={nescafe5} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/proyects/illustration")}
            src={bannerillus}
          />
        </div>
      </div>
    </>
  );
};
