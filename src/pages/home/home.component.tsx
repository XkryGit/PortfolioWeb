import React, { useEffect } from "react";
import { HomeStartComponent } from "./home.start.component";
import { HomePresentComponent } from "./home.present.component";
import { HomeProjectsComponent } from "./home.projects.component";
import { HomeContactComponent } from "./home.contact.component";
import "./home.styles.scss";

export const HomeComponent: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HomeStartComponent />
      <HomePresentComponent />
      <HomeProjectsComponent />
      <HomeContactComponent />
    </>
  );
};
