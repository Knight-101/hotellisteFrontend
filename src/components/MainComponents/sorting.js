import React, {useState} from "react";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./sorting.css"

const marks = [
  {
    value: 1,
    label: "Price: High to Low",
  },
  {
    value: 2,
    label: "Price: Low to High",
  },
  {
    value: 3,
    label: "Rating: Ascending",
  },
  {
    value: 4,
    label: "Rating: Descending",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {

    const [sortVal, setsortVal] = useState(1)

    const handleChange = (event, newValue) => {
        setsortVal(newValue);
        console.log(sortVal);
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
          track={false}
          max={4}
        />
      </div>
    </div>
  );
}
