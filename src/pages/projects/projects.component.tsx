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

export const ProjectsComponent: React.FC = () => {
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
                onClick={() => handleClick("/projects/hepico")}
                src={hepicohover}
                style={{ cursor: "pointer" }}
                alt="hepico"
              />
              <img id="vert" src={hepico} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/blinkgalaxy")}
                src={BGhover}
                style={{ cursor: "pointer" }}
                alt="blinkGalaxy"
              />
              <img id="hori" src={blinkGalaxy} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/catchup")}
                src={catchuphover}
                style={{ cursor: "pointer" }}
                alt="catchup"
              />
              <img id="hori" src={catchup} />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/tourism")}
                src={tourismhover}
                style={{ cursor: "pointer" }}
                alt="tourism"
              />
              <img id="vert" src={tourism} />
            </div>
          </div>

          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/managmentweb")}
                src={ORhover}
                style={{ cursor: "pointer" }}
                alt="ORM"
              />
              <img id="vert" src={ORM} />
            </div>

            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/nescafe")}
                src={nescafehover}
                style={{ cursor: "pointer" }}
                alt="nescafe"
              />
              <img id="hori" src={nescafe} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/marketplace")}
                src={markethover}
                style={{ cursor: "pointer" }}
                alt="market"
              />
              <img id="hori" src={market}  />
            </div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/illustration")}
                src={illustrationhover}
                style={{ cursor: "pointer" }}
                alt="illustration"
              />

              <img id="vert" src={illustration} />
            </div>
          </div>
          <div>
            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/adidas")}
                src={adidashover}
                style={{ cursor: "pointer" }}
                alt="adidas"
              />
              <img id="vert" src={adidas}  />
            </div>

            <div>
              <img
                id="hover"
                onClick={() => handleClick("/projects/portfolio")}
                src={portfoliohover}
                style={{ cursor: "pointer" }}
                alt="portfolio"
              />
              <img id="hori" src={portfolio}  />
            </div>
          </div>
        </ul>
      </div>
    </>
  );
};
