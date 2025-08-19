import request from "supertest";
import app from "../../src/app";

describe("GET /purchases", () => {
  it("should return a list of purchases", async () => {
    const response = await request(app).get("/purchases");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("purchases");
    expect(Array.isArray(response.body.purchases)).toBe(true);
  });
});
