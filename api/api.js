const express = require('express')
const api = express()
const cors = require('cors')
const userRoute = require('./routes/user')
const userController = require('./controllers/user')
const verifyToken = require('./middleware/verifyToken')
require('dotenv').config()

api.use(cors())
api.use(express.json())
api.use(express.urlencoded({extended: false}))

api.post('/register', userController.createUser)
api.post('/login', userController.login)


api.use('/dashboard', userRoute) //  verifyToken to add as middleware

api.get('/', (req, res) => {
    res.send('Welcome to Habit Harbour')
})


module.exports = api;
