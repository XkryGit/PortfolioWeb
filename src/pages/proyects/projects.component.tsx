import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const catchup = require("../../images/prod1.png");
const adidas = require("../../images/prod2.png");
const hepico = require("../../images/prod3.png");
const nescafe = require("../../images/prod4.png");
const market = require("../../images/prod5.png");
const illustration = require("../../images/prod6.png");
const tourism = require("../../images/prod7.png");
const portfolio = require("../../images/prod8.png");
const catchuphover = require("../../images/hover1.png");
const nescafehover = require("../../images/hover4.png");
const markethover = require("../../images/hover5.png");
const portfoliohover = require("../../images/hover8.png");
const hepicohover = require("../../images/hover3.png");
const adidashover = require("../../images/hover2.png");
const illustrationhover = require("../../images/hover6.png");
const tourismhover = require("../../images/hover7.png");

export const ProyectsComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);

  return (
    <>
      <div id="proyectspage">
        <ul>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/catchup")}
                src={catchuphover}
              />
              <img id="hori" src={catchup} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/tourism")}
                src={tourismhover}
              />
              <img id="vert" src={tourism} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/hepico")}
                src={hepicohover}
              />
              <img id="vert" src={hepico} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/nescafe")}
                src={nescafehover}
              />
              <img id="hori" src={nescafe} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/marketplace")}
                src={markethover}
              />
              <img id="hori" src={market} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/illustration")}
                src={illustrationhover}
              />

              <img id="vert" src={illustration} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/adidas")}
                src={adidashover}
              />
              <img id="vert" src={adidas} />
            </div>

            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/portfolio")}
                src={portfoliohover}
              />
              <img id="hori" src={portfolio} />
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
