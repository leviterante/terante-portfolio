import React from "react";
import { BiChevronsRight } from "react-icons/bi";

import { images } from "../../../constants";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-title">
          <h2>About</h2>
          <p>
            Levi is a freelance and a full-stack developer based in France with
            a passion for building digital services/stuff he wants. He has a
            knack for all things launching products, from planning and designing
            all the way to solving real-life problems with code. When not
            online, he loves hanging out, playing sports, gaming and exercising.
            Currently, he is honing his skills in both frontend and backend
            development.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4" data-aos="fade-right">
            <img src={images.profile} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
            <h3>UI/UX Designer & Fullstack Developer.</h3>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BiChevronsRight />
                    <strong>Birthday:</strong> <span>28 April 1996</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>Website:</strong> <span>www.example.com</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>Phone:</strong> <span>+33 7 69 55 20 23</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>City:</strong> <span>Strasbourg 67000, France</span>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <BiChevronsRight />
                    <strong>Age:</strong>
                    <span>26</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>Degree:</strong> <span>DUT</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>Email:</strong>
                    <span>terantelevi@gmail.com</span>
                  </li>
                  <li>
                    <BiChevronsRight />
                    <strong>Freelance:</strong> <span>Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p>
              Computer science graduate with experience working across the
              full-stack of software development. I have a couple of real
              projects under my belt and a few side projects to keep my skill
              sharp. Currently looking for a role in the junior position where I
              can grow and continue to learn from other experienced team
              members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
