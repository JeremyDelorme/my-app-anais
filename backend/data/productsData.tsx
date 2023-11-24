interface Product {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Escargot",
        price: 10.99,
        quantity: 50
    },
    {
        id: 2,
        name: "Poulets",
        price: 19.99,
        quantity: 30
    }
];

export default products;
