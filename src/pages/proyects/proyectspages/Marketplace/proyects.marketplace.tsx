import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectMarketplaceComponent } from "./proyects.marketplace.component";

export const ProyectMarketplace: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectMarketplaceComponent />
      <Sign />
    </>
  );
};
