import React from "react";
import { useNavigate } from "react-router";

const sub = require("../../images/sub.png");
const nescafe = require("../../images/pro1.png");
const tourism = require("../../images/pro2.png");
const catchup = require("../../images/pro3.png");
const portfolio = require("../../images/pro4.png");
const marketplace = require("../../images/pro5.png");
const hepico = require("../../images/pro6.png");
const adidas = require("../../images/pro7.png");
const illustration = require("../../images/pro8.png");
const hover = require("../../images/hover.png");

export const HomeProyectsComponent = () => {
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
              onClick={() => handleClick("/proyects/nescafe")}
              src={hover}
            />
            <img id="nescafe" src={nescafe} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/tourism")}
              src={hover}
            />
            <img id="tourism" src={tourism} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/catchup")}
              src={hover}
            />
            <img id="catchup" src={catchup} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/portfolio")}
              src={hover}
            />
            <img id="portfolio" src={portfolio} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/marketplace")}
              src={hover}
            />
            <img id="marketplace" src={marketplace} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/hepico")}
              src={hover}
            />
            <img id="hepico" src={hepico} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/adidas")}
              src={hover}
            />
            <img id="adidas" src={adidas} />
          </li>
          <li>
            <img
              id="hover"
              onClick={() => handleClick("/proyects/illustration")}
              src={hover}
            />
            <img id="illustration" src={illustration} />
          </li>
        </ul>
      </div>
    </>
  );
};
