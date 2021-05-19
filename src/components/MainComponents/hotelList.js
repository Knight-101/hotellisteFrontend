import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Hotelres from "./hotelres";
import Rangeslider from "./filter";
// import Searchbutton from "./search-button";
import Mainbar from "./main-bar";
import "./hotelList.css";
import Sorting from "./sorting";


const HotelList = () => {
  const [items, setItems] = useState([]);
  const location =  useSelector(state => state.input.stateName);
  // const guests =  useSelector(state => state.guests);
  // const startDate =  useSelector(state => state.startDate);
  // const endDate =  useSelector(state => state.endDate);
  const baseurl = "http://127.0.0.1:8000/hotels/list/";
  


  useEffect(() => {
    fetch(baseurl + location)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);})
      .catch((error)=> {
          console.log(error)
        }); 
  
       
   
  }, [location])

  return (
      <div className="mega-master">
        <Mainbar />
        {/* <Searchbutton /> */}
        <Rangeslider min_p={0} max_p={100000} />
        <Sorting />
        <div id="listBody">
          {items.map((item) => (
            <Hotelres
              name={item.Name}
              location={item.location.cityName}
              image={item.Image}
              rating={item.Rating}
              price={item.price}
           />
          ))}
        </div>
      </div>
    );
};

export default HotelList;