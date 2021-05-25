import React from "react";
import "./fancy_button.css"

const Fancybutton = (props) => {
  return (
    <div class="button" onClick={props.onClick}>
      <div class="button__text">{props.inside}</div>

      <div class="button__wrapper">
        <div class="button__arrow"></div>
        <div class="button__border-circle"></div>
        <div class="button__mask-circle">
          <div class="button__small-circle"></div>
        </div>
      </div>
    </div>
  );
};

export default Fancybutton;
