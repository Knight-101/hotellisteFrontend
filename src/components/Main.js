import React, { useEffect } from "react";
import { useGoogleLogout } from "react-google-login";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Selectpage from "./select";

function Main() {
  const history = useHistory();
  useEffect(() => {
    axios
      .get("http://localhost:8000/main", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onFailure = (e) => {
    console.log(e);
  };

  const onLogoutSuccess = (res) => {
    const isTokenExists = localStorage.getItem("token");
    console.log("blah blah");
    if (isTokenExists) {
      localStorage.removeItem("token");
    }
    history.push("/login");
  };

  const clientId =
    "658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com";
  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });
  return (
    <div>
      <p>Logged In</p>
      <Selectpage />
      <button onClick={signOut}>Log Out</button>
    </div>
  );
}

export default Main;
