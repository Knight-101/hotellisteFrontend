import React, { useEffect } from "react";
import Header from "./HomeComponents/Header"
import {useHistory} from "react-router-dom"

function Home() {
  const history = useHistory()
  useEffect(() => {
    const accessToken = localStorage.getItem('token');
    if(accessToken){
      history.push("/main")
    }
  }, )
  return (
      <div>
          <Header />
      </div>
      
    
  );
}

export default Home;