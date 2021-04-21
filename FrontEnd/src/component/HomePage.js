import React, { Component } from "react";
import axios from "axios";
import uuid from "react-uuid";
import RepCounter from "./common/RepCounter";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        workouts: [
          {
            _id: "00",
            title: "-- Hydrate! --",
            reps: "2x"
          },
          {
            _id: "0",
            title: "Flat Bench Press",
            reps: "10x"
          },
          {
            _id: "1",
            title: "Tricep Bench Press",
            reps: "10x"
          },
          {
            _id: "2",
            title: "Incline Bench Press",
            reps: "10x"
          },
          {
            _id: "3",
            title: "Dumbell Fly",
            reps: "10x"
          },
          {
            _id: "4",
            title: "Push Ups",
            reps: "10x"
          },
          {
            _id: "5",
            title: "Pull Ups",
            reps: "10x"
          },
          {
            _id: "6",
            title: "Single Arm Row",
            reps: "10x"
          },
          {
            _id: "7",
            title: "Bent Over Barbell Row",
            reps: "10x"
          },
          {
            _id: "8",
            title: "Incline Row",
            reps: "10x"
          },
          {
            _id: "9",
            title: "Shoulder Press",
            reps: "10x"
          },
          {
            _id: "10",
            title: "Front Deltoid Raise",
            reps: "10x"
          },
          {
            _id: "11",
            title: "Lateral Deltoid Raise",
            reps: "10x"
          },
          {
            _id: "12",
            title: "Rear Deltoid Raise",
            reps: "10x"
          },
          {
            _id: "13",
            title: "Shoulder Shrugs",
            reps: "10x"
          },
          {
            _id: "14",
            title: "Bicep Curl",
            reps: "10x"
          },
          {
            _id: "15",
            title: "Hammer Curl",
            reps: "10x"
          },
          {
            _id: "16",
            title: "Reverse Curl",
            reps: "10x"
          },
          {
            _id: "17",
            title: "Skull Crushers",
            reps: "10x"
          },
          {
            _id: "18",
            title: "Standing Tricep Extension",
            reps: "10x"
          },
          {
            _id: "19",
            title: "Bent Over Tricep ",
            reps: "10x"
          },
          {
            _id: "20",
            title: "Body Squat",
            reps: "10x"
          },
          {
            _id: "21",
            title: "Weighted Squat",
            reps: "10x"
          },
          {
            _id: "22",
            title: "Lunges",
            reps: "10x"
          },
          {
            _id: "23",
            title: "Step Ups",
            reps: "10x"
          },
          {
            _id: "24",
            title: "Straight Leg Deadligt",
            reps: "10x"
          },
          {
            _id: "25",
            title: "Calf Raises",
            reps: "10x"
          },
          {
            _id: "26",
            title: "Hanging Leg Raises",
            reps: "10x"
          }
        ],
        selectedWorkouts: [],
        completedWorkouts: []
    };
  }

  // componentDidMount = () => {
  //   axios.get("/getworkouts").then(workouts => {
  //       this.setState({workouts: workouts.data.workouts});
  //   })
  // };

  workoutSelect = (exercise) => {
    this.setState(prevState => ({
       selectedWorkouts: [...prevState.selectedWorkouts, exercise],
      
    }))
  }

  workoutCompleted = (exercise) => {
    this.setState(prevState => ({
      completedWorkouts: [...prevState.completedWorkouts, exercise]
    }))
  } 

  workoutDeselect = (exercise) => {
    this.setState(state => {
      const selectedWorkouts = [...state.selectedWorkouts];
      selectedWorkouts.splice(selectedWorkouts.indexOf(exercise.title))
      return ({
        selectedWorkouts
      })
      
    })
  }

  completedDeselect = (exercise) => {
    this.setState(state => {
      const completedWorkouts = [...state.completedWorkouts];
      completedWorkouts.splice(completedWorkouts.indexOf(exercise.title))
      return ({
        completedWorkouts
      })
      
    })
  }

  
  render() {
    const { workouts, selectedWorkouts, completedWorkouts } = this.state;
    

    

    return(
      <div>
        
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4">
                <h1>Exercises <i className="fa fa-plus"></i></h1>
                <ul className="eList">
                    { workouts.map( exercise => {
                            return <li key={exercise._id}><span onClick={() => this.workoutSelect(exercise)}  className="plusspan"><i className="fa fa-plus"></i></span>{exercise.title}</li>
                        })}      
                </ul>
            </div>
            <div className="col-md-4">
                <h1>Reps | Selection <i className="fa fa-plus"></i></h1>
                <ul className="eList">
                    { selectedWorkouts.map(exercise => {
                        return <li key={uuid()}><span className="repsLi">{exercise.reps}</span><span onClick={() => this.workoutCompleted(exercise)} className="compSp"><i className="fa fa-check"></i></span>{exercise.title}<span onClick={() => this.workoutDeselect(exercise)} className="float-right"><i className="fa fa-trash"></i></span></li>
                    })}                   
                </ul>                
            </div>
            <div className="col-md-4">
                <h1>Completed <i className="fa fa-plus"></i></h1>
                <ul className="eList">
                    { completedWorkouts.map(exercise => {
                        return <li key={uuid()}><span className="compLi">{exercise.reps}</span>{exercise.title}<span onClick={() => this.completedDeselect(exercise)} className="float-right"><i className="fa fa-trash"></i></span></li>
                    })}                   
                </ul>                
            </div>
          </div>
        </div>
      </div>
            
    )
  }
}