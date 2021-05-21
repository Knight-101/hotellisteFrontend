import React from "react";
import Mainbar from "./MainComponents/main-bar";
import NavBar from "./Navbar";
import Carousel from "./MainComponents/Carousel";
import Footer from "./Footer";

function Main1() {
  return (
    <div>
      <NavBar style={{ marginTop: "-2vw" }} />

      <Carousel />
      <Mainbar />
      <Footer />
    </div>
  );
}

export default Main1;
