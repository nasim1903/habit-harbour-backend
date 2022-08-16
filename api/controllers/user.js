const User = require('../models/User')
const { getHash, compareHash } = require('../middleware/hash')
const {createToken} = require('../middleware/createToken')
// mongoose queries list: https://mongoosejs.com/docs/queries.html


const createUser = async (req, res) => {

    try {
        const username = req.body.username
        const hashedPassword = await getHash(req.body.password)
        const user = await User.create({'username': username, 'password' : hashedPassword})  // const users = User.find({})
        res.status(201).json({username: username,  message: 'User created'})                // const user = users.filter(user => {})
    } catch (error) {                       // User.save()
        res.status(500).json({message: error})
    }

}

const login = async (req, res) => {

    try {
        const username = req.body.username
        const currentUser = await User.find({"username" : username})

        let authenticated = await compareHash(req.body.password, currentUser[0]['password'])
        // console.log('compare result: ', compare)
        if(authenticated) {
        
            res.json({
                success: true,
                message: 'Successfully logged in',
                token: 'Bearer ' + await createToken(currentUser)
            })
            console.log('Successfully logged in')
        } else {
            throw 'Wrong credentials'
        }
       
    } catch (error) {   
        console.log('Cannot authorise: ', error)                    // User.save()
        res.status(401).json({
            success: false,
            message: error
        })
    }

}

const findAll = async (req,res) => {
    try {
        const users = await User.find({});
        // console.log(users)
        res.status(200).json({users})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

const findUser = async (req,res) => {
    try {
        const user = await User.findOne({"username": req.params.username});
        res.status(201).json({user})

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

const createWaterTarget = async (req,res) => {
    try {
        
        let doc = await User.findOne({username: req.body.username})
        doc.habits.waterTarget = req.body.target
        await doc.save()
        res.status(201).json({success: 'User updated'})

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

module.exports = {
    createUser,
    findUser,
    findAll,
    login,
    findWaterTarget,
    createWaterTarget,
    findWaterDays,
    updateWaterDays
}
