//Require Mongoose and Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Cardio Schema
const CardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Name is required"
    },
    duration: {
        type: Number,
        required: true
    },
    distance: {
        type: Number,
        required: true
    }
});

//Export Schema/Model
const Cardio = mongoose.model("Cardio", CardioSchema);

module.exports = Cardio;