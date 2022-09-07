import admin from 'firebase-admin'
import { type } from 'os';

import serviceAccount from './desafio2daentrega-1c68d-firebase-adminsdk-9wuew-df4c7a27e8.json' assert {type: "json"}

try {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    });
   
} catch (error) {
    console.log(error);
}

const config = {
    mongoDb: {
        url: 'mongodb+srv://andres:Dorian23@cluster0.ohq5xhd.mongodb.net/ecommerce?retryWrites=true&w=majority',
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    },
    fileSystem: {
        dirProducts: './src/controllers/files/productos.json',
        dirCarts: './src/controllers/files/carts.json'
    },
    firebase: {
        db: admin.firestore(),
    }
}

export default config;