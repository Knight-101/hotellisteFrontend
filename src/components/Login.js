import React,{useState,useEffect} from "react";
import GoogleLogin from 'react-google-login';
import axios from "axios";
import {Link, useHistory} from "react-router-dom"


function Login() {
    const history = useHistory()
    const [fail,setfail]=useState("")
    const [userData, setData] = useState({
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
     
    useEffect(() => {
      const accessToken = localStorage.getItem('token');
      if(accessToken){
        history.push("/main")
      }
    }, )  
      const submitHandler = (event) => {
        event.preventDefault();
        
        axios.post('http://localhost:8000/auth/login',userData)
        .then((res)=> {
          if(res.data==='"email" must be a valid email'){
            setfail("Enter a valid email(abc@def.xy)")
          }else{
            if(res.data==="Email doesn't match our records"){
              setfail("Email or Password does not match our records")
            }else{
              if(res.data==="invalid password"){
                setfail("Email or Password does not match our records")
              }else{
                localStorage.setItem('token',res.data);
                history.push("/main");
              }       
            }
          }
        })
        .catch((error)=> {
          console.log(error)
        });
      } 

          const responseGoogle = (response) => {
            let accessToken = response.accessToken;
            let email = response.profileObj.email;
            // let fname = response.At.kV;
            // let lname = response.At.ft; 
          axios.post('http://localhost:8000/auth/oauthlogin',{
            access_token: accessToken,
            email: email
          })
          .then((res)=> {
            
            if (res.data.ok) {
              localStorage.setItem('token',res.data.token);
              history.push("/main");
            }
            else
            console.log("errror")
            
          })
          .catch((error)=> {
            console.log(error)
          });
        }
      
       const failureGoogle = (res)=>{
         console.log("Failure to sign in")
       }
    

       return(
          <div className="authDiv">
            <main class="form-signin" >
                <form style={{lineHeight: '5rem'}}>
                    <h1 class="h3 mb-3 fw-normal" style={{textAlign: 'center',fontSize:"2.3rem"}}>Log In</h1>
                    <label for="inputEmail" class="visually-hidden">Email address</label>
                    <input onChange={handleChange} style={{margin: '1.4rem 0 1.8rem 0', padding:"0.6rem"}} type="email" id="email" class="form-control" placeholder="Email address" required="" autofocus="" />
                    <label for="inputPassword" class="visually-hidden">Password</label>
                    <input onChange={handleChange} style={{margin: '1.4rem 0 1rem 0', padding:"0.6rem"}} type="password" id="password" class="form-control" placeholder="Password" required="" />
                    <p style={{color: 'red'}}>{fail}</p>
                   
                    <div style={{ lineHeight: '2rem',textAlign:"left",paddingLeft:"1rem" }}><Link   to="/register" >Forgot Password?</Link><Link style={{ paddingLeft:"8rem" }}  to="/register" >Create an account?</Link></div>
                  
                    <button onClick={submitHandler} style={{backgroundColor: '#0040ff',color:"white",fontSize:"1.2rem"}} class="w-100 btn btn-sm" type="submit">Log in</button>
                </form>
            </main>
                  <hr></hr><p>OR</p><hr></hr>
                  <div id="google">
                  <GoogleLogin className="aaa" clientId="629232215186-5bhij4sts5mhvgeu2r4b6qisc7tdthnd.apps.googleusercontent.com" 
                  buttonText="Sign in with Google" 
                  onSuccess={responseGoogle} 
                  onFailure={failureGoogle} 
                  isSignedIn={true}
                  redirectUri="http://localhost:3000/main"
                  cookiePolicy={'single_host_origin'} />
                 </div>
        </div>);
      
      

      
  }
  
  export default Login;
  

