import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectManagmentWebComponent } from "./proyects.managmentWeb.component";

export const ProyectManagmentWeb: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectManagmentWebComponent />
      <Sign />
    </>
  );
};
