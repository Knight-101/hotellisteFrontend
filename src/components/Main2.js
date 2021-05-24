import React from "react";
import { useGoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";
import Footer from "./Footer";
import HotelList from "./MainComponents/hotelList";
import NavBar from "./Navbar";

function Main2() {
  const history = useHistory();
  //   useEffect(() => {
  //     axios
  //       .get("http://localhost:8000/main", {
  //         headers: { Authorization: localStorage.getItem("token") },
  //       })
  //       .then((res) => {
  //         console.log(res.data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }, []);

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
      <NavBar />
      <HotelList />
      {/* <button onClick={signOut}>Log Out</button> */}
      <Footer />
    </div>
  );
}

export default Main2;
