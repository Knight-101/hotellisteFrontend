import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="hotelliste-logo-mas">
        <div className="img-bkdrp">
          <img
            src="Images/new_logo_full.png"
            alt="logo"
            className="new-logo"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
