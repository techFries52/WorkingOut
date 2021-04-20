import {EventEmitter} from 'events';
import Dispatcher from '../appDispatcher';
import actionTypes from "../actions/actionTypes";
const CHANGE_EVENT = "change";

let _workouts = [];


class WorkoutStore extends EventEmitter {
    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT,callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    getWorkouts() {
        return _workouts;
    }
}

const store = new WorkoutStore();

Dispatcher.register(action => {
    switch(action.actionType) {
        case actionTypes.CHANGE_EVENT:
            _workouts.push(action.actionType)
            store.emitChange();
        break
        default:
    }
})
export default store;