import React from "react";
import { Navbar } from "../../../../common/navbar.proyects";
import { Sign } from "../../../../common/sign";
import { ProyectPortfolioComponent } from "./proyects.portfolio.component";

export const ProyectPortfolio: React.FC = () => {
  return (
    <>
      <Navbar />
      <ProyectPortfolioComponent />
      <Sign />
    </>
  );
};
