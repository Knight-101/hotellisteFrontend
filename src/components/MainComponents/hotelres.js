import React from "react";
import "./hotelres.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import Booking from './Booking';

const Hoteldiv = ({ name, location, image, rating, price, discount, lat, long }) => {
  const guests = useSelector((state) => state.input.guests);
  const startDate = useSelector((state) => state.input.startDate);
  const endDate = useSelector((state) => state.input.endDate);
  var stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  const history = useHistory();

  const onclick = () => {
    const hotelData = JSON.stringify({
      hotelPrice: price * guests,
      hotelImg: image,
      hotelName: name,
      hotelStars: stars,
      hotelLocation: location,
      hotelDiscount: discount,
      latitude: lat,
      longitude: long,
      hotelGuests: guests,
      hotelStartDate: startDate,
      hotelEndDate: endDate,
    });
    localStorage.setItem("HotelData", hotelData);

    const locationData = JSON.stringify({
      latitude: lat,
      longitude: long,
    });

    localStorage.setItem("LocationData", locationData);
    history.push("./checkout");
  };

  return (
    <div className="hotel-master">
      <div className="image-master">
        <div className="discount-shape"></div>
        <div className="discount-shape-2"></div>
        <div className="discount">{discount}% off</div>
        <img className="image" alt="" src={image}></img>
      </div>
      <div className="data-master">
        <div id="name-grid" className="grid-child">
          {name}
        </div>
        <div id="rating-grid" className="grid-child">
          {stars}
        </div>
        <div id="location-grid" className="grid-child">
          {location}
        </div>
        <div id="price-grid" className="grid-child">
          Price: ₹ <s>{price}</s>&nbsp;{parseInt(price * (1 - (discount/100)))}
        </div>
        <div id="button-grid" className="grid-child">
          <button
            onClick={onclick}
            type="button"
            className="btn btn-primary book-btn"
          >
            BOOK
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hoteldiv;
