import React from "react";
import "./fancy_button.css";

const Fancybutton = (props) => {
  return (
    <div className="button" onClick={props.onClick}>
      <main class="content" data-form-type="card">
        <button class="btn-home">
          <span class="btn__circle"></span>
          <span class="btn__white-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="icon-arrow-right"
              viewBox="0 0 21 12"
            >
              <path d="M17.104 5.072l-4.138-4.014L14.056 0l6 5.82-6 5.82-1.09-1.057 4.138-4.014H0V5.072h17.104z"></path>
            </svg>
          </span>
          <span class="btn__text">{props.inside}</span>
        </button>
      </main>
    </div>
  );
};

export default Fancybutton;
