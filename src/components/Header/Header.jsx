import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebook,
  FaInstagram,
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
            <Link to="/">Levi Terante</Link>
          </h1>
          <div className="social-links mt-3 text-center">
            <a href="https://github.com/leviterante" className="social">
              <FaGithub />
            </a>
            <a href="https://www.facebook.com/levi.terante" className="social">
              <FaFacebook />
            </a>
            <a href="https://www.instagram.com/levs29_/" className="social">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/levi-terante-728826bb/"
              className="social"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <nav id="navbar" className="nav-menu navbar">
          <ul>
            <li>
              <Link to="/#hero" className="nav-link scrollto">
                <i>
                  <FaHome />
                </i>
                <span>&nbsp;Home</span>
              </Link>
            </li>
            <li>
              <Link to="/#about" className="nav-link scrollto">
                <i>
                  <FaUser />
                </i>
                <span>&nbsp;About</span>
              </Link>
            </li>
            <li>
              <Link to="/#resume" className="nav-link scrollto">
                <i>
                  <FaFile />
                </i>
                <span>&nbsp;Resume</span>
              </Link>
            </li>
            <li>
              <Link to="/#portfolio" className="nav-link scrollto">
                <i>
                  <FaBook />
                </i>
                <span>&nbsp;Portfolio</span>
              </Link>
            </li>
            <li>
              <Link to="/#services" className="nav-link scrollto">
                <i>
                  <FaServer />
                </i>
                <span>&nbsp;Services</span>
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="nav-link scrollto">
                <i>
                  <FaEnvelope />
                </i>
                <span>&nbsp;Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
