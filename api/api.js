const express = require('express')
const api = express()
const userRoute = require('./routes/user')
const userController = require('./controllers/user')
const verifyToken = require('./middleware/verifyToken')
require('dotenv').config()

api.use(express.json())
api.use(express.urlencoded({extended: false}))

api.post('/register', userController.createUser)
api.post('/login', userController.login)


api.use('/dashboard', verifyToken, userRoute)

api.get('/', (req, res) => {
    res.send('Welcome to Habit Harbour')
})


module.exports = api;
