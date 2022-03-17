import React from "react";

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <h3>Diversity & Inclusion</h3>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Summary</h3>
            <div className="resume-item pb-0">
              <h4>Levi Terante</h4>
              <p>
                <em>
                  Innovative and deadline-driven Fullstack Developer with some
                  experience in designing and developing user-centered material
                  from initial concept to final, polished deliverable.
                </em>
              </p>
              <ul>
                <li>5 Rue St. Louis Strasbourg, 67000, France</li>
                <li>+33 7 69 55 20 23</li>
                <li>terantelevi@gmail.com</li>
              </ul>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Computer Science Graduate</h4>
              <h5>2017 - 2019</h5>
              <p>
                <em>
                  DUT Informatique - IUT Robert Schuman - Université de
                  Strasbourg, 67000, France
                </em>
              </p>
              <p>
                The holder of the diploma can exercise the functions of designer
                of computer applications, developer of web applications,
                administrator of networks or systems, or in the longer term of
                project manager or architect of databases.
              </p>
            </div>
            <div className="resume-item">
              <h4>French Language Learning</h4>
              <h5>2015 - 2016</h5>
              <p>
                <em>
                  CIEL - Centre International D'Etude de Langues - Strasbourg,
                  67000, France
                </em>
              </p>
              <p>
                A French school certified in accordance with the FLE Quality
                Label
              </p>
            </div>
            <div className="resume-item">
              <h4>Highschool Graduate with Honors Diploma</h4>
              <h5>2015</h5>
              <p>
                <em>West Mills British School - Lagos, Nigeria</em>
              </p>
              <p>
                Obtained several GCSE's including Math, English, Physics,
                Biology and many others
              </p>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-up">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>Freelancer</h4>
              <h5>2020 - Present</h5>
              <p>
                <em>Strasbourg, 67000, France</em>
              </p>
              <ul>
                <li>
                  Built and currently managing an active E-Commerce Website
                </li>
                <li>Improving skills by building side projects</li>
                <li>
                  Planning to start a new E-Commerce website with a partner
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>Culinarian</h4>
              <h5>2019 - 2020</h5>
              <p>
                <em>
                  La Rizière - Restaurant traiteur vietnamien, Strasbourg,
                  67000, France
                </em>
              </p>
              <ul>
                <li>
                  Ensured that all food is of excellent quality and served in a
                  timely manner.
                </li>
                <li>Oversaw all operations.</li>
                <li>Coordinated the staff, and assisted them as required.</li>
                <li>
                  Took stock of ingredients and equipment, and placed orders to
                  replenish stock.
                </li>
                <li>
                  Received feedback and made improvements where necessary.
                </li>
              </ul>
            </div>
            <div className="resume-item">
              <h4>I.T. Intern</h4>
              <h5>2018 - 2019</h5>
              <p>
                <em>Eko Supreme Nigeria Ltd, Lagos, Nigeria</em>
              </p>
              <ul>
                <li>
                  Built an smart inventory manager (SIM) used to track and
                  record new stock as its delivered and shipped out.
                </li>
                <li>
                  Responded to user requests for service, troubleshoot problems
                  and help develop solutions.
                </li>
                <li>
                  Maintained an open communication and positive working
                  relationship with staff.
                </li>
                <li>Performed other duties/projects as assigned</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
