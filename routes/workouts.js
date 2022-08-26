const express = require('express')
const { createWorkout, getWorkouts, getSingleWorkout } = require('../controllers/WorkoutController')
const Workout = require('../models/WorkoutModal')
const router = express.Router()

// get all workouts 
router.get('/', getWorkouts)


// get single workout 
router.get('/:id', getSingleWorkout) 

// post new workout     
 
router.post('/', createWorkout)

// delete workout 

router.delete('/:id', (req, res) =>{
    res.json({msg:'remove single workout'})
})

// patch workout 

router.patch('/:id', (req, res) =>{
    res.json({msg:'update single workout'})
})

module.exports = router