import request from "supertest";
import app from "../../src/app";

describe("Create transaction", () => {
    it("should create a new transaction", async () => {
        const response = await request(app)
            .post("/transactions")
            .send({
                amount: 100,
                description: "Compra no supermercado",
                type: "expense"
            });

        expect(response.statusCode).toBe(201);
    });
});
