import React from "react";
import "./index.css";

const ResumeCard = ({ year, degree, university }) => {
  return (
    <>
      <div className="resume-wrap ftco-animate fadeInUp ftco-animated">
        <span className="date">{year}</span>
        <h2>{degree}</h2>
        <span>{university}</span>
      </div>
    </>
  );
};

export default ResumeCard;
