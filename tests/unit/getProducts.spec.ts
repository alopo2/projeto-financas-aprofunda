import { getProducts } from "../../src/services/productsService";

describe("getProducts", () => {
    it("should return a list of products", () => {
        const products = getProducts();
        expect(products).toBeDefined();
        expect(Array.isArray(products)).toBe(true);
    });
});