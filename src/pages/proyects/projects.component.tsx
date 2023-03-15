import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import catchup from "../../archives/prod1.png";
import adidas from "../../archives/prod2.png";
import hepico from "../../archives/prod3.png";
import nescafe from "../../archives/prod4.png";
import market from "../../archives/prod5.png";
import illustration from "../../archives/prod6.png";
import tourism from "../../archives/prod7.png";
import portfolio from "../../archives/prod8.png";
import catchuphover from "../../archives/hover1.png";
import nescafehover from "../../archives/hover4.png";
import markethover from "../../archives/hover5.png";
import portfoliohover from "../../archives/hover8.png";
import hepicohover from "../../archives/hover3.png";
import adidashover from "../../archives/hover2.png";
import illustrationhover from "../../archives/hover6.png";
import tourismhover from "../../archives/hover7.png";

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
