import axios from "axios";
import React, { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import { BASE_URL } from "../variables";

const AuthRoute = ({ component: Component, ...rest }) => {
  const [auth, setauth] = useState(true);
  const history = useHistory();
  axios
    .get(BASE_URL + "/main", {
      headers: { Authorization: localStorage.getItem("token") },
    })
    .then((res) => {
      if (
        res.data.message === "jwt expired" ||
        res.data.message === "jwt malformed"
      ) {
        setauth(false);
        localStorage.clear();
        history.push("/");
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
