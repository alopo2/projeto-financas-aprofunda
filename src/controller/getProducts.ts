import { Request, Response } from 'express';
import { getProducts } from '../services/productsService';

export const getProductsController = async (req: Request, res: Response) => {
    const products = getProducts();
    res.status(200).json(products);
};
