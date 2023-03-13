import React from "react";
import { Navbar } from "../../common/navbar.proyects";
import { Sign } from "../../common/sign";
import { ProyectsComponent } from "./projects.component";
import "./projects.styles.scss";

export const Proyects: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectsComponent />
      <Sign />
    </>
  );
};
