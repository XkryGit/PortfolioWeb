import React from "react";
import { Navbar } from "../../common/navbar.about";
import { Sign } from "../../common/sign";
import { AboutComponent } from "./about.component";
import "./about.styles.scss";

export const About: React.FC = () => {
  return (
    <>
      <Navbar />
      <AboutComponent />
      <Sign />
    </>
  );
};
