import React, { useState,useEffect } from "react";
import axios from 'axios';
import { useHistory } from "react-router";

function Register() {
  const history = useHistory()
  const [userData, setData] = useState({
      firstName:"",
      lastName:"",
      email: "",
      password: ""
  })
  
  const handleChange= (event) => {
    const {id,value} = event.target
    setData(prevData =>{
      return {
      ...prevData,
      [id]:value}
    });
  }
  const submitHandler = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/auth/register',userData)
    .then(()=> {
        history.push("/login");
    })
    .catch((error)=> {
      console.log(error);
    });
  }
  return (
      <div className="authDiv">
    <main class="form-signin" >
    <form style={{lineHeight: '5rem'}}>
        <h1 class="h3 mb-3 fw-normal" style={{textAlign: 'center',fontSize:"2.3rem"}}>Register</h1>
        <label for="firstName" class="visually-hidden">firstName</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="name" id="firstName" class="form-control" placeholder="First Name" required="" />
        <label for="lastName" class="visually-hidden">lastName</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="name" id="lastName" class="form-control" placeholder="Last Name" required="" />
        <label for="inputEmail" class="visually-hidden">Email address</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1.8rem 0', padding:"0.6rem"}} type="email" id="email" class="form-control" placeholder="Email Address" required="" autofocus="" />
        <label for="inputPassword" class="visually-hidden">Password</label>
        <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="password" id="password" class="form-control" placeholder="Password" required=""  />
        <button onClick={submitHandler} style={{backgroundColor: '#0040ff',color:"white",fontSize:"1.2rem"}} class="w-100 btn btn-sm" type="submit">Register</button>
    </form>
    </main>
    </div>
  );
}

export default Register;