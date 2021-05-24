import React, { useState, useEffect, useRef } from "react";
import "./HomeComponents/home.css";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import { StyledLink } from "./StyledCompo";
import Footer from "./Footer";


const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          highlightColor: "#0d8f8f",
          midtoneColor: "#000000",
          lowlightColor: "#42009b",
          baseColor: "#000000",
          blurFactor: 0.6,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="home-master">
      <div className="main-home">
        <div className="svgbg" ref={myRef}></div>
        <div className="hotelliste">
          <div className="text-master">
            <div className="name-mas"><img src="Images/new_logo_big.png" className="hos-logo"></img></div>
            <div className="quote-mas">
              Hospitality is making your guests feel like home, even if you wish
              they were.
            </div>
            <StyledLink to="/login">Log In</StyledLink>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
