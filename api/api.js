const express = require('express')
const api = express()
const cors = require('cors')
const userRoute = require('./routes/user')
const waterRoute = require('./routes/water')
const exerciseRoute = require('./routes/exercise')

const userController = require('./controllers/user')
const verifyToken = require('./middleware/verifyToken')
require('dotenv').config()

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({extended: false}))

api.post('/register', userController.createUser)
api.post('/login', userController.login)


api.use('/dashboard', userRoute) //  verifyToken to add as middleware
api.use('/dashboard/:username/water', waterRoute)
api.use('/dashboard/:username/exercise', exerciseRoute)

api.get('/', (req, res) => {
    res.json({message: 'Welcome to Habit Harbour'})
})


module.exports = api;
