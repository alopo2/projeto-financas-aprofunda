import { PurchaseService } from "../../src/services/purchasesServices";

describe("createPurchase", () => {
    it("should create a new purchase", async () => {
        const newPurchase = {
            id: "1",
            date: "2025-01-01",
            total: 100,
            items: [
                {
                    productId: "1",
                    name: "Item 1",
                    quantity: 2,
                    price: 50
                }
            ]
        };

        const mockRepository = {
            createPurchase: jest.fn().mockResolvedValue(newPurchase)
        };

        const purchaseService = new PurchaseService(mockRepository as any);

        const createdPurchase = await purchaseService.createPurchase(newPurchase);
        expect(mockRepository.createPurchase).toHaveBeenCalledWith(newPurchase);
    });
});
