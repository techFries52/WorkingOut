import React, {Component} from 'react';

function Selection(props) {
    const { selectedWorkouts, workoutDeselect} = props;    
    
    return (
        <div className="col-md-3">
            <h1>Selection <i class="fa fa-plus"></i></h1>
            <ul id="selectionList">
            { selectedWorkouts.map(exercise => {
                return <li key={exercise._id}>{exercise.title}<span onClick={() => this.workoutDeselect(exercise)} className="float-right"><i class="fa fa-trash"></i></span></li>
            })}                   
            </ul>
        </div>
    )
}
export default Selection;

// export default class Selection extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             workouts: [],
//             status: "not selected"
//         };
//       }
    

//     render() {
//         return (
//             <div className="col-md-4">
//                 <h1>Selection <i class="fa fa-plus"></i></h1>
//                 <ul id="selectionList">
//                     <li><span onClick={this.handleChange} className="plus"><i class="fa fa-plus"></i></span>Flat Bench</li>     
                                
//                 </ul>
//             </div>
//         )
//     }
    
// };

//  selectedWorkouts.map( workouts => {
//     return <li key={workouts._id}><span  className="plus"><i class="fa fa-plus"></i></span>{workouts.title}</li>
// })