const User = require('../models/User')
const { getHash, compareHash } = require('../middleware/hash')
const {createToken} = require('../middleware/createToken')


const createUser = async (req, res) => {

    try {
        const username = req.body.username
        const hashedPassword = await getHash(req.body.password)
        const user = await User.create({'username': username, 'password' : hashedPassword})  
        res.status(201).json({username: username,  message: 'User created'})                
    } catch (error) {                       
        res.status(500).json({message: error})
    }

}

const login = async (req, res) => {

    try {
        const username = req.body.username
        const currentUser = await User.find({"username" : username})

        let authenticated = await compareHash(req.body.password, currentUser[0]['password'])
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
        console.log('Cannot authorise: ', error)                    
        res.status(401).json({
            success: false,
            message: error
        })
    }

}

const findAll = async (req,res) => {
    try {
        const users = await User.find({});
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



module.exports = {
    createUser,
    findUser,
    findAll,
    login
}
