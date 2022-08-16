const User = require('../models/User')

const createExerciseTarget = async (req,res) => {
    try {

        let doc = await User.findOne({username: req.body.username})
        doc.habits.exerciseTarget = req.body.target
        await doc.save()
        res.status(201).json({success: 'Exercise target created'})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const findExerciseTarget = async (req,res) => {
    try {
        const user = await User.findOne({"username": req.params.username});
        console.log('user in exerciseTarget: ', user)
        const exerciseStreakTarget = user[0].habits.exerciseTarget
        console.log('exerciseStreakTarget: ', exerciseStreakTarget)
        res.status(201).json({exerciseTarget: exerciseStreakTarget})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const findExerciseDays = async (req,res) => {
    try {

        const user = await User.findOne({"username": req.params.username});

        const exerciseFrequency = user.habits.exerciseDays

        res.status(200).json({exerciseDays: exerciseFrequency})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const updateExerciseDays = async (req,res) => {
    try {

        let doc = await User.findOne({username: req.body.username})
        doc.habits.exerciseDays = req.body.days
        await doc.save()
        res.status(201).json({success: 'Exercise frequency tracker updated'})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

module.exports = {
    createExerciseTarget,
    findExerciseTarget,
    findExerciseDays,
    updateExerciseDays
}
