import React from "react";
import { useNavigate } from "react-router";
import sub from "../../archives/sub.png";
import nescafe from "../../archives/pro1.png";
import tourism from "../../archives/pro2.png";
import catchup from "../../archives/pro3.png";
import portfolio from "../../archives/pro4.png";
import marketplace from "../../archives/pro5.png";
import hepico from "../../archives/pro6.png";
import adidas from "../../archives/pro7.png";
import illustration from "../../archives/pro8.png";
import BG from "../../archives/pro9.png";
import BGM from "../../archives/pro10.png";
import hover from "../../archives/hover.png";

export const HomeProjectsComponent = () => {
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyects">
        <img id="sub" src={sub} />
        <h1 id="title">My recent Works</h1>
        <ul>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/blinkgalaxy")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="blinkgalaxy"
            />
            <img id="bg" src={BG} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/nescafe")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="nescafe"
            />
            <img id="nescafe" src={nescafe} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/managmentpages")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="managmentpages"
            />
            <img id="nescafe" src={BGM} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/tourism")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="tourism"
            />
            <img id="tourism" src={tourism} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/catchup")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="catchup"
            />
            <img id="catchup" src={catchup} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/portfolio")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="portfolio"
            />
            <img id="portfolio" src={portfolio} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/marketplace")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="marketplace"
            />
            <img id="marketplace" src={marketplace} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/hepico")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="hepico"
            />
            <img id="hepico" src={hepico} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/adidas")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="adidas"
            />
            <img id="adidas" src={adidas} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/projects/illustration")}
              src={hover}
              style={{ cursor: "pointer" }}
               data-testid="illustration"
            />
            <img id="illustration" src={illustration} />
          </li>
        </ul>
      </div>
    </>
  );
};
