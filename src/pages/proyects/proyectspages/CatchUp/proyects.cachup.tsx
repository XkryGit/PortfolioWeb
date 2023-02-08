import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectCatchupComponent } from "./proyects.catchup.component";

export const ProyectCatchup: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectCatchupComponent />
      <Sign />
    </>
  );
};
