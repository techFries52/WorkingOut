import dispatcher from "../appDispatcher";
import actionTypes from "./actionTypes";
import axios from "axios";

export function saveExercise(exercise) {
    dispatcher.dispatch({
        actionType: actionTypes.UPDATE_WORKOUT_STATUS,
        exercise: savedExercise
    })
}

// export function selectWorkouts(exercise) {
//     this.setState(state => ({
//         selectedWorkouts: [...state.selectedWorkouts, exercise.title]
//       }),
//       dispatcher.dispatch({
//         actionType: actionTypes.UPDATE_WORKOUT_STATUS,
//         exercise: savedExercise
//     })
//       )
// }