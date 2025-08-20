import request from "supertest"; 
import app from "../../src/app";
import nock from "nock";

describe("Get Products", () => {
    it("should return a list of products", async () => {
        nock("https://pretalab-api-439254010866.us-central1.run.app")
            .get("/products")
            .reply(200, {
                data: [
                    { id: 1, name: "Product 1", price: 100 },
                    { id: 2, name: "Product 2", price: 200 }
                ]
            });

        const response = await request(app)
            .get("/products");

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
});
