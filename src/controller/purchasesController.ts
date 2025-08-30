import { Request, Response } from 'express'; 
import purchaseService from '../factories/purchaseFactory';

export const createPurchaseController = async (req: Request, res: Response): Promise<void> => {
    const purchase = req.body;
    await purchaseService.createPurchase(purchase);
    res.status(201).json({ message: "Purchase created successfully" });
};

export const getPurchasesController = async (_: Request, res: Response) => {
    const purchases = await purchaseService.getPurchases();
    res.status(200).json({ purchases });
};

export const getPurchasesById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const purchase = await purchaseService.getPurchasesById(id);
    if (!purchase) {
        return res.status(404).json({ message: "Purchase not found" });
    }
    res.status(200).json({ purchase });
};
