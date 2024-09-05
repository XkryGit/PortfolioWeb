import React from "react";
import sub from "../../archives/sub.png";

export const HomeContactComponent: React.FC = () => {
  const handleClickExt = (x) => {
    window.open(x, "_blank");
  };
  return (
    <>
      <div id="contact">
        <img id="sub" src={sub} />
        <h1 id="title">How to get in touch</h1>
        <h3>
          I am excited and enthusiastic at the prospect of taking on ambitious
          and larger scale projects where I have the opportunity to demonstrate
          my skill sets, to develop my abilities and to build strong working
          relationships where we can achieve amazing things together.
        </h3>{" "}
        <h3>
          Please do not hesitate to contact me if you have any enquiries, big or
          small, and I would be happy to discuss your projects and goals with
          you, and share my ideas and how I can assist.
        </h3>
        <div id="buttons">
          <button
            onClick={() =>
              handleClickExt("mailto:adolfozambranagilabert@gmail.com")
            }
          >
            adolfozambranagilabert@gmail.com
          </button>
          <button onClick={() => handleClickExt("tel:656915603")}>
            Phone: +34 656 915 603
          </button>
        </div>
      </div>
    </>
  );
};
