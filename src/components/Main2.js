import React from "react";
import Footer from "./Footer";
import HotelList from "./Main2Components/hotelList";
import NavBar from "./Navbar";
import "./Main2Components/hotelList.css";

function Main2() {
  return (
    <div className="main2-master" style={{ backgroundColor: "#000000" }}>
      <NavBar />
      <HotelList />
      <Footer />
    </div>
  );
}

export default Main2;
