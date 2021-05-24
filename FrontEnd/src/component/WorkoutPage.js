import React from "react";
import Timer from "./Timer";
import uuid from "react-uuid";

const WorkoutPage = (props) => {
  const { selectedWorkouts, workoutCompleted } = props;
  // returns Timer component and chosen exercises and passes exercise completed function
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <Timer />
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>
            Start <i className="fa fa-plus"></i>
          </h1>
          <ul className="eList">
            {selectedWorkouts.map((exercise, index) => {
              return (
                <li key={uuid()}>
                  <span className="repsLi">{exercise.reps}</span>
                  <span
                    onClick={() => workoutCompleted(index)}
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
  );
};

export default WorkoutPage;
