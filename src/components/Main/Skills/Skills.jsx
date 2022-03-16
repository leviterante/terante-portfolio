import React from "react";
import { Waypoint } from "react-waypoint";

import { select } from "../../../assets/js/main";

const Skills = () => {
  /**
   * Skills animation
   */
  const changeWidth = function () {
    let progress = select(".progress .progress-bar", true);
    progress.forEach((el) => {
      el.style.width = el.getAttribute("aria-valuenow") + "%";
    });
  };

  const resetWidth = function () {
    let progress = select(".progress .progress-bar", true);
    progress.forEach((el) => {
      el.style.width = el.getAttribute("aria-valuemin") + "%";
    });
  };

  return (
    <section id="skills" className="skills section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Skills</h2>
          <h3>High Caliber</h3>
        </div>

        <div className="row skills-content">
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                HTML <i className="val">100%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                CSS <i className="val">90%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="90"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                JAVASCRIPT <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <Waypoint onEnter={changeWidth} />
          <Waypoint onLeave={resetWidth} />
          <div className="col-lg-6" data-aos="fade-up">
            <div className="progress">
              <span className="skill">
                PHP <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                PYTHON <i className="val">80%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="80"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="progress">
              <span className="skill">
                C# <i className="val">75%</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="75"
                  aria-valuemin="1"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
