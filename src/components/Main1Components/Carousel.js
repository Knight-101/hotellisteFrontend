import React from "react";
import NavBar from "../nice_navbar";
import "./Carousel.css";
// import Booking from './Booking';

const Carousel = () => {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      {/* <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src="Images/pic1.jpg" className="d-block w-100" alt="..." />
                </div>
               <div className="carousel-item" data-bs-interval="2000">
                    <img src="https://www.mymaldives.com.au/wp-content/uploads/sites/11/2016/12/Beach-Banner.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://www.phdmedia.com/china/wp-content/uploads/sites/32/2017/08/Banner-for-TWiD-4-e1499162744863.jpg" className="d-block w-100" alt="..." />
                </div>
            </div>
           <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button> */}
      {/* <img
        src="https://www.phdmedia.com/china/wp-content/uploads/sites/32/2017/08/Banner-for-TWiD-4-e1499162744863.jpg"
        className="d-block w-100"
        alt="..."
      /> */}
      <div className="hotelliste-logo-mas">
        <div className="img-bkdrp">
          <img src="Images/new_logo_full.png" alt="logo" className="new-logo"></img>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
