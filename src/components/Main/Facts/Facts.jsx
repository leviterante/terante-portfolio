import React, { useEffect } from "react";
import PureCounter from "@srexi/purecounterjs";
import { BsEmojiSmile } from "react-icons/bs";
import {
  AiOutlineCoffee,
  AiOutlineProject,
  AiOutlineHourglass,
} from "react-icons/ai";

const Facts = () => {
  useEffect(() => {
    new PureCounter();
  }, []);
  return (
    <section id="facts" className="facts">
      <div className="container">
        <div className="section-title">
          <h2>Facts</h2>
          <p>
            Developed an inventory manager during a three month internship
            within the company Eko Supreme Nigeria Ltd. Currently, maintaining
            an E-Commerce Website :{" "}
            {<a href="https://www.chrisbijoux.com/">chrisbijoux.com</a>}
          </p>
        </div>
        <div className="row no-gutters">
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
          >
            <div className="count-box">
              <i>
                <BsEmojiSmile />
              </i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="2"
                data-purecounter-duration="1"
                className="purecounter"
              />
              <p>
                <strong>Happy Clients</strong> <br />
                E-Commerce Websites
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="count-box">
              <i>
                <AiOutlineCoffee />
              </i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="200"
                data-purecounter-duration="1"
                className="purecounter"
              />
              <p>
                <strong>Coffees drank</strong> <br />
                Caramel machiatto
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="count-box">
              <i>
                <AiOutlineProject />
              </i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="5"
                data-purecounter-duration="1"
                className="purecounter"
              />
              <p>
                <strong>Projects</strong> <br />
                Diverse
              </p>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="count-box">
              <i>
                <AiOutlineHourglass />
              </i>
              <span
                data-purecounter-start="0"
                data-purecounter-end="2"
                data-purecounter-duration="1"
                className="purecounter"
              />
              <p>
                <strong>Years of Experience</strong> <br />
                Work Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facts;
