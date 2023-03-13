import React from "react";
import { Navbar } from "../../common/navbar.contact";
import { Sign } from "../../common/sign";
import { ContactComponent } from "./contact.component";
import "./contact.styles.scss";

export const Contact: React.FC = () => {
  return (
    <>
      <Navbar />
      <ContactComponent />
      <Sign />
    </>
  );
};
