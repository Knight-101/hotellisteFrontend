import React, { useState, forwardRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main-bar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { setData } from "../../Redux/inputData/inputDataActions";
import "date-fns";

const Mainbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useSelector((state) => state.input.stateName);
  const guests = useSelector((state) => state.input.guests);
  const startDate = useSelector((state) => state.input.startDate);
  const endDate = useSelector((state) => state.input.endDate);
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);
  const [inputData, setInputData] = useState({
    stateName: location,
    guests: guests,
    startDate: selectedStartDate,
    endDate: selectedEndDate,
  });

  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="datebuttonwrap">
      <button
        className="btn btn-outline-primary btn-sm"
        id="date-picker-inline"
        onClick={onClick}
        ref={ref}
      >
        {value}
      </button>
    </div>
  ));

  const handleChange = (event) => {
    const { id, value } = event.target;
    setInputData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(
      setData(
        inputData.stateName,
        inputData.guests,
        inputData.startDate,
        inputData.endDate
      )
    );
    history.push("/main/hotels");
  };

  return (
    <div className="master">
      <div class="location-main" >
      <label htmlFor="location" class="form-label" style={{paddingLeft:"1rem"}} >Location</label>
      <select onChange={handleChange} name="location" id="stateName"  class="form-select" aria-label="State select">
        <option selected>{inputData.stateName?inputData.stateName:"Select Location"}</option>
        <option value="Andhra Pradesh">Andhra Pradesh</option>
        <option value="Assam">Assam</option>
        <option value="Chhattisgarh">Chhattisgarh</option>
        <option value="Gujarat">Gujarat</option>
        <option value="Haryana">Haryana</option>
        <option value="Jharkhand">Jharkhand</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Kerala">Kerala</option>
        <option value="Madhya Pradesh">Madhya Pradesh</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Odisha">Odisha</option>
        <option value="Punjab">Punjab</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="Uttarakhand">Uttarakhand</option>
        <option value="West Bengal">West Bengal</option>

      </select>  
      </div>
      <div class="guests-main ">
        <label htmlFor="guests" class="form-label" style={{paddingLeft:"1rem"}}>Guests</label>
        <input  onChange={handleChange}  class="form-control" id="guests" placeholder="" type="number" value={inputData.guests}/>
      </div>
      
      <div className="date-master">
        <DatePicker
          selected={selectedStartDate}
          wrapperClassName="date-start-wrap"
          className="date-start-main"
          customInput={<ExampleCustomInput />}
          withPortal
          onChange={(date) => {
            setSelectedStartDate(date);
            console.log(date);
            setInputData((prevData) => {
              return {
                ...prevData,
                startDate: Date.parse(date),
              };
            });
          }}
          dateFormat="dd/MM/yyyy"
          minDate={new Date()}
        />
        <DatePicker
          selected={selectedEndDate ? selectedEndDate : selectedStartDate}
          wrapperClassName="date-end-wrap"
          className="date-end-main"
          customInput={<ExampleCustomInput />}
          onChange={(date) => {
            setSelectedEndDate(date);
            setInputData((prevData) => {
              return {
                ...prevData,
                endDate: Date.parse(date),
              };
            });
          }}
          dateFormat="dd/MM/yyyy"
          minDate={selectedStartDate}
        />
      </div>
      <div className="button-main">
      <button onClick={handleClick} type="button" class="btn btn-primary">Search</button>
      </div>
    </div>
  );
};

export default Mainbar;
