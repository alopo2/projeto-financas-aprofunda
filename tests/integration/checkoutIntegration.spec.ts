import request from "supertest";
import app from "../../src/app";

describe("Checkout Integration Tests", () => {
    it("should process checkout", async () => {
        const response = await request(app)
            .post("/checkout")
            .send({
                items: [
                    { productId: "1", quantity: 2 },
                    { productId: "2", quantity: 1 }
                ]
            });

        expect(response.status).toBe(200);
    });
});
