const jwt = require('jsonwebtoken')
// console.log('whats jwt: ', jwt)

async function createToken (userData) {

        console.log(userData)
        const currentUsername = await userData
        const token = await jwt.sign({
            username: currentUsername.username
        },
            process.env['SECRET_PASSWORD'],
            { expiresIn: 60 * 60}
        )
    
        return token;

}

module.exports = {
    createToken
}
