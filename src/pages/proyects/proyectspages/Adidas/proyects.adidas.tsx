import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectAdidasComponent } from "./proyects.adidas.component";

export const ProyectAdidas: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectAdidasComponent />
      <Sign />
    </>
  );
};
