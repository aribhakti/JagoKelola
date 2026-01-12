import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// Using Vite's import.meta.env for environment variables
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyABHQRDwcalFTFz07MSWmRjwCIX9vXEl7s",
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "jagokelola-34e5f.firebaseapp.com",
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "jagokelola-34e5f",
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "jagokelola-34e5f.firebasestorage.app",
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "978533432818",
    appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:978533432818:web:f6abcd46022fb2dabbbf6b",
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-00QH5644LS"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Analytics initialization with support check
let analytics = null;

if (typeof window !== "undefined") {
    isSupported().then((supported) => {
        if (supported) {
            analytics = getAnalytics(app);
        }
    }).catch(err => {
        console.warn("Firebase Analytics not supported in this environment:", err);
    });
}

export { app, analytics };
