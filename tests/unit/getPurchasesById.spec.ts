import { getPurchasesById } from "../../src/services/purchasesServices";

describe("getPurchasesById", () => {
  it("should return a purchase by id", () => {
    const purchase = getPurchasesById("1");
    expect(purchase).toHaveProperty("id", "1");
  });

  it("should return undefined for a non-existing id", () => {
    const purchase = getPurchasesById("non-existing-id");
    expect(purchase).toBeUndefined();
  });
});
