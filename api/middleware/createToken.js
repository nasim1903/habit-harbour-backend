const jwt = require('jsonwebtoken')

async function createToken (userData) {

    const token = await jwt.sign({
        username: userData['username']
    },
        process.env['SECRET_PASSWORD'],
        { expiresIn: 60 * 60}
    )

    return token;

}

module.exports = createToken;
