import React from "react";

export function handleClick() {
    this.setState({
        status: "selected"
    });
}

function Exercises(props) {
    const { workouts, workoutSelect } = props
    return (
        <div className="col-md-3">
            <h1>Exercises <i className="fa fa-plus"></i></h1>
            <ul id="selectionList">
                { workouts.map( exercise => {
                        return <li key={exercise._id}><span onClick={() => this.wokroutSelect(exercise)}  className="plus"><i className="fa fa-plus"></i></span>{exercise.title}</li>
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