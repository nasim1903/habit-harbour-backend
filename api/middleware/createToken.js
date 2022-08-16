const jwt = require('jsonwebtoken')

async function createToken (userData) {

    try {

        const token = await jwt.sign({
            username: userData['username']
        },
            process.env['SECRET_PASSWORD'],
            { expiresIn: 60 * 60}
        )
    
        return token;

    } catch (error) {
        
        res.status(401).json({message: error})

    }

}

module.exports = {
    createToken
}
