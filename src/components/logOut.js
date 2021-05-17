import React from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

function LogOut() {
  const clientId =
    "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";
  const history = useHistory();
  const onFailure = (e) => {
    console.log(e);
  };

  const onLogoutSuccess = (e) => {
    e.preventDefault()
    const isTokenExists = localStorage.getItem("token");
    if (isTokenExists) {
      localStorage.removeItem("token");
      localStorage.removeItem("persist:root");
      history.push("/login");
    }
    
  };

  
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure
  });
  return (
    <div>
      <button onClick={signOut}>Log Out</button>
    </div>
  );
}

export default LogOut;