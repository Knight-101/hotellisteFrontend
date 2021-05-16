import React from 'react';
import "./price-range.css";

const Pricerange = ({min, max, step}) => {
    return(
        <div className="range-wrap">
            <input className="price-range" type="range" min={min} max={max} step={step}></input>
        </div>
    )
}

export default Pricerange