import request from "supertest"; 
import app from "../../src/app";

describe("Get Products", () => {
    it("should return a list of products", async () => {
        const response = await request(app)
            .get("/products");

        expect(response.statusCode).toBe(200);
        expect(response.body).toBeDefined();
    });
});
