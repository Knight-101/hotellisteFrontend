import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./main-bar.css";
import "react-datepicker/dist/react-datepicker.css";
import { setData } from "../../Redux/inputData/inputDataActions";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Mainbar = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [valid, setvalid] = useState(true);
  const [open, setOpen] = useState(true);
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

  //snackbar Functions
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const defaultMaterialTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#0d8f8f",
      },
    },
  });

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
    const locValue = document.getElementById("stateName").value;
    console.log(locValue);
    if (locValue) {
      setvalid(true);
      dispatch(
        setData(
          inputData.stateName,
          inputData.guests,
          inputData.startDate,
          inputData.endDate
        )
      );
      history.push("/main/hotels");
    } else {
      setvalid(false);
      setOpen(true);
    }
  };

  return (
    <div className="master">
      {!valid && (
        <div className={classes.root}>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error">
              Select a location
            </Alert>
          </Snackbar>
        </div>
      )}
      <form className="font-style">
        <div className="location-main" style={{ display: "inline-block" }}>
          <label htmlFor="location" className="form-label label-style">
            <b>Location</b>&nbsp;
          </label>
          <select
            onChange={handleChange}
            name="location"
            id="stateName"
            className="form-select"
            aria-label="State select"
          >
            {inputData.stateName ? (
              <option selected value={inputData.stateName}>
                {inputData.stateName}
              </option>
            ) : (
              <option selected value="">
                Select Location
              </option>
            )}

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
            <option value="">All</option>
          </select>
        </div>
        <div className="guests-main" style={{ display: "inline-block" }}>
          <label htmlFor="guests" className="form-label">
            <b>Guests</b>
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            id="guests"
            placeholder=""
            type="number"
            value={inputData.guests}
            min={1}
          />
        </div>

        <div className="date-master">
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <ThemeProvider theme={defaultMaterialTheme}>
                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  value={selectedStartDate}
                  minDate={new Date()}
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
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />

                <KeyboardDatePicker
                  margin="normal"
                  id="date-picker-dialog"
                  label="Date picker dialog"
                  format="dd/MM/yyyy"
                  value={selectedEndDate}
                  minDate={selectedStartDate}
                  onChange={(date) => {
                    setSelectedEndDate(date);
                    setInputData((prevData) => {
                      return {
                        ...prevData,
                        endDate: Date.parse(date),
                      };
                    });
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </ThemeProvider>
            </Grid>
          </MuiPickersUtilsProvider>
        </div>
        <div className="button-main">
          <button
            onClick={handleClick}
            type="button"
            className="btn btn-primary"
            style={{ backgroundColor: "#0d8f8f", border: "none" }}
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Mainbar;
