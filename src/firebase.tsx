import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDsITubRs-XzL-f-4TODCBfzla7MPhjVaE",
    authDomain: "my-app-anais.firebaseapp.com",
    databaseURL: "https://my-app-anais-default-rtdb.firebaseio.com",
    projectId: "my-app-anais",
    storageBucket: "my-app-anais.appspot.com",
    messagingSenderId: "1015473953482",
    appId: "1:1015473953482:web:ec84064fb16007f17e3233"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

