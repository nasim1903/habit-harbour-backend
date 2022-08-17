const supertest = require('supertest')
const app = require('../../../api/api')
const mongoose = require('mongoose');

describe('User controllers', () => {
    let api;

    beforeAll(async () => {
        await mongoose
        .connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        })
        .then(() => {
            api = app.listen(5050)
        })
      });

    afterAll((done) => {
        console.log('Gracefully stopping the server');
        api.close(done);
    })

    it('it retrieves users from database', () => {
        supertest(api).get('/dashboard').expect((res) => {
            expect(res.status).toBe(200)
        })
    })


    // it('it checks a sample credential', (done) => {
    //     supertest(api)
    //         .get('/login')
    //         .auth('admin6', 'password6')
    //         .set('Accept', 'application/json')
    //         .expect('Content-Type', /text/)
    //         .end(done)
    //     .expect(200, done);
    // });

    it('it creates a new user', async () => {
        const response = await supertest(api).post('/register')
        .send({
            "username": "admin98",
            "password" : "password99"
        })
        .set('Accept', 'application/json');
        
            console.log(response.headers)
            expect(response.headers["content-type"]).toMatch(/json/);
            expect(response.body.username).toBeDefined();

            expect(response.body.message).toBeDefined();

            expect(response.statusCode).toEqual(201)
            // .end((err, res) => {
            //     if (err) return done(err);
            //     return done();
            // Example test that uses async
            })
    })



