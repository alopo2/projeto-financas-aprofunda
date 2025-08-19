import { getPurchases } from "../../src/services/purchasesServices";

it("should return a list of purchases", () => {
    const purchases = getPurchases();
    expect(purchases).toBeDefined();
    expect(Array.isArray(purchases)).toBe(true);
    expect(purchases.length).toBeGreaterThan(0);
    expect(purchases[0]).toHaveProperty("id");
    expect(purchases[0]).toHaveProperty("date");
    expect(purchases[0]).toHaveProperty("total");
    expect(purchases[0]).toHaveProperty("items");
});
