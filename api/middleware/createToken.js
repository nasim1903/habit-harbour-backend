const jwt = require('jsonwebtoken')
// console.log('whats jwt: ', jwt)

async function createToken (userData) {

    try {


    return token;

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
