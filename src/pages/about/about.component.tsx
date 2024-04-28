import React, { useEffect } from "react";
import aboutphoto from "../../archives/aboutphoto.png";

export const AboutComponent: React.FC = () => {
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
            Hello, my name is <b>Adolfo</b>, and I am looking to grow
            permanently in the world of{" "}
            <b>FrontEnd programming, Graphic Design and Illustration.</b> I am
            natural and I live in Fuengirola, a small coastal city in the south
            of Spain. I studied <b> Audiovisual Communication</b> at the
            University of Malaga, and
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
            I worked for two years in a technology company where I performed,
            among other functions,
            <b> application prototyping and UX/UI design</b>, in the following
            years and a half I was studying and working as a{" "}
            <b>FrontEnd designer</b>, and in the last year I have worked for a
            company of video games as
            <b>Front-end developer specializing in UX/UI</b>, generating
            platforms and management pages for the company's video game
            ecosystem.
          </h3>
          <h3>
            I mainly work with technologies such as
            <b> Next.js, React, TypeScript, SASS or Tailwind</b>, among others,
            although I am used to working with{" "}
            <b>Angular or Vanilla JavaScript.</b>
            In the field of visual design, I work with the complete{" "}
            <b>Adobe pack</b>, managing practically all the tools. I am also
            familiar with working with <b>Agile Scrum</b> work methodologies.
          </h3>
          <h3>
            You can read more about my experience, skills, education and much
            more in the PDF attached bellow:
          </h3>

          <button
            onClick={() =>
              handleClickExt(
                "https://xkrygit.github.io/PortfolioWeb/CurriculumAdolfo2024Eng.pdf"
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
