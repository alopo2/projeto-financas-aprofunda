import { products } from "../productsData";

type Products = {
    id: string;
    name: string;
    price: number;
};

export const getProducts = (): Products[] => {
    return products.map(product => ({
        id: String(product.id),
        name: product.name,
        price: product.price
    }));
};
