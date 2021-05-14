import React from "react";
import {StyledLink } from "../StyledCompo";



function Header() {
  
  return (
    <div id="Head">
          <img src="./Images/hotelliste_logo.jpg" alt="logo"/>
          <StyledLink  to="/login" >Log In</StyledLink>
          
      </div>
  );
}

export default Header;