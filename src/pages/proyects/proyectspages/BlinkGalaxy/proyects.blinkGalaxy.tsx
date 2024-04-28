import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectBlinkGalaxyComponent } from "./proyects.blinkGalaxy.component";

export const ProyectBlinkGalaxy: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectBlinkGalaxyComponent />
      <Sign />
    </>
  );
};
