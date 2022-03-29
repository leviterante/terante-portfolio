import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { testimonials } from "../../../constants";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>See what other people think of me :</p>
        </div>

        <Swiper
          className="testimonials-slider"
          data-aos="fade-up"
          data-aos-delay="100"
          modules={[Pagination, Autoplay]}
          speed={600}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          slidesPerView={"auto"}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            1200: { slidesPerView: 3, spaceBetween: 20 },
          }}
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item" data-aos="fade-up">
                  <p>
                    <FaQuoteLeft className="quote-icon-left" />
                    {testimonial.testimonial}
                    <FaQuoteRight className="quote-icon-right" />
                  </p>
                  <a href={testimonial.link}>
                    <img
                      src={testimonial.img}
                      className="testimonial-img"
                      alt=""
                    />
                  </a>
                  <h3>
                    <a href={testimonial.link}>{testimonial.name}</a>
                  </h3>
                  <h4>{testimonial.profession}</h4>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
