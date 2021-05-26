import axios from "axios";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
import BookButton from "./CheckOutCompo/BookButton";
import "./CheckOutCompo/Checkout.css";
import NavBar from "./Navbar";
import { setBookingData } from "../Redux/bookingData/bookingDataActions";
import Footer from "./Footer";
import Mapbox from "./Mapres/mapbox";
import { BASE_URL } from "../variables";
import Loader from "./LoaderComponents/loader";

function Checkout() {
  const [loaded, isLoaded] = useState(false);
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

  setTimeout(() => {
    isLoaded(true)
  }, 1500);

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
        BASE_URL + "/hotels/book",

        booking,
        { headers: { Authorization: localStorage.getItem("token") } }
      )
      .then((res) => {
        if (res.data.ok) {
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
      {!loaded && <Loader></Loader>}
      <NavBar />
      {loaded && <div id="checkout-master">
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
                  <h2 style={{ fontWeight: 800 }}>{HotelData.hotelName}</h2>
                  <p>{HotelData.hotelLocation}</p>
                </div>
                <div id="stars">
                  <h2>{HotelData.hotelStars}</h2>
                </div>
                <div id="start">
                  <div>
                    <h4>Check In</h4>
                  </div>
                  <div>
                    <h4>{startDate}</h4>
                  </div>
                </div>
                <div id="end">
                  <div>
                    <h4>Check Out</h4>
                  </div>
                  <div>
                    <h4>{endDate}</h4>
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
            <div>Individual Price </div>
              <div>
                <span>&#8377;</span>
                {parseInt(HotelData.hotelPrice / HotelData.hotelGuests)}
              </div>
              <div>No. of guests </div>
              <div>
                {HotelData.hotelGuests}
              </div>
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
                <h4>
                  <span>&#8377;</span>
                  {priceBeforetax + priceTax}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div id="item3">
          <BookButton bookFunc={Book} />
        </div>
      </div>}
      {loaded && <div id="maphead">Discover more</div>}
      {loaded && <div className="map-wrap">
        <Mapbox
          latitude={LocationData.longitude}
          longitude={LocationData.latitude}
          name={HotelData.hotelName}
          location={HotelData.hotelLocation}
          image={HotelData.hotelImg}
        ></Mapbox>
      </div>}
      {loaded && <Footer />}
    </div>
  );
}

export default Checkout;
