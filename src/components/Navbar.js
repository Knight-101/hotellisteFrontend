import React, { useEffect, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import BookingHistory from "./BookingHistory";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/logoutAction";
import imgsrc from "../new_logo_full.png";
import "./Main2Components/hotelList.css";
import { BASE_URL, CLIENT_ID } from "../variables";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 30,
  },
}));

export default function NavBar() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const history = useHistory();
  const onFailure = (e) => {
    console.log(e);
  };
  useEffect(() => {
    axios
      .get(BASE_URL + "/main", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        setFname(res.data.firstName);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onLogoutSuccess = () => {
    const isTokenExists = localStorage.getItem("token");
    if (isTokenExists) {
      dispatch(logout());
      localStorage.clear();
      history.push("/");
    }
  };
  const clientId = CLIENT_ID;
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <AppBar
        style={{
          backgroundColor: "#0d8f8f00",
          // height: 0,
          marginBottom: "0px",
        }}
        position="static"
      >
        <Toolbar style={{ paddingTop: 20 }}>
          <img src={imgsrc} className="navbar-hos-logo" alt="logo"></img>
          <div
            style={{ position: "absolute", top: 10, right: 10, zIndex: 999 }}
          >
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle
                style={{ fontSize: 50 }}
                className="account-circle"
              />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Welcome, {fname}</MenuItem>
              <hr></hr>
              <MenuItem onClick={handleClose}>
                <BookingHistory />
              </MenuItem>
              <MenuItem onClick={signOut}>LogOut</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
