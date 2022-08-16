const supertest = require('supertest')
const app = require('../../../api/api')
const User = require('../../../api/models/User')

describe('User controllers', () => {
    let api;

    beforeAll(() => {
        api = app.listen(5050, () => {
            console.log('Test server is listening on port 5050');
        })
    })

    afterAll((done) => {
        console.log('Gracefully stopping the server');
        api.close(done);
    })

    it('it retrieves users from database', () => {
        supertest(api).get('/dashboard').expect((res) => {
            expect(res.status).toBe(200)
        })
    })


    it('it checks a sample credential', (done) => {
        supertest(api)
            .get('/login')
            .auth('admin6', 'password6')
            .set('Accept', 'application/json')
            .expect('Content-Type', /text/)
            .end(done)
        // .expect(200, done);
    });
    // it('it creates a new user', async () => {
    //     const response = await supertest(api).post('/register')
    //         .send({
    //         "username": "admin98",
    //         "password" : "password99"
    //         })
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /json/)
    //         .expect(200)
    //         .end((err, res) => {
    //             if (err) return done(err);
    //             return done();
    //         })
    // })
})


