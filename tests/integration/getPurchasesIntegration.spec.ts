import request from "supertest";
import app from "../../src/app";
import mongoose from "mongoose";

describe("GET /purchases", () => {
   beforeAll(async () => {
    await mongoose.connect(process.env.MONGO_URI as string)
  });

  afterAll(async () => {
    await mongoose.connection.close();
    await mongoose.disconnect();
  });
  
  it("should return all purchases", async () => {

    const response = await request(app).get('/purchases/');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("purchases");
  });
});
