import React from "react";
import "./Body.css";

const Body = (props) => {
  return (
    <div className="body">
      <div className="head">
        <h2>{props.name}</h2>
        <div className="img">
          <img src={props.img} />
        </div>
      </div>
    </div>
  );
};

export default Body;
