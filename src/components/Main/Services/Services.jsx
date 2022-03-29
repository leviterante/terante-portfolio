import React from "react";
import {
  MdOutlineDesignServices,
  MdArchitecture,
  MdManageAccounts,
} from "react-icons/md";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { BsHddNetwork } from "react-icons/bs";
import { SiArkecosystem } from "react-icons/si";

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p>
            I have worked on a couple of projects. This gave me the opportunity
            to gather knowledge about multiple aspects of web development rather
            than focusing on a particular task. As a result of which, I could
            engage with several different languages & development techniques
            too. It gave me primitive exposure to several different type of
            skills needed for web developement.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-6 icon-box" data-aos="fade-up">
            <div className="icon">
              <i>
                <MdOutlineDesignServices />
              </i>
            </div>
            <h4 className="title">App Designer</h4>
            <p className="description">
              Create programs for smartphones, tablets and computers. An app
              designer may create games, weather apps, social networking tools,
              maps and navigation programs, and much more.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="icon">
              <i>
                <AiOutlineAppstoreAdd />
              </i>
            </div>
            <h4 className="title">Web App Developer</h4>
            <p className="description">
              Capable of coding, designing, troubleshooting, monitoring updates
              and possible security threats, and providing end user support. As
              well as handle some project management tasks on the journey to
              building a new application.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="icon">
              <i>
                <BsHddNetwork />
              </i>
            </div>
            <h4 className="title">Networks Admin</h4>
            <p className="description">
              Ensures that all computer networks are operating to meet the needs
              of the organization.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="icon">
              <i>
                <SiArkecosystem />
              </i>
            </div>
            <h4 className="title">Data Entry Clerk</h4>
            <p className="description">
              Transferring data from paper formats into computer files or
              database systems. Typing in data provided directly from customers.
              Creating spreadsheets with large numbers of figures without
              errors.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="icon">
              <i>
                <MdManageAccounts />
              </i>
            </div>
            <h4 className="title">Systems Administrator</h4>
            <p className="description">
              Can manage, troubleshoot and proactively update hardware and
              software assets to prevent downtime or zero-day exploits from
              occurring.
            </p>
          </div>
          <div
            className="col-lg-4 col-md-6 icon-box"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="icon">
              <i>
                <MdArchitecture />
              </i>
            </div>
            <h4 className="title">Database Architect</h4>
            <p className="description">
              Maintains database by determining structural requirements, and
              developing and installing solutions. Ensures security of all
              information and computer systems and digital data. Ensures
              adherence to government regulations and guidelines for
              technological systems and safeguarding of data.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
