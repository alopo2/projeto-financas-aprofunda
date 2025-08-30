import { PurchaseService } from "../../src/services/purchasesServices";
import { IPurchaseRepository } from "../../src/core/repositories/IPurchaseRespository";

describe("Purchase Service - Get Purchases", () => {
  let service: PurchaseService;
  let mockRepository: jest.Mocked<IPurchaseRepository>;

  beforeEach(() => {
    mockRepository = {
      createPurchase: jest.fn(),
      getPurchases: jest.fn(),
      getPurchaseById: jest.fn()
    };

    service = new PurchaseService(mockRepository);
  });

  it("should return a list of purchases", () => {
    const purchases = service.getPurchases();
    expect(purchases).toBeDefined();
  });
});
