import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPtpj14_fPfWRwQoYRtaYXCHcixKdVcD4",
  authDomain: "house-marketplace-app-9c02f.firebaseapp.com",
  projectId: "house-marketplace-app-9c02f",
  storageBucket: "house-marketplace-app-9c02f.appspot.com",
  messagingSenderId: "162656661746",
  appId: "1:162656661746:web:2cd97c02041dc88888e06b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
