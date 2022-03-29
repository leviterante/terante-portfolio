import React, { useRef } from "react";
import Iframe from "react-iframe";
import { BsGeoAlt } from "react-icons/bs";
import { FaEnvelopeOpenText } from "react-icons/fa";
import { GiVibratingSmartphone } from "react-icons/gi";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>
            For further information, do not hesitate to contact me using the
            form below or by using my contact details.
          </p>
        </div>

        <div className="row" data-aos="fade-in">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i>
                  <BsGeoAlt />
                </i>
                <h4>Location :</h4>
                <p>5 Rue St. Louis Strasbourg, 67000, France</p>
              </div>
              <div className="email">
                <i>
                  <FaEnvelopeOpenText />
                </i>
                <h4>Email:</h4>
                <p>terantelevi@gmail.com</p>
              </div>
              <div className="phone">
                <i>
                  <GiVibratingSmartphone />
                </i>
                <h4>Call:</h4>
                <p>+33 7 69 55 20 23</p>
              </div>
              <Iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=290px&amp;hl=en&amp;q=5%20rue%20st%20louis%20strasbourg+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="290px"
                allowfullscreen
                frameborder="0"
              />
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form ref={form} onSubmit={sendEmail} className="email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="form-group col-md-6">
                  <label>Your Email</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  className="form-control"
                  name="message"
                  rows="10"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" value="Send">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
