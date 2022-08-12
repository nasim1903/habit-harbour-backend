const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    habits: {waterStreak: Number,
             mealStreak: Number}
})

module.exports = mongoose.model('User', UserSchema)
