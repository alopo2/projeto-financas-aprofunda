import { Transaction } from "../entities/Transaction";

export interface ITransactionRepository {
  createTransaction(transaction: Transaction): Promise<void>;
  getTransaction(): Promise<Transaction[]>;
  getTransactionById(id: string): Promise<Transaction | null>;
}
