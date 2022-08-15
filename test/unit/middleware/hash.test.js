const {getHash, compareHash} = require('../../../api/middleware/hash')


describe('Hash', () => {
    it('it creates a hash with 60 characters', async () => {
        const response = await getHash('mockPassword')
        expect(response.length).toBe(60)
    })

    it('it retrieves false if password does not match with saved hash', async () => {
        const response = await compareHash('password1234', 'not a hash format here')
        expect(response).toBeFalsy();
    })
})
