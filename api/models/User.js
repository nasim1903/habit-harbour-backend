const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        maxLength: [20, 'username length can be max 20 characters'],
        trim: true 
    },
    password: {
        type: String,
        required: true
    },
    habits: {
        waterStreak: {
            type: Number,
            default: 0,
        },
        waterTarget: {
            type: String,
            default: ''
        }, 
        waterDays: {
            type: Number,
            default: 1
        },
        waterCompleted: {
            type: Boolean,
            default: false
        },
        exerciseStreak: {
            type: Number,
            default: 0,
        },

        exerciseTarget: {
            type: String,
            default: ''
        }, 
        exerciseDays: {
            type: Number,
            default: 1
        },
        exerciseCompleted: {
            type: Boolean,
            default: false
        }
    }
})

module.exports = mongoose.model('User', UserSchema)
