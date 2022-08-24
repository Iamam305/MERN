const express = require('express');
require('dotenv').config()
const path = require('path')
const workoutRoutes = require('./routes/workouts')

const PORT = process.env.PORT

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes 

app.use('/api/workouts',  workoutRoutes)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log('listening on port', process.env.PORT)
  })