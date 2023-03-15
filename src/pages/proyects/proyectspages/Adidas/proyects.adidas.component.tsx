import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import adidas2video from "../../../../archives/adidas2video.mp4";
import adidas4video from "../../../../archives/adidas4video.mp4";
import adidas6video from "../../../../archives/adidas6video.mp4";
import adidas1 from "../../../../archives/adidas1.png";
import adidas6 from "../../../../archives/adidas3.png";
import adidas5 from "../../../../archives/adidas5.png";
import adidas7 from "../../../../archives/adidas7.png";
import bannerhepico from "../../../../archives/bannerhepico.png";

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
              <h2>Project Visual Design</h2>
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
