import { TransactionService } from "../../src/services/transactionsService";
import { ITransactionRepository } from "../../src/core/repositories/ITransactionRespository";
import { Transaction } from "../../src/core/entities/Transaction";

describe("TransactionService - Get Transactions by ID", () => {
  let mockRepository: jest.Mocked<ITransactionRepository>;
  let service: TransactionService;

  beforeEach(() => {
    mockRepository = {
      createTransaction: jest.fn(),
      getTransaction: jest.fn(),
      getTransactionById: jest.fn()
    };

    service = new TransactionService(mockRepository);
  });

  it("should return a transaction if it exists", async () => {
    const transaction = new Transaction(100, "Teste", "income", "salário", "1", "2025-08-27");
    mockRepository.getTransactionById.mockResolvedValue(transaction);

    const result = await service.getTransactionById("1");

    expect(result).toBeDefined();
    expect(result?.id).toBe("1");
    expect(result?.description).toBe("Teste");
  });

  it("should return null if the transaction does not exist", async () => {
    mockRepository.getTransactionById.mockResolvedValue(null);

    const result = await service.getTransactionById("non-existent-id");

    expect(result).toBeNull();
  });
});