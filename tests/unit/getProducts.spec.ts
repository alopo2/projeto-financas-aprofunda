import { getProductsApi } from "../../src/services/productsService";
import nock from "nock";

describe("getProductsApi", () => {
    it("should return a list of products", async () => {
        nock("https://pretalab-api-439254010866.us-central1.run.app")
            .get("/products")
            .reply(200, {
                data: [
                    { id: 1, name: "Product 1", price: 100 },
                    { id: 2, name: "Product 2", price: 200 }
                ]
            });

        const products = await getProductsApi();
        expect(products).toMatchObject([
            { id: 1, name: "Product 1", price: 100 },
            { id: 2, name: "Product 2", price: 200 }
        ]);
        expect(Array.isArray(products)).toBe(true);
    });
});