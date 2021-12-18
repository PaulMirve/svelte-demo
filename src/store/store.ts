import { writable } from "svelte/store";
import type { CartProduct } from "../interfaces/CartProduct";

function createShoppingCart() {
    const products: CartProduct[] = [];
    const { subscribe, update } = writable<CartProduct[]>(products);

    return {
        subscribe,
        addProduct: (product: CartProduct) => update(products => {
            const _product = products.find(x => x.product.id === product.product.id);
            const productIndex = products.indexOf(_product);
            if (productIndex > -1) {
                const prod = { ..._product }
                const newProducts = [...products];
                prod.count += product.count;
                newProducts[productIndex] = prod;
                return newProducts;
            }
            return [product, ...products]
        })
    }
}

export const shoppingCart = createShoppingCart();

