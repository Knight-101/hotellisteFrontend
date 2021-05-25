import React from "react";
import "./fancy_button.css"

const Fancybutton = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <div className="button__text">{props.inside}</div>

      <div className="button__wrapper">
        <div className="button__arrow"></div>
        <div className="button__border-circle"></div>
        <div className="button__mask-circle">
          <div className="button__small-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Fancybutton;
