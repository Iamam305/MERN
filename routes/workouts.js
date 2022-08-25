const express = require('express')
const Workout = require('../models/WorkoutModal')
const router = express.Router()

// get all workouts 
router.get('/', (req, res) =>{
res.json({msg:'get all workouts'})
})


// get single workout 
router.get('/:id', (req, res) =>{
    res.json({msg:'get single workout'})
})

// post new workout 

router.post('/', async (req, res) =>{
    const {title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({err : error.message})
    }
    res.json({msg:'add new workout'})
})

// delete workout 

router.delete('/:id', (req, res) =>{
    res.json({msg:'remove single workout'})
})

// patch workout 

router.patch('/:id', (req, res) =>{
    res.json({msg:'update single workout'})
})

module.exports = router