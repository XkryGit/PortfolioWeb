import React from "react";
import { Navbar } from "../../common/navbar.home";
import { Sign } from "../../common/sign";
import { HomeComponent } from "./home.component";

export const Home: React.FC = () => {
  return (
    <>
      <Navbar />
      <HomeComponent />
      <Sign />
    </>
  );
};
