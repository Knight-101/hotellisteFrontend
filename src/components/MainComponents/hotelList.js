import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hotelres from "./hotelres";
import Rangeslider from "./filter";
// import Searchbutton from "./search-button";
import Mainbar from "./main-bar";
import "./hotelList.css";
import Sorting from "./sorting";
import { max } from "date-fns";
import { min } from "date-fns/esm";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const HotelList = () => {
  const [items, setItems] = useState([]);
  const [baseitems, setBaseitems] = useState([]);
  const location = useSelector((state) => state.input.stateName);
  const baseurl = "http://127.0.0.1:8000/hotels/list/";

  function sortByProperty(property) {
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }

  const handleclick = () => {
    const params = JSON.parse(localStorage.getItem("sorting_details"));
    const prices = params.price_value;
    const rating = params.rating_value;

    setItems(
      baseitems.filter(
        (item) =>
          item.price >= min(prices) &&
          item.price <= max(prices) &&
          item.Rating >= min(rating) &&
          item.Rating <= max(rating)
      )
    );
  };

  const sortclick = () => {
    setItems(items.sort(sortByProperty("price")));
  };

  useEffect(() => {
    fetch(baseurl + location)
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
        setBaseitems(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [location]);

  return (
    <div className="mega-master">
      <Mainbar />
      {/* <Searchbutton /> */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Sort and Filter</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="accordion-inside">
            <Rangeslider />
            <button onClick={handleclick}>refresh</button>
            <button onClick={sortclick}>Refresh 2</button>
            <Sorting handle_smth={() => console.log("working")} />
          </div>
        </AccordionDetails>
      </Accordion>
      {/* <Rangeslider />
      <button onClick={handleclick}>refresh</button>
      <button onClick={sortclick}>Refresh 2</button>
      <Sorting handle_smth={() => console.log("working")} /> */}
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
