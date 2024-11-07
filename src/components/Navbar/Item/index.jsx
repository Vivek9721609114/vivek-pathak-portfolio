import React from "react";
import "./index.css";

const Item = (props) => {
  const { liname } = props;
  return (
    <div>
      <li onClick={() => props.onClick(liname)} className="li-items">
        <span>{liname}</span>
      </li>
    </div>
  );
};

export default Item;
