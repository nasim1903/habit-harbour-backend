const jwt = require('jsonwebtoken'); 

function verifyToken(req, res, next) {
    
    const header = req.headers['authorization'];

    if (header) {

        const token = header.split(' ')[1];

        jwt.verify(token, process.env['SECRET_PASSWORD'])
            .then(() => next())
            .catch(error => {
                res.status(401).json({
                    success: false,
                    message: 'Token verification failed: ', error
                })
                console.log('Token verification failed')
            })

    } else {
        res.status(401).json({
            success: false,
            message: 'This requires authorisation'
        })
    }

}

module.exports = verifyToken;
