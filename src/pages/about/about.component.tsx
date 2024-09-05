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
            Welcome to my Portfolio. I am <b>Adolfo</b> and I am looking to grow
            and develop on a larger and more permanent scale in the world of
            <b> FrontEnd programming, Graphic Design and Illustration</b>. I am
            native to Spain and live in Fuengirola, a small coastal city in the
            south. I studied <b>Audiovisual Communication</b> at the University
            of Malaga, and
            <b> Visual Design and FrontEnd Programming</b> at two private
            schools in the city.
          </h3>
          <h3>
            I am a <b> dynamic, driven and focused self-taught person</b> who
            seeks to find new personal and professional challenges in each
            project that I undertake, seeking to incorporate my{" "}
            <b>meticulous style </b>
            in ensuring to consider every last detail along the way. I enjoy
            developing my mind and focus through personal study, as well as{" "}
            <b>video games</b>, where I can be creative, analytical, tactical
            and forward thinking. Outside of this, I enjoy keeping active and am
            inspired by the world around us, being outside in nature and playing
            sport, such as <b>basketball</b>.
          </h3>
          <h3>
            I worked for two years in a technology company where I performed,
            among other functions,{" "}
            <b>application prototyping and UX/UI design</b>. In the years that
            followed, I was studying and working as a <b>FrontEnd designer</b>,
            and in the last year I have worked for a video games company as a{" "}
            <b>Front-end developer, specialising in UX/UI</b>, generating
            platforms and management pages for the company's video game
            ecosystem.
          </h3>
          <h3>
            The majority of my experience thus far has been with technologies
            such as <b>Next.js, React, TypeScript, SASS or Tailwind</b>, among
            others, although I am used to working with{" "}
            <b>Angular or Vanilla JavaScript </b>
            also. In the field of visual design, I have gained extensive
            experience in working with all of the <b>Adobe programmes</b> and
            tools to achieve excellent outcomes. I also have experience in
            working with
            <b> Agile Scrum</b> work methodologies.
          </h3>
          <h3>
            If you think that I might be a good fit for your upcoming projects,
            you can read more about my <b>experience, skills, education</b>, etc
            . in more detail in the PDF attached below:
          </h3>

          <button
            onClick={() =>
              handleClickExt(
                "https://xkrygit.github.io/PortfolioWeb/CurriculumAdolfo2024Eng.pdf"
              )
            }
          >
            My Resume
          </button>
        </div>
        <div>
          <img id="aboutphoto" src={aboutphoto} />
        </div>
      </div>
    </>
  );
};
