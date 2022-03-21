import React, { useState, useEffect } from "react";
import { GiSheikahEye } from "react-icons/gi";
import { AiOutlineLink } from "react-icons/ai";
import Isotope from "isotope-layout";

import { images } from "../../../constants";

const Portfolio = () => {
  // state for storing the isotope object, with an initial value of null
  const [isotope, setIsotope] = useState(null);
  // state for storing the filter keyword, with an initial value of *, which matches everything
  const [filterKey, setFilterKey] = useState("*");
  useEffect(() => {
    setIsotope(
      new Isotope(".portfolio-container", {
        // filter-container: className of the parent of the isotope elements
        itemSelector: ".portfolio-item", // filter-item: className of the isotope elements
        layoutMode: "fitRows",
      })
    );
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
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
        </div>
        <div className="row" data-aos="fade-up">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li onClick={() => setFilterKey("*")} className="filter-active">
                All
              </li>
              <li onClick={() => setFilterKey("filter-app")}>App</li>
              <li onClick={() => setFilterKey("filter-card")}>Card</li>
              <li onClick={() => setFilterKey("filter-web")}>Web</li>
            </ul>
          </div>
        </div>

        <div
          className="row portfolio-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-wrap">
              <img src={images.portfolio1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={images.portfolio1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i>
                    <GiSheikahEye />
                  </i>
                </a>
                <a href="/" title="More Details">
                  <i>
                    <AiOutlineLink />
                  </i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-wrap">
              <img src={images.rain1} className="img-fluid" alt="" />
              <div className="portfolio-links">
                <a
                  href={images.rain1}
                  data-gallery="portfolioGallery"
                  className="portfolio-lightbox"
                  title="App 1"
                >
                  <i>
                    <GiSheikahEye />
                  </i>
                </a>
                <a href="/" title="More Details">
                  <i>
                    <AiOutlineLink />
                  </i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
