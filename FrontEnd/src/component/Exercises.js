import React from "react";

const Exercises = (props) =>  {
    

// List the Exercises out in an ul and pass the workoutSelect function
    const { workouts, workoutSelect } = props;
    return (
        <div className="col-md-4">
            <h1>Exercises <i className="fa fa-plus"></i></h1>
            <ul className="eList">
                { workouts.map( (exercise, index) => {
                        return <li key={index}><span onClick={() => workoutSelect(exercise)}  className="plusspan"><i className="fa fa-plus"></i></span>{exercise.title}</li>
                    })}      
            </ul>
        </div>
    )
    
}

export default Exercises;




