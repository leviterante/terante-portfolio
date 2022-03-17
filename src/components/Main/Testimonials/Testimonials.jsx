import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container">
        <div className="section-title">
          <h2>Testimonials</h2>
          <p>
            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
            aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
            quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
            fugiat sit in iste officiis commodi quidem hic quas.
          </p>
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
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-item" data-aos="fade-up">
                <p>
                  <FaQuoteLeft className="quote-icon-left" />
                  Proin iaculis purus consequat sem cure digni ssim donec
                  porttitora entum suscipit rhoncus. Accusantium quam, ultricies
                  eget id, aliquam eget nibh et. Maecen aliquam, risus at
                  semper.
                  <FaQuoteRight className="quote-icon-right" />
                </p>
                <img src="" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo & Founder</h4>
              </div>
            </SwiperSlide>
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
