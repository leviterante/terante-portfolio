import React from "react";

import {
  About,
  Facts,
  Skills,
  Resume,
  Portfolio,
  Services,
  Testimonials,
  Contact,
} from "./";

const Main = () => {
  return (
    // About Section
    <main id="main">
      <About />
      <Facts />
      <Skills />
      <Resume />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
    </main>
  );
};

export default Main;
