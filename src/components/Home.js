import React, { useState, useEffect, useRef } from "react";
import Header from "./HomeComponents/Header";
import "./HomeComponents/home.css";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";

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
          minHeight: 200.00,
          minWidth: 200.00,
          highlightColor: "#0d8f8f",
          midtoneColor: "#0d8f8f",
          lowlightColor: "#321bc5",
          baseColor: "#000000",
          blurFactor: 0.60,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return (
    <div className="main-home">
      <div>
        <Header />
      </div>
      <div className="svgbg" ref={myRef}></div>
      <div className="hotelliste">
        <span>HOTELLiSTE</span>
      </div>
    </div>
  );
}

export default Home;
