import React from "react";
import Typed from "typed.js";
import { useEffect } from "react";

const Hero = () => {
  /**
   * Hero type effect
   */
  useEffect(() => {
    const typed = new Typed(".typed", {
      strings: ["Designer", "Developer", "Freelancer"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="hero-container" data-aos="fade-in">
        <h1>Levi Terante</h1>
        <p>
          I'm a <span className="typed"></span>
        </p>
      </div>
    </section>
  );
};

export default Hero;
