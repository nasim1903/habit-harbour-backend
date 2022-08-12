const User = require('../models/Users')

const createUser = async (req, res) => {
    const user = await User.create(req.body)
    res.status(201).json({user})
}

module.exports = {
    createUser
}
