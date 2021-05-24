import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from "@material-ui/core/Tooltip";
import "./filter.css";

const useStyles = makeStyles({
  root: {
    width: 400,
    minWidth: 250,
    paddingLeft: 30,
    paddingRight: 30,
  },
});

const RangeSlider = (props) => {
  const classes = useStyles();
  const [pricevalue, setpriceValue] = useState([0, 20000]);
  const [ratingvalue, setratingValue] = useState([1, 5]);

  const sortingDetails = JSON.stringify({
    price_value: pricevalue,
    rating_value: ratingvalue,
  })

  localStorage.setItem("sorting_details", sortingDetails)


  const handleChange = (event, newValue) => {
    setpriceValue(newValue);
    localStorage.setItem("sorting_details", sortingDetails)
  };

  const ratinghandleChange = (event, newValue) => {
    setratingValue(newValue);
    localStorage.setItem("sorting_details", sortingDetails)
  };

  function ValueLabelComponent(props) {
    const { children, open, value } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="bottom" title={value}>
        {children}
      </Tooltip>
    );
  }

  function StarLabelComponent(props) {
    const { children, open } = props;

    return (
      <Tooltip open={open} enterTouchDelay={0} placement="bottom" title="">
        {children}
      </Tooltip>
    );
  }

  const starmarks = [
    {
      value: 1,
      label: <span className="star-label-child">★☆☆☆☆</span>,
    },
    {
      value: 2,
      label: <span className="star-label-child">★★☆☆☆</span>,
    },
    {
      value: 3,
      label: <span className="star-label-child">★★★☆☆</span>,
    },
    {
      value: 4,
      label: <span className="star-label-child">★★★★☆</span>,
    },
    {
      value: 5,
      label: <span className="star-label-child">★★★★★</span>,
    },
  ];

  const pricemarks = [
    {
      value: 0,
      label: <span style={{color: "white"}}>min</span>,
    },
    {
      value: 20000,
      label: <span style={{color: "white"}}>max</span>,
    },
  ];

  return (
    <div className="filter-master">
      <div className="filter-child">
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom color="white">
            Price range
          </Typography>
          <Slider
            innerRef={props.price_ref}
            value={pricevalue}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={pricemarks}
            min={0}
            max={20000}
            step={100}
            style={{color: "#0d8f8f"}}
          />
        </div>
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Rating range
          </Typography>
          <Slider
            value={ratingvalue}
            ValueLabelComponent={StarLabelComponent}
            onChange={ratinghandleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={starmarks}
            min={1}
            style={{color: "#0d8f8f"}}
            max={5}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
