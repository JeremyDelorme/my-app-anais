import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { items as productsDataItems } from '../productsData'; // Import the named export 'items' from 'productsData'

const firebaseConfig = {
    apiKey: "AIzaSyDsITubRs-XzL-f-4TODCBfzla7MPhjVaE",
    authDomain: "my-app-anais.firebaseapp.com",
    databaseURL: "https://my-app-anais-default-rtdb.firebaseio.com",
    projectId: "my-app-anais",
    storageBucket: "my-app-anais.appspot.com",
    messagingSenderId: "1015473953482",
    appId: "1:1015473953482:web:ec84064fb16007f17e3233"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

const productsCollection = collection(db, 'products');

productsDataItems.forEach(async (product: any) => {
    try {
        await addDoc(productsCollection, {
            ...product,
            id: product.id.toString(),
        });
        console.log(`Added product: ${product.name}`);
    } catch (error) {
        console.error(`Error adding product: ${product.name}`, error);
    }
});
