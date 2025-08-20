import { Request, Response } from 'express'; 
import { getPurchases } from '../services/purchasesServices';

export const getPurchasesController = (req: Request, res: Response) => {
    const purchases = getPurchases();
    res.status(200).json({ purchases });
};

export const getPurchasesById = (req: Request, res: Response) => {
    const { id } = req.params;
    const purchase = getPurchases().find(p => p.id === id);
    if (!purchase) {
        return res.status(404).json({ message: "Purchase not found" });
    }
    res.status(200).json({ purchase });
};
