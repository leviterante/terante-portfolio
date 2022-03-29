import React from "react";
import { Routes, Route } from "react-router-dom";

import "./assets/css/style.scss";
import "./assets/js/main.js";

import { Mobile, Header, Footer, BackToTop } from "./components";
import { Home, PortfolioDetails, Error404 } from "./pages";

const App = () => {
  return (
    <>
      <Mobile />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio_details/:id" element={<PortfolioDetails />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
