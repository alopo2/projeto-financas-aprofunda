import { Request, Response } from 'express';
import { getProductsApi } from '../services/productsService';

export const getProductsApiController = async (_: Request, res: Response) => {
    const products = await getProductsApi();
    res.status(200).json(products);
};
