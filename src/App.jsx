import React from "react";
import "./App.css";
// import Selectpage from "./components/select";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AuthRoute from "./components/AuthRoute";
import Login from "./components/Login";
import Main from "./components/Main";
import Home from "./components/Home";
import Register from "./components/Register";



function App() {
  

  return (
    <Router>
    <Switch>
      
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <Register />
      </Route>
      <AuthRoute path="/main" exact component={Main} />
      <Route exact path="/">
        <Home />
      </Route> 
    </Switch>
  </Router>  
  );

  
}

export default App;
