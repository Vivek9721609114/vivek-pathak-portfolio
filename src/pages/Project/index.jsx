import React, { forwardRef } from "react";
import "./index.css";
import HeadinContent from "../../widgets/HeadingContent";

const Project = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="project-section">
        <div className="container">
          <HeadinContent
            h1Heading="Project"
            h2Heading="Our Project"
            paraName="Far far away, behind the word mountains, far from the countries Vokalia and Consonantia"
          />
          <div className="row">
            <div className="col-md-4">
              <div className="img-project-1 mb-4 d d-flex">
                <div className="overlay"></div>
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Branding & Illustration Design</a>
                    </h3>
                    <span>Web disign</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-2 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Branding & Illustration Design</a>
                    </h3>
                    <span>Web disign</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="img-project-3 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Branding & Illustration Design</a>
                    </h3>
                    <span>Web disign</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="img-project-4 mb-4 d-flex">
                <div className="text text-center">
                  <div className="content">
                    <h3>
                      <a href="#">Branding & Illustration Design</a>
                    </h3>
                    <span>Web disign</span>
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

export default Project;
