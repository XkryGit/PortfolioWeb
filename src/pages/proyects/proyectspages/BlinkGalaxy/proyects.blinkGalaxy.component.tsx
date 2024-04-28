import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BG1 from "../../../../archives/BlinkGalaxy1.png";
import BG2 from "../../../../archives/BlinkGalaxy2.png";
import BG3 from "../../../../archives/BlinkGalaxy3.png";
import BG4 from "../../../../archives/BlinkGalaxy4.png";
import BG5 from "../../../../archives/BlinkGalaxy5.png";
import bannerillus from "../../../../archives/bannerillus.png";

export const ProyectBlinkGalaxyComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={BG1} />
          <div id="text">
            <h1>Blink Galaxy Web</h1>
            <div id="subtitle">
              <h2>Web3 & NFT Gaming Hub </h2>
              <h2>-</h2>
              <h2>2024</h2>
            </div>
            <h3>
              In this project I worked as a
              <b> FrontEnd programmer specialized in User Experience.</b>
            </h3>
            <h3>
              In this project, a platform was generated, a
              <b> digital distribution platform</b> for video games for the
              company Nexxyo Labs.
            </h3>
            <h3>
              My functions ranged from <b> designing</b> the page interfaces and
              new functionalities, generating content and <b> animations</b>, or
              <b> programming </b>
              different sections of the page.
            </h3>
            <h3>
              To do this, use the technologies of using
              <b> Next, Tailwind, or LottieFiles</b> among others.
            </h3>
          </div>
        </div>
        <div id="imagesduo">
          <img id="duo" src={BG2} />
          <img id="duo" src={BG3} />
          <img id="duo" src={BG4} />
          <img id="duo" src={BG5} />
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
