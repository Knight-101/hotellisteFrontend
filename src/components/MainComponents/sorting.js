import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./sorting.css";

const marks = [
  {
    value: 1,
    label: (
      <span className="label-child">Price: Ascending</span>
    ),
  },
  {
    value: 2,
    label: (
      <span className="label-child" id="testingtesting">Price: Descending</span>
    ),
  },
  {
    value: 3,
    label: (
      <span className="label-child">Rating: Ascending</span>
    ),
  },
  {
    value: 4,
    label: (
      <span className="label-child">Rating: Descending</span>
    ),
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider(props) {
  const [sortVal, setsortVal] = useState(1);

  const handleChange = (event, newValue) => {
    setsortVal(newValue);
    console.log(sortVal);
    localStorage.setItem("sorting_param", sortVal);
  };

  return (
    <div className="sorting-master">
      <div className="sorting-child">
        <Typography id="discrete-slider" gutterBottom>
          Sort By
        </Typography>
        <Slider
          defaultValue={1}
          getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          onChange={handleChange}
          step={1}
          marks={marks}
          min={1}
          style={{ color: "#0d8f8f" }}
          track={false}
          max={4}
        />
      </div>
    </div>
  );
}
