import React, { useState } from "react";
import "./main-bar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Mainbar = ({ button_func, loc_ref, guest_ref }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(new Date());
  const [selectedEndDate, setSelectedEndDate] = useState(null);
  return (
    <div className="master">
      <div className="location-main">
        location
        <input ref={loc_ref} type="text"></input>
      </div>
      <div className="guests-main">
        Guests
        <input ref={guest_ref} type="text"></input>
      </div>

      <div className="date-master">
        <DatePicker
          selected={selectedStartDate}
          wrapperClassName="date-start-wrap"
          className="date-start-main"
          onChange={(date) => setSelectedStartDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
        <DatePicker
          selected={selectedEndDate}
          wrapperClassName="date-end-wrap"
          className="date-end-main"
          onChange={(date) => setSelectedEndDate(date)}
          dateFormat="dd/MM/yyyy"
          minDate={selectedStartDate}
        />
      </div>
      <div className="button-main">
        <button onClick={button_func}>Go</button>
      </div>
    </div>
  );
};

export default Mainbar;
