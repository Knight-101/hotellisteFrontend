import React from 'react';
import "./hotelres.css";

const hoteldiv = ({name, location, image, rating, price, onclick}) => {

    var stars = '☆'.repeat(rating);


    return(
        <div className="hotel-master">
            <div className="image-master">
                <img className="image" alt="" src={image}></img>
            </div>
            <div className="data-master">
                <div id="name-grid" className="grid-child">{name}</div>
                <div id="rating-grid" className="grid-child">{stars}</div>
                <div id="location-grid" className="grid-child">{location}</div>
                <div id="price-grid" className="grid-child">Price: ₹{price}</div>
                <div id="button-grid" className="grid-child"><button className="book-btn" onClick={onclick}>Book</button></div>
            </div>
            
        </div>
    )
}

export default hoteldiv