// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzv34NblndndqxRQ8xaWx0SuI3SOM0SNg",
  authDomain: "netflix-clone-c20e4.firebaseapp.com",
  projectId: "netflix-clone-c20e4",
  storageBucket: "netflix-clone-c20e4.appspot.com",
  messagingSenderId: "680934270196",
  appId: "1:680934270196:web:c7d021242d460443812aa1",
  measurementId: "G-M5PS9CBY5R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
