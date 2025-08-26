import { TransactionService } from '../services/transactionsService';
import { MongoTransactionRepository } from '../database/mongoTransactionRepository';

const transactionRepository = new MongoTransactionRepository();
const transactionService = new TransactionService(transactionRepository);

export default transactionService;