const supertest = require("supertest");
const mongoose = require('mongoose');
const app = require("../../api/api");
require('dotenv').config()

describe("API", () => {
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
        api = app.listen(3030)
    })
  });

  afterAll((done) => {
    api.close(done);
    mongoose.disconnect();
  });

  describe("GET requests", () => {
    it("it reponds to a GET request at '/' with a 200 status", (done) => {
      supertest(api).get("/").expect(200, done);
    });

    it("it retrieves 200 status of GET request at '/dashboard'", (done) => {
      supertest(api).get("/dashboard").expect(200, done);
    });

    // it("Responds to a GET request at '/posts' with a json object", (done) => {
    //   supertest(api).get("/posts").expect("Content-Type", /json/, done);
    // });

    // it("Responds to a Get request at '/comments' with a 201 status", (done) => {
    //   supertest(api).get("/comments").expect(200, done);
    // });

    // it("Responds to a GET request at '/comments' with a json object", () => {
    //   supertest(api).get("/comments").expect( (res) => {
    //     expect(res.status).toBe(200)
    //     expect(res.type).toBe('application/json')
    //   });
    // });
  });
})
