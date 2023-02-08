import React from "react";
import { Navbar } from "../../common/navbar.proyects";
import { Sign } from "../../common/sign";
import { ProyectsComponent } from "./proyects.component";

export const Proyects: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectsComponent />
      <Sign />
    </>
  );
};
