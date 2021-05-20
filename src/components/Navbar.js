import React, { useEffect, useState } from 'react';
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();
  const [fname, setFname] = useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  // const userData = JSON.parse(localStorage.getItem("UserData"))
  // const fName = userData.userFname
  const clientId ="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";
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
        console.log(res.data);
        setFname(res.data.firstName);

      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onLogoutSuccess = () => {

  const isTokenExists = localStorage.getItem("token");
  if (isTokenExists) {
    localStorage.clear();
    history.push("/login");
  }
  
 };


 const { signOut } = useGoogleLogout({
  clientId,
  onLogoutSuccess,
  onFailure
 });

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root} >
      <AppBar style={{backgroundColor:"#0d6efd"}}  position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          
          <Typography variant="h6" className={classes.title}>
            Welcome  {fname}!
          </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Booking History</MenuItem>
                <MenuItem onClick={signOut}>LogOut</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
