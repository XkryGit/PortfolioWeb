import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectTourismComponent } from "./proyects.tourism.component";

export const ProyectTourism: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectTourismComponent />
      <Sign />
    </>
  );
};
