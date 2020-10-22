//Require Mongoose and Schema
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Make Day Schema
const DaySchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Exercise"
        }
    ]
});

//Export Model/Schema
const Day = mongoose.model("Day", DaySchema);

module.exports = Day;