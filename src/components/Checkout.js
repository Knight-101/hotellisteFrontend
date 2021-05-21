import { format, parse, parseISO } from "date-fns";
import React from "react";
import "./CheckOutCompo/Checkout.css";
import NavBar from "./Navbar";

function Checkout() {
  const HotelData = JSON.parse(localStorage.getItem("HotelData"));
  const startDate = GetFormattedDate(HotelData.hotelStartDate);
  const endDate = GetFormattedDate(HotelData.hotelEndDate);

  function GetFormattedDate(date) {
    var todayTime = new Date(date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  }
  console.log(GetFormattedDate());
  return (
    <div>
      <NavBar />
      <div id="checkout-master">
        <div className="item" id="item1">
          <div id="contents">
            <h4>Booking Details</h4>
            <hr></hr>
            <div id="hotelData">
              <div>
                <img id="hotelImg" src={HotelData.hotelImg} alt="hotelImage" />
              </div>
              <div id="contentsText">
                <div id="Hname">
                  <u>
                    <h2>{HotelData.hotelName}</h2>
                  </u>
                  <p>{HotelData.hotelLocation}</p>
                </div>
                <div id="stars">
                  <h2>{HotelData.hotelStars}</h2>
                </div>
                <div id="start">
                  <div>
                    <h2>Check In</h2>
                  </div>
                  <div>
                    <h2>{startDate}</h2>
                  </div>
                </div>
                <div id="end">
                  <div>
                    <h2>Check Out</h2>
                  </div>
                  <div>
                    <h2>{endDate}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div id="rules">
              <h5 style={{ color: "red" }}>Important Information</h5>
              <hr></hr>
              <ul>
                <li>This property is cleaned with disinfectants.</li>
                <li>
                  This property and its staff is implementing rigorous health &
                  safety measures guidelines.
                </li>
                <li>Only Bachelors allowed</li>
                <li>Only Crypto are accepted</li>
                <li>There are no restrictions on alcohol consumption.</li>
                <li>
                  The primary guest checking in to the hotel must be at least 18
                  years of age.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item" id="item2">
          <div id="contents">
            <h4>Price Break-Up</h4>
            <hr></hr>
            <div id="breakup">
              <div>Base Price</div>
              <div></div>
              <div>Discount</div>
              <div></div>
              <div>Price after Discount</div>
              <div>
                <span>&#8377;</span>
                {HotelData.hotelPrice}
              </div>
              <div>Taxes and Services</div>
              <div>
                <span>&#8377;</span>
                {parseInt(0.18 * HotelData.hotelPrice)}
              </div>
              <div>
                <h5>Total Amount</h5>
              </div>
              <div>
                <span>&#8377;</span>
                {parseInt(HotelData.hotelPrice + 0.18 * HotelData.hotelPrice)}
              </div>
            </div>
          </div>
        </div>
        <div className="item d-grid" id="item3">
          <button class="btn btn-primary" type="button">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
