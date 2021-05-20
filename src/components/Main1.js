import React, { useEffect } from "react";
import axios from "axios";
import Mainbar from "./MainComponents/main-bar";
import LogOut from "./logOut";
import NavBar from "./Navbar";
import Carousel from "./MainComponents/Carousel";
import Footer from "./Footer";

function Main1() {




  return (
    <div>
    <NavBar style={{marginTop: "-2vw"}} />
    
    <Carousel />
    <Mainbar />
    <Footer />
    </div>
  );
}

export default Main1;
