import React,{ Component } from "react";
import Header from "./common/Header";
import HomePage from "./HomePage";
import WorkoutPage from "./WorkoutPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class Container extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          workouts: [
          {
            _id: "00",
            title: "-- Hydrate! --",
            reps: "2x",
          },
          {
            _id: "0",
            title: "Flat Bench Press",
            reps: "10x",
          },
          {
            _id: "1",
            title: "Tricep Bench Press",
            reps: "10x",
          },
          {
            _id: "2",
            title: "Incline Bench Press",
            reps: "10x",
          },
          {
            _id: "3",
            title: "Dumbell Fly",
            reps: "10x",
          },
          {
            _id: "4",
            title: "Push Ups",
            reps: "10x",
          },
          {
            _id: "5",
            title: "Pull Ups",
            reps: "10x",
          },
          {
            _id: "6",
            title: "Single Arm Row",
            reps: "10x",
          },
          {
            _id: "7",
            title: "Bent Over Barbell Row",
            reps: "10x",
          },
          {
            _id: "8",
            title: "Incline Row",
            reps: "10x",
          },
          {
            _id: "9",
            title: "Shoulder Press",
            reps: "10x",
          },
          {
            _id: "10",
            title: "Front Deltoid Raise",
            reps: "10x",
          },
          {
            _id: "11",
            title: "Lateral Deltoid Raise",
            reps: "10x",
          },
          {
            _id: "12",
            title: "Rear Deltoid Raise",
            reps: "10x",
          },
          {
            _id: "13",
            title: "Shoulder Shrugs",
            reps: "10x",
          },
          {
            _id: "14",
            title: "Bicep Curl",
            reps: "10x",
          },
          {
            _id: "15",
            title: "Hammer Curl",
            reps: "10x",
          },
          {
            _id: "16",
            title: "Reverse Curl",
            reps: "10x",
          },
          {
            _id: "17",
            title: "Skull Crushers",
            reps: "10x",
          },
          {
            _id: "18",
            title: "Standing Tricep Extension",
            reps: "10x",
          },
          {
            _id: "19",
            title: "Bent Over Tricep ",
            reps: "10x",
          },
          {
            _id: "20",
            title: "Body Squat",
            reps: "10x",
          },
          {
            _id: "21",
            title: "Weighted Squat",
            reps: "10x",
          },
          {
            _id: "22",
            title: "Lunges",
            reps: "10x",
          },
          {
            _id: "23",
            title: "Step Ups",
            reps: "10x",
          },
          {
            _id: "24",
            title: "Straight Leg Deadlift",
            reps: "10x",
          },
          {
            _id: "25",
            title: "Calf Raises",
            reps: "10x",
          },
          {
            _id: "26",
            title: "Hanging Leg Raises",
            reps: "10x",
          },
          {
            _id: "27",
            title: "Hip Thrust",
            reps: "10x"
          }
        ],          
          selectedWorkouts: [],
        };
    }
    workoutSelect = (exercise) => {
      this.setState((prevState) => ({
          selectedWorkouts: [...prevState.selectedWorkouts, exercise],
      }));
    };

    workoutDeselect = (exercise) => {
        this.setState((state) => {
            const selectedWorkouts = [...state.selectedWorkouts];
            selectedWorkouts.splice(selectedWorkouts.indexOf(exercise.title));
            return {
            selectedWorkouts,
            };
        });
    };

    workoutCompleted = (exercise) => {
        this.setState((state) => {
            const selectedWorkouts = [...state.selectedWorkouts];
            toast.success("Exercise Completed!");
            selectedWorkouts.splice(selectedWorkouts.indexOf(exercise.title));
            return {
            selectedWorkouts,
            };
        });
    };


    render() {
        return(
            <Router> 
                <ToastContainer />
                <Header />
                <Switch>
                    <Route path="/" exact render={(props) => (
                        <HomePage {...props}
                          workouts={this.state.workouts} 
                          selectedWorkouts={this.state.selectedWorkouts} 
                          workoutSelect={this.workoutSelect}
                          workoutDeselect={this.workoutDeselect}
                        />
                    )}
                    />
                    
                    <Route path="/workout" render={(props) => (
                        <WorkoutPage {...props} 
                          selectedWorkouts={this.state.selectedWorkouts}
                          workoutCompleted={this.workoutCompleted}
                        />
                    )} />
                </Switch>          
            </Router>
        )
    }
}