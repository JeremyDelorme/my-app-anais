const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

import ProductsData from '../data/ProductsData';

const firebaseConfig = {
    apiKey: "AIzaSyDsITubRs-XzL-f-4TODCBfzla7MPhjVaE",
    authDomain: "my-app-anais.firebaseapp.com",
    projectId: "my-app-anais",
    storageBucket: "my-app-anais.appspot.com",
    messagingSenderId: "1015473953482",
    appId: "1:1015473953482:web:ec84064fb16007f17e3233"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, 'products');

ProductsData.forEach(async (movie: any) => {
    try {
        await addDoc(productsCollection, movie);
        console.log(`Added movie: ${movie.title}`);
    } catch (error) {
        console.error(`Error adding movie: ${movie.title}`, error);
    }
});
