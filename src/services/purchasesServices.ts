import { buyData } from "../buyData";

type BuyData = {
    id: string;
    date: string;
    total: number;
    items: Array<{
        name: string;
        productId: string;
        quantity: number;
        price: number;
    }>;
};

export const getPurchases = (): BuyData[] => {
    return [buyData];
};
