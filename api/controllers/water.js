const User = require('../models/User')


const createWaterTarget = async (req,res) => {
    try {
        
        let doc = await User.findOne({username: req.body.username})
        doc.habits.waterTarget = req.body.target
        await doc.save()
        res.status(201).json({success: 'Water target created'})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const findWaterTarget = async (req,res) => {
    try {
        const user = await User.find({"username": req.body.username}).exec();
        console.log('user in waterTarget: ', user[0])
        const waterStreakTarget = user[0].habits.waterTarget
        console.log('waterStreakTarget: ', waterStreakTarget)
        res.status(201).json({waterTarget: waterStreakTarget})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const findWaterDays = async (req,res) => {
    try {
        
        const user = await User.findOne({"username": req.params.username});
       
        const waterFrequency = user.habits.waterDays
       
        res.status(200).json({waterDays: waterFrequency})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const updateWaterDays = async (req,res) => {
    try {
        
        let doc = await User.findOne({username: req.body.username})
        doc.habits.waterDays = req.body.days
        await doc.save()
        res.status(201).json({success: 'Water frequency tracker updated'})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

module.export = {
    createWaterTarget,
    findWaterTarget,
    findWaterDays,
    updateWaterDays
}