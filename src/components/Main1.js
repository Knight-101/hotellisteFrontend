import React from "react";
import Mainbar from "./Main1Components/main-bar";
import NavBar from "./nice_navbar";
import Featured from "./Main1Components/featured";
import Carousel from "./Main1Components/Carousel";
import Footer from "./Footer";

function Main1() {
  return (
    <div>
      <NavBar />

      <Carousel />
      <Mainbar />
      <Featured />
      <Footer />
    </div>
  );
}

export default Main1;
