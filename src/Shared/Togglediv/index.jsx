import React from "react";
import { IoReorderThreeSharp } from "react-icons/io5";
import "./index.css";
const Togglediv = (props) => {
  return (
    <>
      <div className="togdiv">
        <div className="toggledivcontainer">
          <div className="togglelogo">
            <span>RESUME</span>
          </div>
          <div className="toggleicon">
            <i>
              <IoReorderThreeSharp
                onClick={props.toggleclick}
                className="icon"
              />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default Togglediv;
