import React from "react";
import { Navbar } from "../../common/navbar.about";
import { Sign } from "../../common/sign";
import { BioComponent } from "./bio.component";

export const Bio: React.FC = () => {
  return (
    <>
      <Navbar />
      <BioComponent />
      <Sign />
    </>
  );
};
