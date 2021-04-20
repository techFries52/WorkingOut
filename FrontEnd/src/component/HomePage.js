import React, { Component, setState, useState } from "react";
import { Link } from 'react-router-dom';
import Flatbench from "./exercises/Flatbench";
import Selection from "./Selection";
import axios from "axios";
import Exercises from "./Exercises";


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
        workouts: [],
        selectedWorkouts: [],
        completedWorkouts: []
    };
  }

  componentDidMount = () => {
    axios.get("/getworkouts").then(workouts => {
        this.setState({workouts: workouts.data.workouts});
    })
  };

  workoutSelect = (exercise) => {
    this.setState(state => ({
      selectedWorkouts: [...state.selectedWorkouts, exercise]
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

  render() {
    const { workouts, selectedWorkouts, completedWorkouts } = this.state;

    

    return(
      <div>
        <div className="jumbotron">
          <h2>Workout React App</h2>
          <p>Sweat</p>
          <Link to="workout1" className='btn btn-primary'>Workout 1</Link>
          <Link to="workout2" className='btn btn-primary'>Workout 2</Link>
        </div>
        <div className="container-fluid">
          <div className="row">
              <div className="col-md-3">
                  <h1>Exercises <i class="fa fa-plus"></i></h1>
                  <ul id="selectionList">
                      { workouts.map( exercise => {
                              return <li key={exercise._id}><span onClick={() => this.workoutSelect(exercise)}  className="plus"><i className="fa fa-plus"></i></span>{exercise.title}</li>
                          })}      
                  </ul>
              </div>
              <div className="col-md-3">
                  <h1>Selection <i class="fa fa-plus"></i></h1>
                  <ul id="selectionList">
                  { selectedWorkouts.map(exercise => {
                      return <li key={exercise._id}>{exercise.title}<span onClick={() => this.workoutDeselect(exercise)} className="float-right"><i class="fa fa-trash"></i></span></li>
                  })}                   
                  </ul>
              </div>
          </div>
        </div>
      </div>
            
    )
  }
}