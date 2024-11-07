import React from "react";
import "./index.css";

const Icon = (props) => {
  return (
    <>
      <div className="col">
        <div className="Boxes">
          <div className="Icones">
            <span>{props.Icon}</span>
          </div>
        </div>
        <h2 className="mb-4 Icon-h2">{props.name}</h2>
        <p>{props.paraName}</p>
      </div>
    </>
  );
};

export default Icon;
