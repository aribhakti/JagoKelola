// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABHQRDwcalFTFz07MSWmRjwCIX9vXEl7s",
    authDomain: "jagokelola-34e5f.firebaseapp.com",
    projectId: "jagokelola-34e5f",
    storageBucket: "jagokelola-34e5f.firebasestorage.app",
    messagingSenderId: "978533432818",
    appId: "1:978533432818:web:f6abcd46022fb2dabbbf6b",
    measurementId: "G-00QH5644LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Analytics check for SSR/Browser environment
let analytics;
if (typeof window !== "undefined") {
    analytics = getAnalytics(app);
}

export { app, analytics };
