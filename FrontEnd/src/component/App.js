import React from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import Timer from "./Timer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router> 
        <ToastContainer />
        <Header />
        <Timer />
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>          
    </Router>    
  ) 
}

export default App;
