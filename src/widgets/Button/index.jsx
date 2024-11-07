import React from "react";
import "./index.css";

const Button = (props) => {
  return (
    <>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6 text-center ftco-animate fadeInUp ftco-animated">
          <button onClick={props.onClick} className="btn btn-primary py-4 px-5">
            {props.BtnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Button;
