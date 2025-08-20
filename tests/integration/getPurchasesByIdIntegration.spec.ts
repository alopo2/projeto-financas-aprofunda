import request from "supertest";
import app from "../../src/app";

describe("GET /purchases/:id", () => {
  it("should return a purchase by id", async () => {
    const response = await request(app).get("/purchases/1");
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("purchase");
    expect(response.body.purchase).toHaveProperty("id", "1");
  });
});
