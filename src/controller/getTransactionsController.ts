import { Request, Response } from 'express'; 
import transactionService from '../factories/transactionFactory';

export const getTransactionsById = async (req: Request, res: Response) => {
    const { id } = req.params; 
    const transaction = await transactionService.getTransactionById(id); 
    if (!transaction) {
        return res.status(404).json({ message: 'Transação não encontrada' });
    }
    return res.status(200).json(transaction);
}

export const getTransactions = async (req: Request, res: Response) => {
    const transactions = await transactionService.getTransaction();
    return res.status(200).json(transactions);
};
