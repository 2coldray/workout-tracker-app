//Require Mongoose
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Exercise Schema
const ExerciseSchema = new Schema({
    resistance: [
        {
            type: Schema.Types.ObjectId,
            ref: "Resistance"
        }
    ],
    cardio: [{
        type: Schema.Types.ObjectId,
        ref: "Cardio"
    }]
});

//Export Schema/Model
const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;