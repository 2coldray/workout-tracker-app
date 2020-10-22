//Require Mongoose and Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Resistance Schema
const ResistanceSchema = new Schema({
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
    }
});

//Export Schema/Model
const Resistance = mongoose.model("Resistance", ResistanceSchema);

module.exports = Resistance;