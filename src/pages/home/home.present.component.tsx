import React from "react";

const habilidadesfondo = require("../../images/habilidadesfondo.png");
const habilidadesgraficas = require("../../images/habilidadesgraficas.png");
const sub = require("../../images/sub.png");

export const HomePresentComponent: React.FC = () => {
  return (
    <>
      <div id="present">
        <img id="sub" src={sub} />
        <h1 id="title">Hi, nice to meet you</h1>
        <h3>
          Hello, my name is Adolfo and I am looking to grow in the world of
          <b> Frontend development, Graphic Design</b> and <b>Illustration.</b>
        </h3>
        <h3>My abilities right now are the following:</h3>
        <div id="habilidades">
          <img id="habilidadesgraficas" src={habilidadesgraficas} />
          <img id="habilidadesfondo" src={habilidadesfondo} />
        </div>
      </div>
    </>
  );
};
