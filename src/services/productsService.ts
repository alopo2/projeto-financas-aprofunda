type Products = {
    id: string;
    name: string;
    price: number;
};

export const getProductsApi = async (): Promise<Products[]> => {
    const response = await fetch('https://pretalab-api-439254010866.us-central1.run.app/products');
    const result: { data: Products[] } = await response.json();

    return result.data.map((product: Products) => ({
        id: product.id,
        name: product.name,
        price: product.price
    }));
}