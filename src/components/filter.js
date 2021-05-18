import React, {useState} from "react";

const Filters = ({min_p, max_p, step_p, p_ref, st_ref}) => {

    const [rating, setRating] = useState("");
    const [price, setPrice] = useState("");

  return (
    <div className="wrapper">
      <div className="price-slide">
        <input
          type="range"
          min={min_p}
          max={max_p}
          step={step_p}
          ref={p_ref}
          onChange={() => {setPrice(p_ref.current.value)}}
        ></input>
        {price}
      </div>
      <div className="rating-slide">
        <input type="range" min={1} max={5} step={1} ref={st_ref} onChange={() => {setRating(st_ref.current.value)}}></input>
        {rating}
      </div>
    </div>
  );
};

export default Filters;
