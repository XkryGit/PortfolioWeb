import React from "react";
import habilidadesfondo from "../../archives/habilidadesfondo.png";
import habilidadesgraficas from "../../archives/habilidadesgraficas.png";
import sub from "../../archives/sub.png";

export const HomePresentComponent: React.FC = () => {
  return (
    <>
      <div id="present">
        <img id="sub" src={sub} />
        <h1 id="title">Hi, nice to meet you</h1>
        <h3>
          Welcome to my portfolio. I am Adolfo and I am looking forward to
          taking on new and exciting opportunities and projects that will
          enhance my skills, and enable me to further develop in the world of
          <b> Frontend Development, Graphic Design and Illustration. </b>
        </h3>
        <h3>
          I am driven, meticulous and eager to learn and develop my
          capabilities. However, for now, I would rate my abilities in the
          development and graphic design worlds as follows:
        </h3>
        <div id="habilidades">
          <img id="habilidadesgraficas" src={habilidadesgraficas} />
          <img id="habilidadesfondo" src={habilidadesfondo} />
        </div>
      </div>
    </>
  );
};
