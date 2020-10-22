//Require Mongoose and Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Workout Schema
const WorkoutSchema = new Schema({
    day: {
        type: Date, 
        default: new Date().setDate(new Date().getDate())
    },
    type: {
        type: String,
        trim: true,
        required: "Type is required"
    },
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    duration: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    sets: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

//Export Model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;