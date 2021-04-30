import React from "react";
import { NavLink } from 'react-router-dom';
import Exercises from "./Exercises";
import Selection from "./Selection";

const HomePage = (props) => {
    
    const { workouts, selectedWorkouts, workoutSelect, workoutDeselect} = props;
    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Exercises 
              workouts={workouts} 
              workoutSelect={workoutSelect}
              workoutDeselect={workoutDeselect}
              selectedWorkouts={selectedWorkouts}
            />
            <Selection
              selectedWorkouts={selectedWorkouts}
              workoutDeselect={workoutDeselect}
            />            
          </div>
          <div className="row justify-content-center">              
              <NavLink to="/workout">
                <button className="btn btn-success bottom-margin">Start!</button>
              </NavLink>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
