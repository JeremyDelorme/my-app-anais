import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import { Product } from '../productsData'; // Assuming you've exported the Product interface

const fetchDataFromFirestore = async (): Promise<Product[]> => {
    try {
        const querySnapshot = await getDocs(collection(db, 'products'));
        const products: Product[] = [];

        querySnapshot.forEach((doc: any) => { // Use the correct type for 'doc'
            const data = doc.data();
            products.push({
                id: doc.id,
                name: data.name,
                price: data.price,
                quantity: data.quantity,
                image: data.image,
            });
        });

        return products;
    } catch (error) {
        console.error('Error fetching data from Firestore:', error);
        return [];
    }
};

export default fetchDataFromFirestore;
