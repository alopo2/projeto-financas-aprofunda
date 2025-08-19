import { Request, Response } from 'express';
import { checkout } from '../services/checkoutService';

export const checkoutCreateController = (req: Request, res: Response) => {
    checkout();
    res.status(200).send("Checkout processed");
};
