import React from "react";
import "./search-button.css";

const btn = ({ onClick }) => {
  return (
    <div className="buttons">
      <div className="container">
        <button
          onClick={onClick}
          className="btn effect01"
        >
          <span>Search</span>
        </button>
      </div>
    </div>
  );
};

export default btn;
