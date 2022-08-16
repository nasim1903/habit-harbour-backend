const express = require('express')
const api = express()
const cors = require('cors')
const authorisedRoute = require('./routes/authorised')
const userController = require('./controllers/user')
require('dotenv').config()

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({extended: false}))

// Authorised routes
api.use('/dashboard', authorisedRoute)

// Unauthorised routes
api.get('/', (req, res) => {res.json({message: 'Welcome to Habit Harbour'})})
api.post('/register', userController.createUser)
api.post('/login', userController.login)


module.exports = api;
