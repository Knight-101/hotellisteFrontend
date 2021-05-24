import React, { useState } from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import mapstyles from "./mapstyles"

const Map = (props) => {
  const [hotel, setHotel] = useState(null);
  function gmap() {
    return (
      <GoogleMap
        defaultZoom={18} //12.12, 76.68
        defaultCenter={{ lat: props.latitude, lng: props.longitude }}
        defaultOptions={{styles: mapstyles}}
      >
        <Marker
          position={{ lat: props.latitude, lng: props.longitude }}
          onClick={() => {
            setHotel("hello");
          }}
          icon={{
              url: "/Images/new_logo.png",
              scaledSize: new window.google.maps.Size(50,50)
          }}
        />
        {hotel && (
          <InfoWindow
            position={{ lat: props.latitude, lng: props.longitude }}
            onCloseClick={() => {setHotel(null)}}
          >
            <div>{props.name}</div>
          </InfoWindow>
        )}
      </GoogleMap>
    );
  }

  const WrappedMap = withScriptjs(withGoogleMap(gmap));

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <WrappedMap
        googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBvgVs1AiA8doriwJGG-UxIA6LgxxIrQ48"}
        loadingElement={<div style={{ height: "100%" }} />}
        containerElement={<div style={{ height: "100%" }} />}
        mapElement={<div style={{ height: "100%" }} />}
      ></WrappedMap>
    </div>
  );
};

export default Map;

// const url =
//   "https://api.foursquare.com/v2/venues/search?client_id=CLIENT_ID&client_secret=CLIENT_SECRET&ll=19.0,72.8&v=20190101";

// fetch(url)
//   .then((res) => res.json())
//   .then((final) => console.log(final));
