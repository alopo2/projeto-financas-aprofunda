import { Request, Response } from "express"; 
import transactionService from "../factories/transactionFactory";

export const createTransactionController = (req: Request, res: Response): void => {
  const { amount, description, type } = req.body;

  const newTransaction = transactionService.createTransaction({
    date: new Date().toISOString(),
    description,
    amount,
    type,
    category: "income"
  });

  res.status(201).json({'Transação criada': newTransaction});
};
