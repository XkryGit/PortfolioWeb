import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import illus1 from "../../../../archives/illus1.png";
import illus2 from "../../../../archives/illus2.png";
import illus3 from "../../../../archives/illus3.png";
import illus4 from "../../../../archives/illus4.png";
import illus5 from "../../../../archives/illus5.png";
import illus6 from "../../../../archives/illus6.png";
import illus7 from "../../../../archives/illus7.png";
import bannertou from "../../../../archives/bannertou.png";

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
