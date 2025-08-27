import { TransactionService } from "../../src/services/transactionsService";

describe("createTransaction", () => {
    it("should create a new transaction", async () => {
        const newTransaction = {
            id: "1",
            date: new Date().toISOString(),
            description: "Compra no supermercado",
            amount: 100,
            type: "expense" as const,
            category: "Uncategorized"
        };

        const mockRepository = {
            createTransaction: jest.fn().mockResolvedValue(newTransaction)
        };

        const transactionService = new TransactionService(mockRepository as any);

        const createdTransaction = await transactionService.createTransaction(newTransaction);
        expect(mockRepository.createTransaction).toHaveBeenCalledWith(newTransaction);
    });
});
