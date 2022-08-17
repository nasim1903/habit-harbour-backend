const { createToken } = require('../../../api/middleware/createToken')
require('dotenv').config()


describe('Create Token test', () => {

    let mockUserData = [{"username": "admin999",
    "password" : "password888"}]
        
    

    it('it creates a token', async () => {
        const response = await createToken(mockUserData)
        console.log('response in createToken test: ', response.length)
        expect(response.length).toBe(157)
    })

})
