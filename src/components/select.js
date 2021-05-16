import React, { useState } from "react";
import Hotelres from "./hotelres";
import Pricerange from "./price-range";
import Searchbutton from "./search-button";
import Mainbar from "./main-bar";

const Selectpage = () => {
  const [items, setItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const baseurl = "http://127.0.0.1:8000/hotels/list/";
  const [url, setUrl] = useState("");
  let locInput = React.createRef();
  let guestInput = React.createRef();

  const getData = () => {
    var input_ = locInput.current.value;
    console.log(input_);

    console.log("values:", locInput.current.value, guestInput.current.value);

    setUrl(baseurl + input_);
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setLoaded(true);
      });
  };

  if (!isLoaded) {
    return (
      <div className="head-div">
        <div className="image-div">
          <img
            alt=""
            src="https://images.pexels.com/photos/2130474/pexels-photo-2130474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          ></img>
        </div>
        <Mainbar
          button_func={getData}
          loc_ref={locInput}
          guest_ref={guestInput}
        ></Mainbar>
      </div>
    );
  } else {
    return (
      <div>
        <Pricerange></Pricerange>
        <Searchbutton></Searchbutton>
        {items.map((item) => (
          <Hotelres
            name={item.Name}
            location={item.location.cityName}
            image={item.Image}
            rating={item.Rating}
            price={item.price}
          ></Hotelres>
        ))}
      </div>
    );
  }
};

export default Selectpage