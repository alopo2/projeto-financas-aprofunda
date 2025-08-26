import { transactionModel } from './mongooseTransactionModel'
import { Transaction } from "../core/entities/Transaction";
import { ITransactionRepository } from "../core/repositories/ITransactionRespository";

export class MongoTransactionRepository implements ITransactionRepository {
  async createTransaction(transaction: Transaction): Promise<void> {
    const mongoTransaction = new transactionModel(transaction);
    await mongoTransaction.save();
  }

  async getTransaction(): Promise<Transaction[]> {
    const mongoTransactions = await transactionModel.find();
    return mongoTransactions.map(mongoTransaction => new Transaction(
      mongoTransaction.amount,
      mongoTransaction.description,
      mongoTransaction.type,
      mongoTransaction.category
    ));
  }

  async getTransactionById(id: string): Promise<Transaction | null> {
    const mongoTransaction = await transactionModel.findById(id);
    return mongoTransaction ? new Transaction(
      mongoTransaction.amount,
      mongoTransaction.description,
      mongoTransaction.type,
      mongoTransaction.category,
    ) : null;
  }

}
