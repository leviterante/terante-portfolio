import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import "./assets/css/style.scss";
import "./assets/js/main.js";

import { Mobile, Header, Hero, Main, Footer, BackToTop } from "./components";

const App = () => {
  return (
    <div className="app">
      <Mobile />
      <Header />
      <Hero />
      <Main />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;
