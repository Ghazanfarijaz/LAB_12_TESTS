const request = require("supertest");
const app = require('./routes/User');
const mongoose = require('mongoose');




describe("Test the root path", () => {
    test("It should response the GET method", () => {
      const response = request(app)
        .post("http://localhost:8000/user/delete")
        .send({
          Name: "Ghazanfar Ijaz",
          Email: "i200870@nu.edu.pk",
          Age: 21,
          Contact: 3136900123,
        });
      expect(response.statusCode), toBe(200);
    });
  });