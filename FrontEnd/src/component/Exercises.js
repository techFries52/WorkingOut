import React, { Component, setState } from "react";
import Flatbench from "./exercises/Flatbench";

export function handleClick() {
    this.setState({
        status: "selected"
    });
}

function Exercises(props) {
    const { workouts } = props    

    return (
        <div className="col-md-4">
            <h1>Exercises <i class="fa fa-plus"></i></h1>
            <ul id="selectionList">
                { workouts.map( workouts => {
                        return <li key={workouts._id}><span onClick={handleClick} className="plus"><i class="fa fa-plus"></i></span>{workouts.title}</li>
                    })}      
            </ul>
        </div>
    )
}

export default Exercises;

// export default class Exercises extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             workouts: []
//         };
//     }
    
//     render() {
//         return (
//             <div className="col-md-4">
//                 <h1>Exercises <i class="fa fa-plus"></i></h1>
//                 <ul id="selectionList">
//                     { workouts.map( workouts => {
//                         return <li key={workouts._id}><span className="plus"><i class="fa fa-plus"></i></span>{workouts.title}</li>
//                     })}                   
//                 </ul>
//             </div>
//         )
//     }
// };