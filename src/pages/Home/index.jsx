import React, { forwardRef } from "react";
import "./index.css";

const Home = forwardRef((props, ref) => {
  return (
    <>
      <section ref={ref} className="home-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 d-flex align-items-center justify-content-center">
              <div className="text-home">
                <span className="subheading">Hello !</span>
                <h1 className="mb-4 mt-3">
                  I'm a <span>React.js</span>
                </h1>
                <p> front end developer</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="home-img"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
});

export default Home;
