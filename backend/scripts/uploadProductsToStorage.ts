import * as admin from 'firebase-admin';

const serviceAccountPath = 'public/my-app-anais-firebase-adminsdk-xqv8c-741d4130c7.json'; // Replace with your service account key path
const serviceAccount = require(serviceAccountPath);

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'my-app-anais.appspot.com', // Replace with your Firestore database URL
});

const bucket = admin.storage().bucket();

const uploadJSONToStorage = async (fileName: string, jsonData: any) => {
    const jsonString = JSON.stringify(jsonData);

    const file = bucket.file(fileName);

    await file.save(jsonString, {
        metadata: {
            contentType: 'application/json',
        },
    });

    console.log(`JSON data uploaded to storage as ${fileName}`);
};

// Example usage
const jsonData = { key: 'value' };
const fileName = 'example.json';

uploadJSONToStorage(fileName, jsonData);
