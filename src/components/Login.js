import React, { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setBookingData } from "../Redux/bookingData/bookingDataActions";
import { BASE_URL, CLIENT_ID } from "../variables";


function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [fail, setfail] = useState("");
  const [userData, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setData((prevData) => {
      return {
        ...prevData,
        [id]: value,
      };
    });
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      history.push("/main");
    }
  });
  const submitHandler = async (event) => {
    event.preventDefault();

    await axios
      .post(BASE_URL + "/auth/login", userData)
      .then((res) => {
        if (res.data === '"email" must be a valid email') {
          setfail("Enter a valid email(abc@def.xy)");
        } else {
          if (res.data === "Email doesn't match our records") {
            setfail("Email or Password does not match our records");
          } else {
            if (res.data === "invalid password") {
              setfail("Email or Password does not match our records");
            } else {
              localStorage.setItem("token", res.data);
              localStorage.setItem("auth", true);
            }
          }
        }
      })
      .catch((error) => {
        console.log(error);
      });

    // getting booking history and storing in redux
    await axios
      .get(BASE_URL + "/main", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const auth = localStorage.getItem("auth");
        if (auth) {
          const bookings = res.data.bookings;
          if (bookings) {
            const len = bookings.length;
            for (let i = 0; i < len; i++) {
              dispatch(setBookingData(bookings[i]));
            }
          }

          history.push("/main");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const responseGoogle = async (response) => {
    let accessToken = response.accessToken;
    let email = response.profileObj.email;

    //posting oauth data
    await axios
      .post(BASE_URL + "/auth/oauthlogin", {
        access_token: accessToken,
        email: email,
      })
      .then((res) => {
        if (res.data.ok) {
          localStorage.setItem("token", res.data.token);
        }
      })
      .catch((error) => {
        console.log(error);
      });

    //getting booking history and storing in redux
    await axios
      .get(BASE_URL + "/main", {
        headers: { Authorization: localStorage.getItem("token") },
      })
      .then((res) => {
        const bookings = res.data.bookings;
        const len = bookings.length;
        for (let i = 0; i < len; i++) {
          dispatch(setBookingData(bookings[i]));
        }
        history.push("/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const failureGoogle = (res) => {
    console.log(res);
  };

  return (
    <div className="auth-parent">
      <div className="authDiv">
        <main className="form-signin">
          <form style={{ lineHeight: "5rem" }}>
            <h1
              className="h3 mb-3 fw-normal"
              style={{
                textAlign: "center",
                fontSize: "2.3rem",
                color: "#0d8f8f",
              }}
            >
              Log In
            </h1>
            <label htmlFor="inputEmail" className="visually-hidden">
              Email address
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1.8rem 0", padding: "0.6rem" }}
              type="email"
              id="email"
              className="form-control"
              placeholder="Email address"
              required=""
              autoFocus=""
            />
            <label htmlFor="inputPassword" className="visually-hidden">
              Password
            </label>
            <input
              onChange={handleChange}
              style={{ margin: "1.4rem 0 1rem 0", padding: "0.6rem" }}
              type="password"
              id="password"
              className="form-control"
              placeholder="Password"
              required=""
            />
            <p style={{ color: "red" }}>{fail}</p>

            <div
              style={{
                lineHeight: "2rem",
                textAlign: "left",
                paddingLeft: "1rem",
              }}
            >
              <Link
                style={{
                  color: "#0d8f8f",
                  textDecoration: "none",
                }}
                to="/register"
              >
                Create an account?
              </Link>
            </div>

            <button
              onClick={submitHandler}
              style={{
                backgroundColor: "#0d8f8f",
                color: "white",
                fontSize: "1.2rem",
              }}
              className="w-100 btn btn-sm"
              type="submit"
            >
              Log in
            </button>
          </form>
        </main>
        <hr></hr>
        <p
          style={{
            color: "#0d8f8f",
          }}
        >
          OR
        </p>
        <hr></hr>
        <div id="google">
          <GoogleLogin
            className="aaa"
            clientId={CLIENT_ID}
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={failureGoogle}
            isSignedIn={true}
            redirectUri={BASE_URL + "/main"}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
    </div>
  );
}

export default Login;
