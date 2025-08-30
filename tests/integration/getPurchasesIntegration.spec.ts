import request from "supertest";
import app from "../../src/app";
import connectToMongo from "../../src/database/connectToMongo";
import mongoose from "mongoose";

describe("GET /purchases", () => {
   beforeAll(async () => {
    await connectToMongo();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  it("should return all purchases", async () => {

    const response = await request(app).get('/purchases/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("purchases");
  });
});
