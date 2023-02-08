import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectHepicoComponent } from "./proyects.hepico.component";

export const ProyectHepico: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectHepicoComponent />
      <Sign />
    </>
  );
};
