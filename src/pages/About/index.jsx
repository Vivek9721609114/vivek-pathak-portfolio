import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";
import Button from "../../widgets/Button";

const About = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="about-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 col-lg-5 d-flex">
              <div className="about-Img"></div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5">
              <div className="row justify-content-start pb-3 about-text">
                <div className="col-12 about-form ">
                  <h1 className="big">About</h1>
                  <h2 className="mb-4 h2-text">About Me</h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                  <ul className="about-info mt-4 px-g-md-0 px-2">
                    <li className="d-flex">
                      <span>Name:</span>
                      <span>Vivek Pathak</span>
                    </li>
                    <li className="d-flex">
                      <span>Date of Birth:</span>
                      <span>25/07/2001</span>
                    </li>
                    <li className="d-flex">
                      <span>Address:</span>
                      <span>Lucknow</span>
                    </li>
                    <li className="d-flex">
                      <span>zip code:</span>
                      <span>123456</span>
                    </li>
                    <li className="d-flex">
                      <span>Email:</span>
                      <span>pathakvivek888111@gmail.com</span>
                    </li>
                    <li className="d-flex">
                      <span>Phone:</span>
                      <span>+91 6392175188</span>
                    </li>
                  </ul>
                  <div className="Project-count mt-4">
                    <div className="text-project">
                      <p className="mb-4">
                        <span>120</span>
                        <span> Project complete</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default About;
