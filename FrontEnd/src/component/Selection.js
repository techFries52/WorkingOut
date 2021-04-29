import React from "react";
import uuid from "react-uuid";

const Selection = (props) => {
  const { selectedWorkouts, workoutDeselect } = props;

  return (
    <div className="col-md-4">
      <h1>
        Reps | Selection <i className="fa fa-plus"></i>
      </h1>
      <ul className="eList">
        {selectedWorkouts.map((exercise) => {
          return (
            <li key={uuid()}>
              <span className="repsLi">{exercise.reps}</span>
              
              {exercise.title}
              <span
                onClick={() => workoutDeselect(exercise)}
                className="float-right trash"
              >
                <i className="fa fa-trash"></i>
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Selection;
