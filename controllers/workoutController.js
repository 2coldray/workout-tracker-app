//Require Express, router, and db
const express = require("express");
const router = express.Router();
const db = require("../models");

//Get Route for all Workouts
router.get("/api/workouts", (req, res) => {
  db.Workout.find({})
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve all workouts",
        });
    });
});

//Get Route for specific Workout by Id
router.get("/api/workouts/:id", (req, res) => {
  db.Workout.findById(req.params.id)
    .then((foundWorkout) => {
      res.json(foundWorkout);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to retrieve workout",
        });
    });
});

//Post Route for creating Workout

//Put Route for updating a workout by Id

//Delete Workout to be able to delete workout by Id

//Export router
module.exports = router;
