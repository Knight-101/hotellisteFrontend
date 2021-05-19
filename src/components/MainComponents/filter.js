import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Tooltip from '@material-ui/core/Tooltip';
import "./filter.css";

const useStyles = makeStyles({
  root: {
    width: 400,
    paddingLeft: 30,
    paddingRight: 30,
  },
});


const RangeSlider = (min_p, max_p) => {
  const classes = useStyles();
  const [pricevalue, setpriceValue] = useState([1000, 10000]);
  const [ratingvalue, setratingValue] = useState([1, 5]);

  const handleChange = (event, newValue) => {
    setpriceValue(newValue);
    // console.log(newValue)
  };

  const ratinghandleChange = (event, newValue) => {
    setratingValue(newValue);
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
      label: "★☆☆☆☆"
    },
    {
      value: 2,
      label: "★★☆☆☆"
    },
    {
      value: 3,
      label: "★★★☆☆"
    },
    {
      value: 4,
      label: "★★★★☆"
    },
    {
      value: 5,
      label: "★★★★★"
    }
  ];

  const pricemarks = [
    {
      value: 0,
      label: "min"
    },
    {
      value: 100000,
      label: "max"
    }
  ]

  return (
    <div className="filter-master">
      <div className="filter-child">
        <div className={classes.root}>
          <Typography id="range-slider" gutterBottom>
            Price range
          </Typography>
          <Slider
            value={pricevalue}
            ValueLabelComponent={ValueLabelComponent}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            marks={pricemarks}
            min={0}
            max={100000}
            step={100}
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
            max={5}
          />
        </div>
      </div>
    </div>
  );
}

export default RangeSlider;
