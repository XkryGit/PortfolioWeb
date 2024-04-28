import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import nescafe1 from "../../../../archives/nescafe1.png";
import nescafe2 from "../../../../archives/nescafe2.png";
import nescafe3 from "../../../../archives/nescafe3.png";
import nescafe4 from "../../../../archives/nescafe4.png";
import nescafe5 from "../../../../archives/nescafe5.png";
import bannerBG from "../../../../archives/bannerBG.png";

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
            onClick={() => handleClick("/proyects/blinkgalaxy")}
            src={bannerBG}
          />
        </div>
      </div>
    </>
  );
};
