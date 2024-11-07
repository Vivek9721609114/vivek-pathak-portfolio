import React from "react";
import "./index.css";

const HeadinContent = (props) => {
  const { paraName, h2Heading, h1Heading } = props;
  return (
    <>
      <div className="row justify-content-center pb-5">
        <div className="col-md-10 heading-section text-center ftco-animate fadeInUp ftco-animated">
          <h1 className="big big-2">{h1Heading}</h1>
          <h2 className="md-4 h2-white">{h2Heading}</h2>
          <p>{paraName}</p>
        </div>
      </div>
    </>
  );
};

export default HeadinContent;
