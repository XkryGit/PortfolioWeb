import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./pages/about/about";
import { Projects } from "./pages/projects/projects";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { ProjectCatchup } from "./pages/projects/projectspages/CatchUp/projects.cachup";
import { ProjectAdidas } from "./pages/projects/projectspages/Adidas/projects.adidas";
import { ProjectHepico } from "./pages/projects/projectspages/Hepico/projects.hepico";
import { ProjectNescafe } from "./pages/projects/projectspages/Nescafe/projects.nescafe";
import { ProjectBlinkGalaxy } from "./pages/projects/projectspages/BlinkGalaxy/projects.blinkGalaxy";
import { ProjectMarketplace } from "./pages/projects/projectspages/Marketplace/projects.marketplace";
import { ProjectIllustration } from "./pages/projects/projectspages/Illustration/projects.illustration";
import { ProjectTourism } from "./pages/projects/projectspages/Tourism/projects.tourism";
import { ProjectPortfolio } from "./pages/projects/projectspages/Portfolio/projects.portfolio";
import { ProjectManagmentWeb } from "./pages/projects/projectspages/ManagmentWeb/projects.managmentWeb";
import { Navbar } from "./common/navbar";
import { Sign } from "./common/sign";

export const App = () => {
  return (<>
    
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/catchup" element={<ProjectCatchup />} />
        <Route path="/projects/adidas" element={<ProjectAdidas />} />
        <Route path="/projects/hepico" element={<ProjectHepico />} />
        <Route path="/projects/nescafe" element={<ProjectNescafe />} />
        <Route path="/projects/blinkgalaxy" element={<ProjectBlinkGalaxy />} />
        <Route
          path="/projects/managmentweb"
          element={<ProjectManagmentWeb />}
        />
        <Route path="/projects/marketplace" element={<ProjectMarketplace />} />
        <Route path="/projects/tourism" element={<ProjectTourism />} />
        <Route path="/projects/portfolio" element={<ProjectPortfolio />} />
        <Route
          path="/projects/illustration"
          element={<ProjectIllustration />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Sign />
    </Router>
    
    </>
  );
};
