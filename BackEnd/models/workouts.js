const mongoose = require('mongoose');



const WorkoutSchema = new mongoose.Schema({
        title: String,
        category: String,
        status: String      
});


const Workout = mongoose.model('Workout', WorkoutSchema);
module.exports = mongoose.model('Workout', WorkoutSchema);