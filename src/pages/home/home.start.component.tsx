import React from "react";
import adolfobrillo from "../../archives/adolfobrillo.mp4";
import sub from "../../archives/sub.png";

export const HomeStartComponent: React.FC = () => {
  const playMovie = (e) => {
    e.target.play();
  };
  return (
    <>
      <div id="home">
        <div id="homeStart">
          <img id="sub" src={sub} />
          <h1 id="title">Adolfo Zambrana</h1>
          <h3 id="subtitle">
            Frontend Developer, Visual Designer & Illustrator.
          </h3>
        </div>
        <video
          id="illus"
          onMouseOver={playMovie}
          preload="auto"
          autoPlay
          muted
          src={adolfobrillo}
        ></video>
      </div>
    </>
  );
};
