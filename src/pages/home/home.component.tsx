import React, { useEffect } from "react";
import { HomeStartComponent } from "./home.start.component";
import { HomePresentComponent } from "./home.present.component";
import { HomeProyectsComponent } from "./home.proyects.component";
import { HomeContactComponent } from "./home.contact.component";

export const HomeComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeStartComponent />
      <HomePresentComponent />
      <HomeProyectsComponent />
      <HomeContactComponent />
    </>
  );
};
