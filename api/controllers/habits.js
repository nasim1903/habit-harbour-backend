const User = require('../models/User')

const showHabits = async (req, res) => {

    try {
        const user = await User.findOne({"username": req.params.username});
        res.json(user.habits)
    } catch (error) {
        console.log('Cannot show habits for this user')
        res.status(404).json({error: error})
    }

}

const updateHabits = async (req, res) => {

    try {
        const user = await User.findOne({"username": req.params.username});
        console.log('user in updateHabits func: ', user)
        if (req.body.habit == 'water') {
            user.habits.waterTarget = req.body.target
            user.habits.waterDays = req.body.days
        } else if (req.body.habit == 'exercise') {
            user.habits.exerciseTarget = req.body.target
            user.habits.exerciseDays = req.body.days
        } else {
            throw 'Cannot find habit'
        }
        await user.save()
        res.json({message: "User's habit updated"})
    } catch (error) {
        console.log('Cannot update habits for this user')
        res.status(500).json({error: error})
    }

}

const delayedCompleteReset = (user) => {
    setTimeout(() => {
        user.habits.waterCompleted = false;
        user.save()
    }, 30000)
}

const incrementStreak = async (req, res) => {

    try {
        const user = await User.findOne({"username": req.params.username});
        console.log('user in updateHabits func: ', user)
        if (req.body.habit == 'water') {
            user.habits.waterStreak += 1
            user.habits.waterCompleted = true
            delayedCompleteReset(user)
        } else if (req.body.habit == 'exercise') {
            user.habits.exerciseStreak += 1
            user.habits.exerciseCompleted = true
        } else {
            throw 'Cannot find habit'
        }
        await user.save()
        res.json({message: "User completed the target"})
    } catch (error) {
        console.log('Cannot update habits for this user')
        res.status(500).json({error: error})
    }

}

module.exports = {
    showHabits,
    updateHabits,
    incrementStreak
}
