import React from "react";
import "./loader.css"
import imgsrc from "../../new_logo.png";

const Loader = () => {
  return (
    <div className="loader-div">
      <div class="Loader">
        <img src={imgsrc} alt="loader" style={{ width: 150 }}></img>
      </div>
    </div>
  );
};

export default Loader;