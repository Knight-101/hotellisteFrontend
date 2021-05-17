import React, { useEffect } from "react";
import axios from "axios";
import Mainbar from "./MainComponents/main-bar";
import LogOut from "./logOut";

function Main1() {
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



  return (
    <div className="head-div">
    <div className="image-div">
      <img
        alt=""
        src="https://images.pexels.com/photos/2130474/pexels-photo-2130474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
      ></img>
    </div>
    <Mainbar />
    <LogOut />
    </div>
  );
}

export default Main1;
