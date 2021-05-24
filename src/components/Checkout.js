import axios from "axios";
import { useDispatch } from "react-redux";
import React from "react";
import BookButton from "./CheckOutCompo/BookButton";
import "./CheckOutCompo/Checkout.css";
import NavBar from "./Navbar";
import { setBookingData } from "../Redux/bookingData/bookingDataActions";
import Footer from "./Footer";
import Mapbox from "./Mapres/mapbox";

function Checkout() {
  const dispatch = useDispatch();
  const HotelData = JSON.parse(localStorage.getItem("HotelData"));
  const LocationData = JSON.parse(localStorage.getItem("LocationData"));
  console.log(LocationData);
  const startDate = GetFormattedDate(HotelData.hotelStartDate);
  const endDate = GetFormattedDate(HotelData.hotelEndDate);
  const priceBeforetax = parseInt(
    HotelData.hotelPrice * (1 - HotelData.hotelDiscount / 100)
  );
  const priceTax = parseInt(0.18 * priceBeforetax);

  function GetFormattedDate(date) {
    var todayTime = new Date(date);
    var month = todayTime.getMonth() + 1;
    var day = todayTime.getDate();
    var year = todayTime.getFullYear();
    return day + "/" + month + "/" + year;
  }
  function Book() {
    const booking = {
      name: HotelData.hotelName,
      location: HotelData.hotelLocation,
      checkIn: startDate,
      checkOut: endDate,
    };
    axios
      .post(
        "http://localhost:8000/hotels/book",

        booking,
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((res) => {
        if (res.data.ok) {
          console.log("Booked");
          dispatch(setBookingData(booking));
        } else {
          console.log("Booking Failed");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="background-checkout">
      <NavBar />
      <div id="checkout-master">
        <div className="item" id="item1">
          <div id="contents">
            <h4>Booking Details</h4>
            <hr></hr>
            <div id="hotelData">
              <div id="img-mas">
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
                  <h2>{LocationData.latitude}</h2>
                </div>
                <div id="start">
                  <div>
                    <h3>Check In</h3>
                  </div>
                  <div>
                    <h3>{startDate}</h3>
                  </div>
                </div>
                <div id="end">
                  <div>
                    <h3>Check Out</h3>
                  </div>
                  <div>
                    <h3>{endDate}</h3>
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
                <li>Only Cryptocurrencies are accepted</li>
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
              <div>Base Price </div>
              <div>
                <span>&#8377;</span>
                {HotelData.hotelPrice}
              </div>
              <div>Discount</div>
              <div>{HotelData.hotelDiscount}%</div>
              <div>Price after Discount</div>
              <div>
                <span>&#8377;</span>
                {priceBeforetax}
              </div>
              <div>Taxes and Services</div>
              <div>
                <span>&#8377;</span>
                {priceTax}
              </div>
              <div>
                <h5>Total Amount</h5>
              </div>
              <div>
                <span>&#8377;</span>
                {priceBeforetax + priceTax}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="item d-grid" id="item3">
          <button onClick={Book} class="btn btn-primary" type="button">
            BOOK NOW
          </button>
        </div> */}
        <div id="item3">
          <BookButton bookFunc={Book} />
        </div>
      </div>
      <div style={{ color: "#0d8f8f", textAlign: "center", fontSize: "50px" }}>
        stuff to do nearby
      </div>
      <div className="map-wrap">
        {/* <WrappedMap
          latitude={LocationData.longitude}
          longitude={LocationData.latitude}
          name={HotelData.hotelName}
          location={HotelData.hotelLocation}
        ></WrappedMap> */}
        <Mapbox
          latitude={LocationData.longitude}
          longitude={LocationData.latitude}
          name={HotelData.hotelName}
          location={HotelData.hotelLocation}
          image={HotelData.hotelImg}
        ></Mapbox>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
