import React from "react";
import { useParams, Link } from "react-router-dom";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { projects } from "../constants";
const PortfolioDetails = () => {
  const { id } = useParams();
  const project = projects.at(id - 1);
  return (
    <main id="main">
      <section id="breadcrumbs" className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{project.name}</h2>
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Portfolio Details</li>
            </ol>
          </div>
        </div>
      </section>
      <section id="portfolio-details" className="portfolio-details">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-8">
              <Swiper
                className="portfolio-details-slider swiper"
                modules={[Pagination, Autoplay]}
                speed={400}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                slidesPerView={"auto"}
                pagination={{ clickable: true, el: ".swiper-pagination" }}
              >
                <div className="swiper-wrapper align-items-center">
                  {project.img.map((image) => (
                    <SwiperSlide>
                      <img src={image} alt="" />
                    </SwiperSlide>
                  ))}
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
            <div className="col-lg-4">
              <div className="portfolio-info">
                <h3>Project information</h3>
                <ul>
                  <li>
                    <strong>Category</strong>: {project.category}
                  </li>
                  <li>
                    <strong>Client</strong>: {project.client}
                  </li>
                  <li>
                    <strong>Project date</strong>: {project.project_date}
                  </li>
                  <li>
                    <strong>Project URL</strong>:{" "}
                    <a href={project.project_url}>{project.project_url}</a>
                  </li>
                </ul>
              </div>
              <div className="portfolio-description">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetails;
