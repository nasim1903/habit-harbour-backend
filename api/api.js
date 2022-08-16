const express = require('express')
const api = express()
const cors = require('cors')
const habitsController = require('./controllers/habits')
const userController = require('./controllers/user')
require('dotenv').config()

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({extended: false}))

// All GET requests
api.get('/', (req, res) => {res.json({message: 'Welcome to Habit Harbour'})})
api.get('/dashboard', userController.findAll) //  verifyToken to add as middleware
api.get('/dashboard/:username', userController.findUser) //  verifyToken to add as middleware
api.get('/dashboard/:username/habits', habitsController.showHabits)

//All POST requests
api.post('/register', userController.createUser)
api.post('/login', userController.login)
api.post('/dashboard/:username/habits', habitsController.updateHabits)


module.exports = api;
