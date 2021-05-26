import React, { useState, useEffect, useRef } from "react";
import "./HomeComponents/home.css";
import FOG from "vanta/dist/vanta.fog.min";
import * as THREE from "three";
import Footer from "./Footer";
import Fancybutton from "./fancy_button";
import { useHistory } from "react-router";
import Loader from "./LoaderComponents/loader";

const Home = () => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [loaded, isLoaded] = useState(false);
  const myRef = useRef(null);
  const history = useHistory();
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

  setTimeout(() => {
    isLoaded(true)
  }, 1500);

  return (
    <div className="home-master">
      {!loaded && <Loader></Loader>}
      <div className="main-home">
        <div className="svgbg" ref={myRef}></div>
        <div className="hotelliste">
          <div className="text-master">
            <div className="name-mas">
              <img
                src="Images/new_logo_big.png"
                className="hos-logo"
                alt="logo-full"
              ></img>
            </div>
            <div className="quote-mas">
              The art of hospitality is to make guests feel at home when you wish they were.
            </div>
            <Fancybutton
              onClick={() => history.push("/login")}
              inside="Get started..."
            ></Fancybutton>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
