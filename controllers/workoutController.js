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
  db.Workout.findByIdAndUpdate(req.body.id, req.body, { new: true })
    // $push: {exercises: req.body}
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

//Delete Workout to be able to delete workout by Id
router.delete("/api/workouts/:id", (req, res) => {
  db.Workout.findByIdAndDelete(req.params.id)
    .then((deletedWorkout) => {
      res.json(deletedWorkout);
    })
    .catch((err) => {
      console.log(err),
        res.json({
          error: true,
          data: null,
          message: "Failed to delete workout",
        });
    });
});

//Export router
module.exports = router;
