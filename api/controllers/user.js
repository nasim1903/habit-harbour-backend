const User = require('../models/User')
const { getHash, compareHash } = require('../middleware/hash')
// mongoose queries list: https://mongoosejs.com/docs/queries.html


const createUser = async (req, res) => {

    try {
        const username = req.body.username
        const hashedPassword = await getHash(req.body.password)
        // const password = 
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

        let compare = await compareHash(req.body.password, currentUser[0]['password'])
        console.log('compare result: ', compare)
        if(compare) {
            console.log('Successful login')
        } else {
            throw 'Wrong credentials'
        }
        // const loginHashedPassword = await getHash(req.body.password)
        // if(loginHashedPassword)
        // console.log('currentUser: ', currentUser)
        
        // const user = await User.create({'username': username, 'password' : hashedPassword})  // const users = User.find({})
        res.status(200).json({message: 'Successfully logged in'})                // const user = users.filter(user => {})
    } catch (error) {                       // User.save()
        res.status(500).json({message: error})
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
        const user = await User.find({"username": req.body.username}).exec();
        // console.log(user)
        res.status(201).json({user})

    } catch (error) {
        res.status(404).json({message: error})
    }
}

module.exports = {
    createUser,
    findUser,
    findAll,
    login
}
