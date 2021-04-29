import React, { Component } from "react";
import Exercises from "./Exercises";
import Selection from "./Selection";

const HomePage = (props) => {
  
    const { workouts, selectedWorkouts, workoutSelect, workoutDeselect} = props;

    return (
      <div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <Exercises workouts={workouts} workoutSelect={workoutSelect} />
            <Selection
              selectedWorkouts={selectedWorkouts}
              workoutDeselect={workoutDeselect}
            />            
          </div>
          <div className="row justify-content-center">
                <button className="btn btn-success bottom-margin">Start!</button>
          </div>
        </div>
      </div>
    );
  }

export default HomePage;
