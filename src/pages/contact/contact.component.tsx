import React, { useEffect, useState } from "react";

export const ContactComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClickExt = (x) => {
    window.open(x, "_blank");
  };

  return (
    <>
      <div id="contactpage">
        <div>
          <h3>
            I'm looking to grow and learn in the world of FrontEnd programming,
            in order to be able, along with my visual design skills, to be able
            to make great visual approaches to the projects.
          </h3>
          <h3>
            I'm interested in working together, especially ambitious or large
            projects. However, if you have other request or question, don't
            hesitate to question me as you prefer.
          </h3>
          <div id="buttons">
            <button
              onClick={() =>
                handleClickExt("mailto:adolfozambranagilabert@gmail.com")
              }
              id="contact"
            >
              adolfozambranagilabert@gmail.com
            </button>
            <button
              onClick={() => handleClickExt("tel:656915603")}
              id="contact"
            >
              Phone: +34 656 915 603
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
