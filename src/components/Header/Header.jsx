import React, { useEffect } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaLinkedin,
  FaHome,
  FaUser,
  FaFile,
  FaBook,
  FaServer,
  FaEnvelope,
} from "react-icons/fa";

import { images } from "../../constants";
import { select, on, scrollto, onscroll } from "../../assets/js/main";

const Header = () => {
  /**
   * Scroll with ofset on links with a class name .scrollto
   */
  useEffect(() => {
    on(
      "click",
      ".scrollto",
      function (e) {
        if (select(this.hash)) {
          e.preventDefault();

          let body = select("body");
          if (body.classList.contains("mobile-nav-active")) {
            body.classList.remove("mobile-nav-active");
          }
          scrollto(this.hash);
        }
      },
      true
    );
    /**
     * Navbar links active state on scroll
     */
    let navbarlinks = select("#navbar .scrollto", true);
    const navbarlinksActive = () => {
      let position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        let section = select(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add("active");
        } else {
          navbarlink.classList.remove("active");
        }
      });
    };
    window.addEventListener("load", navbarlinksActive);
    onscroll(document, navbarlinksActive);
  }, []);

  return (
    <header id="header">
      <div className="d-flex flex-column">
        <div className="profile">
          <img
            src={images.profile}
            alt="Profile"
            className="img-fluid rounded-circle"
          />
          <h1 className="text-light">
            <a href="/">Levi Terante</a>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="/" className="social">
              <FaTwitter />
            </a>
            <a href="/" className="social">
              <FaFacebook />
            </a>
            <a href="/" className="social">
              <FaInstagram />
            </a>
            <a href="/" className="social">
              <FaGoogle />
            </a>
            <a href="/" className="social">
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <a href="#hero" className="nav-link scrollto">
                <FaHome /> <span>&nbsp;Home</span>
              </a>
            </li>
            <li>
              <a href="#about" className="nav-link scrollto">
                <FaUser /> <span>&nbsp;About</span>
              </a>
            </li>
            <li>
              <a href="#resume" className="nav-link scrollto">
                <FaFile /> <span>&nbsp;Resume</span>
              </a>
            </li>
            <li>
              <a href="#portfolio" className="nav-link scrollto">
                <FaBook /> <span>&nbsp;Portfolio</span>
              </a>
            </li>
            <li>
              <a href="#services" className="nav-link scrollto">
                <FaServer /> <span>&nbsp;Services</span>
              </a>
            </li>
            <li>
              <a href="#contact" className="nav-link scrollto">
                <FaEnvelope /> <span>&nbsp;Contact</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
