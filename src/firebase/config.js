import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCLR-QQegt1haU-7m3DJ0oGcfvpMBheg5Q",
    authDomain: "skatestore-ddc64.firebaseapp.com",
    projectId: "skatestore-ddc64",
    storageBucket: "skatestore-ddc64.appspot.com",
    messagingSenderId: "342912611281",
    appId: "1:342912611281:web:9e53b424bc84d0678726f0",
};

const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
};
