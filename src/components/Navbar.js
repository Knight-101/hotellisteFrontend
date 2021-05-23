import React, { useEffect, useState } from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import axios from "axios";
import BookingHistory from "./BookingHistory";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/logoutAction";

const useStyles = makeStyles((theme) => ({
  // root: {
  //   flexGrow: 1,
  // },
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
  // const userData = JSON.parse(localStorage.getItem("UserData"))
  // const fName = userData.userFname
  const clientId =
    "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";
  const history = useHistory();
  const onFailure = (e) => {
    console.log(e);
  };
  useEffect(() => {
    axios
      .get("http://localhost:8000/main", {
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
      history.push("/login");
    }
  };

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
          backgroundColor: "#0d8f8f",
          height: 110,
          marginBottom: "40px",
        }}
        position="static"
      >
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <img id="logo" src="Images/kachra.png" alt="logo" />

          <Typography variant="h6" className={classes.title}>
            <span style={{ color: "white" }}>Welcome {fname}!</span>
          </Typography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle style={{ fontSize: 40 }} />
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
