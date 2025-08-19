import { Request, Response } from 'express'; 
import { getPurchases } from '../services/purchasesServices';

export const getPurchasesController = (req: Request, res: Response) => {
    const purchases = getPurchases();
    res.status(200).json({ purchases });
};
