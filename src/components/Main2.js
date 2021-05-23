import React from "react";
import Footer from "./Footer";
import HotelList from "./MainComponents/hotelList";
import NavBar from "./Navbar";
import "./MainComponents/hotelList.css"

function Main2() {
  return (
    <div className="main2-master" style={{backgroundColor: "#000000"}}>
      <NavBar />
      <HotelList />
      {/* <button onClick={signOut}>Log Out</button> */}
      <Footer />
    </div>
  );
}

export default Main2;
