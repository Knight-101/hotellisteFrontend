import React, { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import "./mapbox.css";

const Mapbox = (props) => {
  const [hotel, setHotel] = useState(null);

  const [viewport, setViewport] = useState({
    latitude: props.latitude,
    longitude: props.longitude,
    width: "100%",
    height: "100%",
    zoom: 12,
  });

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoia3Jpc2hhbnUteGMiLCJhIjoiY2twMnRjYmI2MWhyNTJvbngyMzUzdWphbSJ9.PAYAcxcCLU4BAOQsTJnBXg"
        }
        mapStyle="mapbox://styles/krishanu-xc/ckp2ub5rt0wd817phwu31kb20"
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker latitude={props.latitude} longitude={props.longitude}>
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={() => {
              setHotel("hello");
            }}
          >
            <img
              src="/Images/logo_ping.png"
              alt=""
              style={{
                height: 60,
                width: 60,
                transform: "translateX(-35px) translateY(-45px)",
              }}
            ></img>
          </button>
        </Marker>
        {hotel && (
          <Popup
            latitude={props.latitude}
            longitude={props.longitude}
            onClose={() => {
              setHotel(null);
            }}
          >
            <div className="popup-master">
              <div className="popup-image">
                <img
                  src={props.image}
                  alt="Hotel"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                ></img>
              </div>
              <div className="popup-name">{props.name}</div>
              <div className="popup-location">{props.location}</div>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
};

export default Mapbox;
