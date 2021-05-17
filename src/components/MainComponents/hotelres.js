import React from 'react';
import "./hotelres.css";
import { useSelector } from 'react-redux';
// import Booking from './Booking';

const Hoteldiv = ({name, location, image, rating, price, onclick}) => {
    const guests = useSelector((state => state.input.guests))
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
                <div id="price-grid" className="grid-child">
                    <h5>Price: ₹{price*guests}</h5>
                </div>
                <div id="button-grid" className="grid-child"><button className="book-btn" onClick={onclick}>Book Now</button></div>
                
            </div>
            
        </div>
    )
}

export default Hoteldiv