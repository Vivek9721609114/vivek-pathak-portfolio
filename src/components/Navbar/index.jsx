import React from "react";
import Item from "./Item";
import "./index.css";

const Navbar = ({ OnGetMenu }) => {
  return (
    <div className="navhideshow">
      <nav className="py-2 px-3">
        <div className="container d-flex justify-content-between">
          <div className="logo">Resume</div>
          <ul className=" d-flex">
            <Item liname="Home" onClick={OnGetMenu} />
            <Item liname="About" onClick={OnGetMenu} />
            <Item liname="Resume" onClick={OnGetMenu} />
            <Item liname="Skills" onClick={OnGetMenu} />
            <Item liname="Project" onClick={OnGetMenu} />
            <Item liname="My Blog" onClick={OnGetMenu} />
            <Item liname="Contact" onClick={OnGetMenu} />
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
