interface BuyData {
    id: string;
    date: string;
    total: number;
    items: Array<{
        name: string;
        productId: string;
        quantity: number;
        price: number;
    }>;
}

export const buyData: BuyData = {
    id: "1",
    date: "2023-10-01",
    total: 100,
    items: [
        {
            name: "Produto 1",
            productId: "p1",
            quantity: 2,
            price: 25
        },
        {
            name: "Produto 2",
            productId: "p2",
            quantity: 1,
            price: 50
        }
    ]
};
