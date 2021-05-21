import axios from "axios";
import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [auth, setauth] = useState(true);
  axios
    .get("http://localhost:8000/main", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      if (
        res.data.message === "jwt expired" ||
        res.data.message === "jwt malformed"
      ) {
        setauth(false);
        localStorage.clear();
      }
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <Route
      {...rest}
      render={(props) =>
        auth ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default AuthRoute;
