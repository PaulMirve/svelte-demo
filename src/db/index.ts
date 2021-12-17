import type { Product } from '../interfaces/Product';

const products: Product[] = [
    {
        name: "Jordan Air 1",
        description: "A very popular Jordan",
        image: "image",
        price: 400,
    },
    {
        name: "Vans Shima Ferguson",
        description: "A very popular model",
        image: "image",
        price: 300,
    },
    {
        name: "Adidas low",
        description: "A very popular Adidas",
        image: "image",
        price: 800,
    },
]

export const getProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 1000);
    });
}