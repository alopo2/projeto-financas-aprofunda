import { ITransactionRepository } from "../core/repositories/ITransactionRespository"; 
import { Transaction } from "../core/entities/Transaction";

export class TransactionService {

  constructor(private readonly transactionRepository: ITransactionRepository) {}

  async createTransaction(transaction: Transaction): Promise<void> {
    await this.transactionRepository.createTransaction(transaction);
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    return await this.transactionRepository.getTransactionById(id);
  }

  async getTransaction(): Promise<Transaction[]> {
    return await this.transactionRepository.getTransaction();
  }
}
