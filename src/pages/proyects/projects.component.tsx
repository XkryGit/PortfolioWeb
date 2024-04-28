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
import blinkGalaxy from "../../archives/prod9.png";
import ORM from "../../archives/prod10.png";
import catchuphover from "../../archives/hover1.png";
import nescafehover from "../../archives/hover4.png";
import markethover from "../../archives/hover5.png";
import portfoliohover from "../../archives/hover8.png";
import hepicohover from "../../archives/hover3.png";
import adidashover from "../../archives/hover2.png";
import illustrationhover from "../../archives/hover6.png";
import tourismhover from "../../archives/hover7.png";
import BGhover from "../../archives/hover9.png";
import ORhover from "../../archives/hover10.png";

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
                onClick={() => handleClick("/proyects/hepico")}
                src={hepicohover}
                style={{ cursor: "pointer" }}
              />
              <img id="vert" src={hepico} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/blinkgalaxy")}
                src={BGhover}
                style={{ cursor: "pointer" }}
              />
              <img id="hori" src={blinkGalaxy} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/catchup")}
                src={catchuphover}
                style={{ cursor: "pointer" }}
              />
              <img id="hori" src={catchup} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/tourism")}
                src={tourismhover}
                style={{ cursor: "pointer" }}
              />
              <img id="vert" src={tourism} />
            </div>
          </div>

          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/managmentweb")}
                src={ORhover}
                style={{ cursor: "pointer" }}
              />
              <img id="vert" src={ORM} />
            </div>

            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/nescafe")}
                src={nescafehover}
                style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
              />
              <img id="hori" src={market} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/illustration")}
                src={illustrationhover}
                style={{ cursor: "pointer" }}
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
                style={{ cursor: "pointer" }}
              />
              <img id="vert" src={adidas} />
            </div>

            <div>
              <img
                id="hover"
                onClick={() => handleClick("/proyects/portfolio")}
                src={portfoliohover}
                style={{ cursor: "pointer" }}
              />
              <img id="hori" src={portfolio} />
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
