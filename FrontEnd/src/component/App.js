import React from "react";
import WorkoutOptions from "./WorkoutOptions";
import Header from "./common/Header";
import HomePage from "./HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router> 
        <Header />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/workout1" component={WorkoutOptions} />
        </Switch>          
    </Router>    
  ) 
}

export default App;
