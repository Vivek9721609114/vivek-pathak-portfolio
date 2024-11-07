import React from "react";
import "./index.css";
import Item from "../components/Navbar/Item";
const Toggle = (props) => {
  return (
    <>
      <div ref={props.toggleref} className="togglecontainer">
        <ul className="listcontainer">
          <Item liname="Home" onClick={props.OnGetMenu} className="list" />
          <Item liname="About" onClick={props.OnGetMenu} className="list" />
          <Item liname="Resume" onClick={props.OnGetMenu} className="list" />
          <Item liname="Skills" onClick={props.OnGetMenu} className="list" />
          <Item liname="Project" onClick={props.OnGetMenu} className="list" />
          <Item liname="My Blog" onClick={props.OnGetMenu} className="list" />
          <Item liname="Contact" onClick={props.OnGetMenu} className="list" />
        </ul>
      </div>
    </>
  );
};

export default Toggle;
