import type { Product } from '../interfaces/Product';

const products: Product[] = [
    {
        id: 1,
        name: "Jordan Air 1",
        description: `Ad sequi deserunt tempore et excepturi corporis repellat perspiciatis non, sit molestias quaerat minima ut sed incidunt sunt nostrum, nisi delectus earum mollitia. Id eius aperiam tenetur accusantium corporis?
        Distinctio, reiciendis. Excepturi quisquam commodi deleniti adipisci voluptatem temporibus iure quibusdam corporis suscipit maiores harum nostrum perspiciatis dolore enim possimus eveniet, voluptas, et numquam porro? Explicabo reiciendis nulla quibusdam optio!`,
        image: "/images/product-1/photo-1.jpg",
        price: 400,
        gallery: [
            "/images/product-1/photo-2.jpg",
            "/images/product-1/photo-3.jpg",
            "/images/product-1/photo-4.jpg",
            "/images/product-1/photo-1.jpg",
        ]
    },
    {
        id: 2,
        name: "Nike Air Force",
        description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem sint architecto delectus quam, facilis perferendis atque optio ab beatae explicabo voluptatem maiores velit numquam, dolore inventore corrupti animi? Ex, assumenda.
        Consequuntur.`,
        image: "/images/product-2/photo-1.jpg",
        price: 300,
        gallery: [
            "/images/product-2/photo-2.jpg",
            "/images/product-2/photo-3.jpg",
            "/images/product-2/photo-4.jpg",
            "/images/product-2/photo-1.jpg",
        ]
    },
    {
        id: 3,
        name: "Adidas Grand Court",
        description: `Molestias, placeat? Pariatur eum ducimus odio asperiores aut totam in quidem odit. Cum aperiam ex saepe. Distinctio corrupti debitis asperiores. Nulla nam fugiat sint suscipit est eius quos voluptates inventore.
        Obcaecati soluta doloremque dicta cupiditate recusandae esse molestias voluptates iste. Incidunt, ut impedit. Impedit optio soluta eum suscipit labore dolores est, eos incidunt, doloremque accusantium iure sequi, exercitationem repudiandae molestiae?`,
        image: "/images/product-3/photo-1.jpg",
        price: 800,
        gallery: [
            "/images/product-3/photo-2.jpg",
            "/images/product-3/photo-3.jpg",
            "/images/product-3/photo-4.jpg",
            "/images/product-3/photo-1.jpg",
        ]
    },
]

export const getProducts = (): Promise<Product[]> => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 500);
    });
}