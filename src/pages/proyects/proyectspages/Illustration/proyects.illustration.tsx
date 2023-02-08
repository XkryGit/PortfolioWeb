import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectIllustrationComponent } from "./proyects.illustration.component";

export const ProyectIllustration: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectIllustrationComponent />
      <Sign />
    </>
  );
};
