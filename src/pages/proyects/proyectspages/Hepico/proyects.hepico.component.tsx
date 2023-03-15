import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hepico1 from "../../../../archives/hepico1.png";
import hepico2 from "../../../../archives/hepico2.png";
import hepico3 from "../../../../archives/hepico3.png";
import hepico4 from "../../../../archives/hepico4.png";
import hepico5 from "../../../../archives/hepico5.png";
import hepico6 from "../../../../archives/hepico6.png";
import hepico7 from "../../../../archives/hepico7.png";
import bannernescafe from "../../../../archives/bannernescafe.png";

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
              <h2>Project Visual Design</h2>
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
