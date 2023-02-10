import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Bio } from "./pages/bio/bio";
import { Proyects } from "./pages/proyects/proyects";
import { Contact } from "./pages/contact/contact";
import { Home } from "./pages/home/home";
import { ProyectCatchup } from "./pages/proyects/proyectspages/CatchUp/proyects.cachup";
import { ProyectAdidas } from "./pages/proyects/proyectspages/Adidas/proyects.adidas";
import { ProyectHepico } from "./pages/proyects/proyectspages/Hepico/proyects.hepico";
import { ProyectNescafe } from "./pages/proyects/proyectspages/Nescafe/proyects.nescafe";
import { ProyectMarketplace } from "./pages/proyects/proyectspages/Marketplace/proyects.marketplace";
import { ProyectIllustration } from "./pages/proyects/proyectspages/Illustration/proyects.illustration";
import { ProyectTourism } from "./pages/proyects/proyectspages/Tourism/proyects.tourism";
import { ProyectPortfolio } from "./pages/proyects/proyectspages/Portfolio/proyects.portfolio";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/proyects" element={<Proyects />} />
        <Route path="/proyects/catchup" element={<ProyectCatchup />} />
        <Route path="/proyects/adidas" element={<ProyectAdidas />} />
        <Route path="/proyects/hepico" element={<ProyectHepico />} />
        <Route path="/proyects/nescafe" element={<ProyectNescafe />} />
        <Route path="/proyects/marketplace" element={<ProyectMarketplace />} />
        <Route path="/proyects/tourism" element={<ProyectTourism />} />
        <Route path="/proyects/portfolio" element={<ProyectPortfolio />} />
        <Route
          path="/proyects/illustration"
          element={<ProyectIllustration />}
        />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};
