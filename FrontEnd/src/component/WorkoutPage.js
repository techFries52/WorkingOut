import React, { Component } from "react";
import Timer from "./Timer";
import uuid from "react-uuid";

const WorkoutPage = (props) => {       
    const { selectedWorkouts, workoutCompleted } = props;
    return(        
        <div className="container-fluid">
            <div className="row">
                <Timer />
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1>
                        Start <i className="fa fa-plus"></i>
                    </h1>
                    <ul className="eList">
                        {selectedWorkouts.map((exercise) => {
                        return (
                            <li key={uuid()}>
                            <span className="repsLi">{exercise.reps}</span>
                            <span
                                onClick={() => workoutCompleted(exercise)}
                                className="compLi"
                            >
                                <i className="fa fa-check"></i>
                            </span>
                            {exercise.title}
                            
                            </li>
                        );
                        })}
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default WorkoutPage;