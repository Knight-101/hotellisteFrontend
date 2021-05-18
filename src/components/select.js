import React, { useState } from "react";
import Hotelres from "./hotelres";
import Searchbutton from "./search-button";
import Mainbar from "./main-bar";
import Filters from "./filter";

const Selectpage = () => {
  const [items, setItems] = useState([]);
  const [ogitems, setogItems] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const baseurl = "http://127.0.0.1:8000/hotels/list/";
  const [url, setUrl] = useState("");
  let locInput = React.createRef();
  let guestInput = React.createRef();
  let priceInput = React.createRef();
  let ratingInput = React.createRef();

  const getData = () => {
    var input_ = locInput.current.value;
    setUrl(baseurl + input_);

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setogItems(json);
        setLoaded(true);
      });

  };

  const updateData = () => {
    setItems(filterData(ogitems,ratingInput.current.value,priceInput.current.value));
  }

  const filterData = (data, sel_rating, sel_price) => {
    var filtered_data = data.filter( element => element.Rating >= sel_rating && element.price >= sel_price)
    return filtered_data;
  }

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
          <Mainbar
          button_func={getData}
          loc_ref={locInput}
          guest_ref={guestInput}
        ></Mainbar>
        <Filters min_p = {0} max_p = {50000} step_p={100} p_ref = {priceInput} st_ref = {ratingInput} />
        <Searchbutton onClick={updateData}></Searchbutton>
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