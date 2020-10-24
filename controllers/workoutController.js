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

//Need Get route api/range
router.get("/api/workouts/range", (req, res) => {
  db.Workout.find({})
    .limit(7)
    .then((foundWorkouts) => {
      res.json(foundWorkouts);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "failed to retrieve workouts",
        });
    });
});


//Post Route for creating Workout
router.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to create workout",
        });
    });
});

//Put Route for updating a workout by Id
router.put("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndUpdate(
    req.body.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then((updatedWorkout) => {
      res.json(updatedWorkout);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to update workout",
        });
    });
});

//Export router
module.exports = router;
