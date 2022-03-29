import React, { useState, useEffect } from "react";
import { AiOutlineLink } from "react-icons/ai";
import Isotope from "isotope-layout";
import { Link } from "react-router-dom";

import { projects } from "../../../constants";
import { select, on } from "../../../assets/js/main";

const Portfolio = () => {
  const [isotope, setIsotope] = useState(null);
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    let portfolioContainer = select(".portfolio-container");
    if (portfolioContainer) {
      setIsotope(
        new Isotope(".portfolio-container", {
          itemSelector: ".portfolio-item",
          layoutMode: "fitRows",
        })
      );
      let portfolioFilters = select("#portfolio-filters li", true);

      on(
        "click",
        "#portfolio-filters li",
        function (e) {
          e.preventDefault();
          portfolioFilters.forEach(function (el) {
            el.classList.remove("filter-active");
          });
          this.classList.add("filter-active");
        },
        true
      );
    }
  }, []); // [] makes this useEffect work like a componentDidMount in a class component
  useEffect(() => {
    if (isotope) {
      // sanity check
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` });
    }
  }, [isotope, filterKey]);

  return (
    <section id="portfolio" className="portfolio section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>
            As a developer, I love engaging in learning new techniques & develop
            new skills. The one thing I love about being a developer is that
            there is always more to learn. A developer never would & cannot
            claim to know everything.
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li onClick={() => setFilterKey("*")} className="filter-active">
                All
              </li>
              <li onClick={() => setFilterKey("filter-ui")}>UI/UX</li>
              <li onClick={() => setFilterKey("filter-js")}>Javascript</li>
              <li onClick={() => setFilterKey("filter-web")}>Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {projects.map((project) => (
            <div className={project.className} key={project.id}>
              <div className="portfolio-wrap">
                <img src={project.img[0]} className="img-fluid" alt="" />
                <div className="portfolio-links">
                  <Link
                    to={"/portfolio_details/" + project.id}
                    title="More Details"
                  >
                    <i>
                      <AiOutlineLink />
                    </i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
