import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectNescafeComponent } from "./proyects.nescafe.component";

export const ProyectNescafe: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectNescafeComponent />
      <Sign />
    </>
  );
};
