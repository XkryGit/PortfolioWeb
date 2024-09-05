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
            I'm looking to grow and learn in the world of{" "}
            <b>FrontEnd programming</b>, in order to be able to, along with my{" "}
            <b>visual design skills</b>, make great visual approaches to the
            projects that I undertake.
          </h3>
          <h3>
            I am{" "}
            <b>
              excited and enthusiastic at the prospect of taking on ambitious
              and larger scale projects
            </b>{" "}
            where I have the opportunity to demonstrate my skill sets, to
            develop my abilities and to build strong working relationships where
            we can achieve amazing things together. <b>Please do not hesitate to
            contact me</b> if you have any enquiries, big or small, and I would be
            happy to discuss your projects and goals with you, and share my
            ideas and how I can assist.
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
