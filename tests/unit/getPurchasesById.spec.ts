import { PurchaseService } from "../../src/services/purchasesServices";
import { IPurchaseRepository } from "../../src/core/repositories/IPurchaseRespository";
import { Purchase } from "../../src/core/entities/Purchase";

describe("Purchase Service - Get Purchases by ID", () => {
  let mockRepository: jest.Mocked<IPurchaseRepository>;
  let service: PurchaseService;

  beforeEach(() => {
    mockRepository = {
      createPurchase: jest.fn(),
      getPurchases: jest.fn(),
      getPurchaseById: jest.fn()
    };

    service = new PurchaseService(mockRepository);
  });

  it("should return a purchase if it exists", async () => {
    const purchase = new Purchase("2025-01-01", 100, [], "1");
    mockRepository.getPurchaseById.mockResolvedValue(purchase);

    const result = await service.getPurchasesById("1");

    expect(result).toBeDefined();
    expect(result?.id).toBe("1");
    expect(result?.date).toBe("2025-01-01");
  });

});