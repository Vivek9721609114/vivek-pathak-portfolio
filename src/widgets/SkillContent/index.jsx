import React from "react";
import "./index.css";

const SkillContent = (props) => {
  return (
    <>
      <div className="col-md-6 animate-boxes">
        <div className="progress-wrap ftco-animate fadeInUp ftco-animated">
          <h3>{props.name}</h3>
          <div className="progress d-flex">
            <div className="progress-bar" style={{ width: props.Width }}>
              <span>{props.percent}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkillContent;
