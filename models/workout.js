//Require Mongoose and Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Workout Schema
const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Type is required",
      },
      name: {
        type: String,
        trim: true,
        required: "Name is required",
      },
      duration: {
        type: Number,
        required: true,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      },
    },
  ],
});

//Virtual
WorkoutSchema.virtual("totalDuration").get(function () {
  return 
})

//Export Model
const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;
