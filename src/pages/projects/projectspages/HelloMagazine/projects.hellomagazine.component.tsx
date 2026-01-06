import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import hello0 from "../../../../archives/prod11.png";
import bannercatch from "../../../../archives/bannercatch.png";
import hello1 from "../../../../archives/Hello1.png";
import hello2 from "../../../../archives/Hello2.png";
import hello3 from "../../../../archives/Hello3.png";
import hello4 from "../../../../archives/Hello4.png";
import hello5 from "../../../../archives/Hello5.png";
import hello6 from "../../../../archives/Hello6.png";

export const ProjectHelloMagazineComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  const handleClick = (x = "/") => navigate(x);
  return (
    <>
      <div id="proyectsDetails">
        <div id="start">
          <img id="first" src={hello0} />
          <div id="text">
            <h1>HELLO MAGAZINE PROJECT</h1>
            <div id="subtitle">
              <h2>Project web</h2>
              <h2>-</h2>
              <h2>2025</h2>
            </div>
            <h3>
              The Hello Magazine project stands out as a prestigious and global
              initiative, encompassing both Hello! Magazine and ¡HOLA! Magazine.
              It is aimed at delivering a modern, scalable, and visually
              appealing platform for an international audience. The project
              required close teamwork to ensure a seamless user experience,
              robust performance, and adaptability to the evolving needs of
              digital publishing. My contributions helped enhance the platform’s
              usability, maintainability, and overall quality, supporting the
              magazine’s mission to reach millions of readers worldwide.
            </h3>
            <h3>
              As a front-end developer, I focused on building optimized web
              experiences for high-traffic digital media, contributing to the
              development and maintenance of the prestigious ¡HOLA! Magazine and
              Hello! Magazine platforms and their related sites. My work
              involved using technologies such as Next.js, React, TypeScript,
              HTML5, CSS3, and Sass, implementing responsive design, and
              continuously improving performance and SEO. I collaborated with
              UX/UI designers, QA testers, and backend developers, managed
              version control with Git, and participated in CI/CD workflows. I
              was also responsible for resolving production bugs and refactoring
              legacy components.
            </h3>
          </div>
        </div>
        <div id="imagescolumn">
          <div id="columna">
            <img id="column" src={hello1} />
            <img id="column" src={hello2} />
            <img id="column" src={hello3} />
          </div>
          <div id="columnb">
            <img id="column" src={hello4} />
            <img id="column" src={hello5} />
            <img id="column" src={hello6} />
          </div>
        </div>
        <div id="banner">
          <img
            id="banner"
            onClick={() => handleClick("/projects/catchup")}
            src={bannercatch}
          />
        </div>
      </div>
    </>
  );
};
