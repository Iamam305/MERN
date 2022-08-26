const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getSingleWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/WorkoutController");

const router = express.Router();

// get all workouts
router.get("/", getWorkouts);

// get single workout
router.get("/:id", getSingleWorkout);

// post new workout

router.post("/", createWorkout);

// delete workout

router.delete("/:id", deleteWorkout);

// patch workout

router.patch("/:id", updateWorkout);

module.exports = router;
