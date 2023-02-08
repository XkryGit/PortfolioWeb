import React, { useEffect } from "react";

const aboutphoto = require("../../images/aboutphoto.png");

export const BioComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const handleClickExt = (x) => {
    window.open(x, "_blank");
  };
  return (
    <>
      <div id="about">
        <div>
          <h3>
            Hello, my name is <b>Adolfo</b> , I am natural and I live in
            <b> Fuengirola</b>, a small coastal city in the south of Spain. I
            studied
            <b> Audiovisual Communication</b> at the University of Malaga, and
            <b> Visual Design and FrontEnd Programming</b> at two private
            schools in the city.
          </h3>
          <h3>
            I am a <b>dynamic, self-taught</b> person who seeks to find new
            personal and professional challenges in each project, seeking to
            transmit my style taking care of every last detail. I am also
            passionate about
            <b> basketball and video games.</b>
          </h3>
          <h3>
            You can read more about my experience, skills, education and much
            more in the PDF attached bellow:
          </h3>

          <button
            onClick={() =>
              handleClickExt(
                "https://drive.google.com/file/d/1NX1ORpcqcUauaTDhg2b-QQbUNaOP8Ihr/view?usp=sharing"
              )
            }
          >
            My resume
          </button>
        </div>
        <div>
          <img id="aboutphoto" src={aboutphoto} />
        </div>
      </div>
    </>
  );
};
