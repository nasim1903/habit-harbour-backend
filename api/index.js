const server = require('./api')
const connectDB = require('../db/connect')
require('dotenv').config()

const port = process.env.PORT || 3000

const startDatabaseAndServer = async () => {
    
        await connectDB(process.env.MONGO_URI)
            .then(() => console.log('Connected to database...'))
            .then(server.listen(port))
            .then(() => console.log(`Server is listening to port ${port}...`))
            .catch(error => console.log('Can\'t connect to db or server: ', error))
            
}

startDatabaseAndServer()
