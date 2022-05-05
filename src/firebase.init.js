// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCesuLR3vUen2SPWPILVCoVy3D4pQE8Bes",
    authDomain: "react-bike-shop.firebaseapp.com",
    projectId: "react-bike-shop",
    storageBucket: "react-bike-shop.appspot.com",
    messagingSenderId: "38309366700",
    appId: "1:38309366700:web:9b717542da1e0b5acd4809"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;