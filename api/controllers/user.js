const User = require('../models/User')

// mongoose queries list: https://mongoosejs.com/docs/queries.html


const createUser = async (req, res) => {

    try {
        const user = await User.create(req.body)  // const users = User.find({})
        res.status(201).json({user})                // const user = users.filter(user => {})
    } catch (error) {                       // User.save()
        res.status(500).json({message: error})
    }

}

const findUser = async (req,res) => {
    try {
        const user = await User.findOne({"username": req.body}).exec();
        console.log(user)
        res.status(201).json({user})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

module.exports = {
    createUser,
    findUser
}
