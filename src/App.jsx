import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Indicadores } from "./components/indicadores";
// import { MapaYSelectores } from "./components/mapa";
import {Mapa} from './components/map';

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header data={landingPageData.Header} />
              <Indicadores />
              <Mapa />
              {/* <MapaYSelectores /> */}
              <About data={landingPageData.About} />
              <Footer data={landingPageData.Footer} />
            </>
          }
        />
        <Route
          path="/contacto"
          element={
           <>
          <Contact data={landingPageData.Contact} />
        
          <Footer data={landingPageData.Footer} />
          </>
          }
        />
      </Routes>
    </Router>
    
  );
};

export default App;
