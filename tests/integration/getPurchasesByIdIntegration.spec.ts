import request from "supertest";
import app from "../../src/app";
import { purchaseModel } from "../../src/database/mongoosePurchaseModel";
import connectToMongo from "../../src/database/connectToMongo";
import mongoose from "mongoose";

describe("GET /purchases/:id", () => {
   beforeAll(async () => {
    await connectToMongo();
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
  
  it("should return a purchase by id", async () => {
    const created = await purchaseModel.create({
      date: "2025-01-01",
      total: 100,
      items: [{
        name: "Mouse Logitech",
        productId: "2",
        quantity: 1,
        price: 50
      }]
    });

    const response = await request(app).get(`/purchases/${created._id}`);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("purchase");
    expect(response.body.purchase).toHaveProperty("id", created._id.toString());
    expect(response.body.purchase).toHaveProperty("date", "2025-01-01");
    expect(response.body.purchase).toHaveProperty("total", 100);
    expect(response.body.purchase).toHaveProperty("items");
    expect(response.body.purchase.items).toHaveLength(1);
    expect(response.body.purchase.items[0]).toHaveProperty("name", "Mouse Logitech");
    expect(response.body.purchase.items[0]).toHaveProperty("productId", "2");
    expect(response.body.purchase.items[0]).toHaveProperty("quantity", 1);
    expect(response.body.purchase.items[0]).toHaveProperty("price", 50);
  });
});