import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BGM1 from "../../../../archives/BlinkGalaxyManagement1.png";
import BGM2 from "../../../../archives/BlinkGalaxyManagement2.png";
import BGM3 from "../../../../archives/BlinkGalaxyManagement3.png";
import BGM4 from "../../../../archives/BlinkGalaxyManagement4.png";
import BGM5 from "../../../../archives/BlinkGalaxyManagement5.png";
import bannertou from "../../../../archives/bannertou.png";

export const ProjectManagmentWebComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={BGM1} />
          <div id="text">
            <h1>Blink Galaxy Managment Web</h1>
            <div id="subtitle">
              <h2>Managment web</h2>
              <h2>-</h2>
              <h2>2024</h2>
            </div>
            <h3>
              In this project I worked as a
              <b> FrontEnd programmer specialized in User Experience.</b>
            </h3>
            <h3>
              This project encompasses different <b>management pages</b> for
              Nexxyo Labs, in which it is necessary to manage all the activity
              generated both internally and externally by the company's
              different products and video games.
            </h3>
            <h3>
              To do this proyect, use the technologies of using
              <b> React, Material UI or SweetAlert,</b> among others.
            </h3>
          </div>
        </div>
        <div id="imagesduo">
          <img id="duo" src={BGM2} />
          <img id="duo" src={BGM3} />
          <img id="duo" src={BGM4} />
          <img id="duo" src={BGM5} />
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/projects/tourism")}
            src={bannertou}
          />
        </div>
      </div>
    </>
  );
};
