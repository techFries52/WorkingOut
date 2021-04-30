import React from "react";

const Exercises = (props) =>  {
    

    
    const { workouts, workoutSelect } = props;
    return (
        <div className="col-md-4">
            <h1>Exercises <i className="fa fa-plus"></i></h1>
            <ul className="eList">
                { workouts.map( exercise => {
                        return <li key={exercise._id}><span onClick={() => workoutSelect(exercise)}  className="plusspan"><i className="fa fa-plus"></i></span>{exercise.title}</li>
                    })}      
            </ul>
        </div>
    )
    
}

export default Exercises;




