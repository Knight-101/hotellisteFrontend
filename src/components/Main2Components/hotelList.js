import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hotelres from "./hotelres";
import Rangeslider from "./filter";
// import Searchbutton from "./search-button";
import Mainbar from "../Main1Components/main-bar";
import "./hotelList.css";
import Sorting from "./sorting";
import { max } from "date-fns";
import { min } from "date-fns/esm";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { BASE_URL } from "../../variables";
import Loader from "../LoaderComponents/loader";

const HotelList = () => {
  const [items, setItems] = useState([]);
  const [baseitems, setBaseitems] = useState([]);
  const location = useSelector((state) => state.input.stateName);
  const baseurl = BASE_URL + "/hotels/list/";
  const featuredIndex = localStorage.getItem("featuredIndex");
  const [loaded, isLoaded] = useState(false);

  function lowToHigh(property) {
    //sanskar
    return function (a, b) {
      if (a[property] > b[property]) return 1;
      else if (a[property] < b[property]) return -1;
      return 0;
    };
  }
  function highToLow(property) {
    //sanskar
    return function (a, b) {
      if (a[property] < b[property]) return 1;
      else if (a[property] > b[property]) return -1;
      return 0;
    };
  }

  const handleclick = () => {
    const params = JSON.parse(localStorage.getItem("sorting_details"));
    const sortValue = JSON.parse(localStorage.getItem("sorting_param"));
    const prices = params.price_value;
    const rating = params.rating_value;

    switch (sortValue) {
      case 1:
        setItems(baseitems.sort(lowToHigh("price")));
        break;
      case 2:
        setItems(baseitems.sort(highToLow("price")));
        break;
      case 3:
        setItems(baseitems.sort(lowToHigh("Rating")));
        break;
      case 4:
        setItems(baseitems.sort(highToLow("Rating")));
        break;

      default:
        break;
    }
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

  useEffect(() => {
    featuredIndex
      ? fetch(baseurl + "rating/5")
          .then((res) => res.json())
          .then((json) => {
            const newItems = [json[featuredIndex]];
            setItems(newItems);
            isLoaded(true);
            localStorage.removeItem("featuredIndex");
          })
          .catch((error) => {
            console.log(error);
          })
      : fetch(baseurl + location)
          .then((res) => res.json())
          .then((json) => {
            setItems(json);
            setBaseitems(json);
            isLoaded(true);
          })
          .catch((error) => {
            console.log(error);
          });
  }, [location, featuredIndex, baseurl]);

  return (
    <div className="mega-master">
      {!loaded && <Loader></Loader>}
      <Mainbar />
      {/* <Searchbutton /> */}
      <div className="accordion">
        <Accordion
          style={{ backgroundColor: "rgb(58, 58, 58)", color: "white" }}
        >
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
              <Sorting handle_smth={() => console.log("working")} />
              <button
                onClick={handleclick}
                type="button"
                style={{ backgroundColor: "#0d8f8f" }}
                className="btn btn-primary refresh-btn"
              >
                Sort and Filter
              </button>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      <div id="listBody">
        {items.map((item, index) => (
          <Hotelres
            key={index}
            name={item.Name}
            location={item.location.cityName}
            image={item.Image}
            rating={item.Rating}
            price={item.price}
            discount={item.discount}
            lat={item.location.latitude}
            long={item.location.longitude}
          />
        ))}
      </div>
    </div>
  );
};

export default HotelList;
