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
        <h1 id="title">Contact me</h1>
        <h3>
          I'm interested in working together, especially ambitious and larges
          projects. However, if you have other request or question, don't
          hesitate to question me as you prefer.
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
