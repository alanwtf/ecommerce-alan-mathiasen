import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyAwKdrUsOx7pnH5zy8da00RDOHBJTcGcaY",
    authDomain: "skatestore-b5702.firebaseapp.com",
    projectId: "skatestore-b5702",
    storageBucket: "skatestore-b5702.appspot.com",
    messagingSenderId: "543351467723",
    appId: "1:543351467723:web:1aa1b7da723d921e30754e",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
};
