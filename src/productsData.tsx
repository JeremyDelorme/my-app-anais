// productsData.tsx
export interface Product {
    id: string;
    name: string;
    price: number;
    quantity: number;
    image: string;
}

export const products: Product[] = [
    {
        id: "item_1",
        name: "Escargot",
        price: 10.99,
        quantity: 1,
        image: "/hugo.jpeg"
    },
    {
        id: "item_2",
        name: "Poulets",
        price: 19.99,
        quantity: 1,
        image: "/pouletTropical.jpeg"
    },
    {
        id: "item_3",
        name: "Caméléon",
        price: 15.99,
        quantity: 1,
        image: "/elton.jpeg"
    }
];

export const cartId = "1234567890";
export const items = products;
export const totalItems = products.length;
export const totalPrice = products.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);


