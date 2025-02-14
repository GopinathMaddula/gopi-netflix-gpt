// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth/cordova";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfT7CToIbuhcG5a6WaV-5VBw5J-2WP_kk",
  authDomain: "netflix-clone-11aa3.firebaseapp.com",
  projectId: "netflix-clone-11aa3",
  storageBucket: "netflix-clone-11aa3.firebasestorage.app",
  messagingSenderId: "352113022927",
  appId: "1:352113022927:web:f77768cf7574c7443ea4ba",
  measurementId: "G-V2B6Q36JKD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
