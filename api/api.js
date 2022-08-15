const express = require('express')
const api = express()
const userRoute = require('./routes/user')
require('dotenv').config()

api.use(express.json())
api.use('/register', userRoute)
api.use('/dashboard', userRoute)

api.get('/', (req, res) => {
    res.send('Welcome to Habit Harbour')
})


module.exports = api;
